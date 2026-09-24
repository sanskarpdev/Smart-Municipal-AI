# 🏙️ Smart Municipal AI

> An AI-powered solution designed to help municipalities detect and manage common urban infrastructure and cleanliness issues using Machine Learning and a web-based interface.

## 🚀 About the Project

**Smart Municipal AI** is an AI-driven municipal intelligence project developed during **Buildathon**, an inter-college hackathon held at our college campus.

The project focuses on using **Computer Vision and Machine Learning** to identify urban issues such as:

- 💡 Damaged Streetlights
- 🚰 Drainage-related issues
- 🗑️ Garbage / Waste
- 🛣️ Other municipal infrastructure problems

The system combines trained ML models, AI services, APIs, and a modern web interface to provide a foundation for smarter and more efficient municipal issue detection.

---

## 🧠 AI & Machine Learning

The project uses a **YOLO-based object detection approach** for training and detecting different categories of municipal issues.

### Dataset Categories

The repository contains datasets for:

- `damaged_lights_dataset`
- `drainage_dataset`
- `garbage_dataset`
- `streetlight_dataset`

The `ai-services` module contains the ML pipeline, including dataset preparation scripts, testing/training resources, and the main AI service.

Trained model weights and YOLO experiment results are maintained separately in:

```text
weights/
runs/detect/
