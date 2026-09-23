from pathlib import Path
import io

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from ultralytics import YOLO


# Project root
PROJECT_ROOT = Path(__file__).resolve().parents[1]

# Trained model path
MODEL_PATH = (
    PROJECT_ROOT
    / "runs"
    / "detect"
    / "train-5"
    / "weights"
    / "best.pt"
)

# Load model
model = YOLO(str(MODEL_PATH))

app = FastAPI(
    title="Smart Municipal Complaint AI",
    description="AI service for detecting municipal complaints from images",
    version="1.0"
)

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


ISSUE_DETAILS = {
    "pothole": {
        "issue": "Pothole",
        "department": "Road Maintenance Department",
        "priority": "High",
        "suggested_action": "Inspect and repair the damaged road surface"
    },
    "garbage_dumping": {
        "issue": "Garbage Dumping",
        "department": "Sanitation Department",
        "priority": "High",
        "suggested_action": "Remove accumulated garbage and clean the area"
    },
    "damaged_streetlight": {
        "issue": "Damaged Streetlight",
        "department": "Electrical Department",
        "priority": "Medium",
        "suggested_action": "Inspect and repair or replace the streetlight"
    },
    "drainage_overflow": {
        "issue": "Drainage Overflow",
        "department": "Drainage Department",
        "priority": "High",
        "suggested_action": "Inspect the drainage line and clear the blockage"
    }
}


@app.get("/")
def home():
    return {
        "message": "Smart Municipal Complaint AI API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "model_loaded": True,
        "classes": model.names
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    image_bytes = await file.read()

    image = Image.open(
        io.BytesIO(image_bytes)
    ).convert("RGB")

    results = model(
        image,
        device="cpu",
        conf=0.5,
        verbose=False
    )

    detections = []

    for box in results[0].boxes:

        class_id = int(box.cls[0].item())
        confidence = float(box.conf[0].item())
        class_name = model.names[class_id]

        coordinates = [
            round(float(value), 2)
            for value in box.xyxy[0].tolist()
        ]

        detections.append({
            "class_id": class_id,
            "class_name": class_name,
            "confidence": round(confidence, 4),
            "confidence_percent": round(confidence * 100, 2),
            "box": coordinates
        })

    if not detections:
        return {
            "success": True,
            "detected_issue": "Unknown",
            "message": "No supported municipal issue detected",
            "confidence": 0,
            "detections_count": 0,
            "detections": []
        }

    top_detection = max(
        detections,
        key=lambda detection: detection["confidence"]
    )

    detected_class = top_detection["class_name"]
    confidence = top_detection["confidence"]

    details = ISSUE_DETAILS.get(
        detected_class,
        {
            "issue": detected_class,
            "department": "Municipal Corporation",
            "priority": "Medium",
            "suggested_action": "Manual inspection required"
        }
    )

    return {
        "success": True,
        "issue": details["issue"],
        "department": details["department"],
        "priority": details["priority"],
        "suggested_action": details["suggested_action"],
        "confidence": confidence,
        "confidence_percent": round(confidence * 100, 2),
        "detections_count": len(detections),
        "detections": detections
    }