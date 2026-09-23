# 🏙️ Smart Municipal AI

## 📖 Overview

**Smart Municipal AI** is an AI-powered municipal infrastructure monitoring project developed during **Buildathon**, an inter-college hackathon conducted at our college campus.

The project explores the use of **Artificial Intelligence, Machine Learning, and Computer Vision** to assist in identifying and monitoring common municipal infrastructure and cleanliness-related issues.

The system focuses on categories such as:

- 🚨 Damaged Street Lights
- 🚰 Drainage-related Issues
- 🗑️ Garbage / Waste
- 💡 Streetlight-related Issues

The project combines **custom datasets, a YOLO-based object detection model, AI services, model training and prediction workflows, and a modern web-based frontend** to create a foundation for intelligent municipal monitoring.

---

## 🎯 Problem Statement

Municipal authorities need to continuously monitor public infrastructure and cleanliness across large areas.

Manually identifying problems such as damaged infrastructure, garbage accumulation, drainage issues, and streetlight-related problems can be time-consuming and difficult to scale.

Our project explores how **Computer Vision and Machine Learning** can assist in automating the identification of such issues and provide a technology-driven approach to municipal monitoring.

---

## 💡 Our Solution

Smart Municipal AI uses image-based machine learning to detect relevant municipal issues.

The project consists of:

1. **Custom datasets** for different municipal issue categories.
2. **Data preparation scripts** for preparing datasets for model training.
3. **YOLO-based object detection** for identifying relevant objects and issues.
4. **Training and prediction workflows** for developing and testing the machine learning model.
5. **AI services** that provide the machine learning functionality.
6. **Frontend application** for interacting with the system.
7. **Model weights and experiment outputs** generated during development.

The overall objective is to build a foundation for an AI-assisted municipal monitoring system that can help identify infrastructure and cleanliness-related issues more efficiently.

---

## 🤖 AI / Machine Learning

The machine learning component is organized inside the `ai-services` directory.

### AI Service Structure

ai-services/
│
├── dataset/
├── final_dataset/
├── test_images/
│
├── main.py
├── prepare_drainage.py
├── prepare_garbage.py
├── prepare_streetlights.py
└── requirements.txt
📊 Dataset Categories

The repository contains separate dataset directories for different municipal issue categories:

damaged_lights_dataset/
drainage_dataset/
garbage_dataset/
streetlight_dataset/

The AI services directory also contains:

dataset/
final_dataset/
test_images/

These resources are used as part of the dataset preparation, model training, and testing workflow.

🛠️ Data Preparation

Separate Python scripts were developed for preparing different categories of data:

prepare_drainage.py
prepare_garbage.py
prepare_streetlights.py

These scripts form part of the preprocessing and dataset preparation workflow before model training.

🧠 Object Detection Model

The project uses a YOLO-based object detection approach for its computer vision component.

The repository contains the model file:

yolo26n.pt

A copy of the model weight is also maintained inside:

weights/
└── yolo26n.pt

The model is used as part of the project's machine learning and object detection workflow.

🧪 Training & Prediction

The project contains experiment outputs generated during model development and testing.

These are organized under:

runs/
└── detect/
    ├── train/
    ├── train-2/
    ├── train-3/
    ├── train-4/
    ├── train-5/
    │
    ├── predict/
    ├── predict-2/
    ├── predict-3/
    ├── predict-4/
    ├── predict-5/
    ├── predict-6/
    ├── predict-7/
    ├── predict-8/
    ├── predict-9/
    └── predict-10/

The train directories represent different model training experiments, while the predict directories contain outputs from different prediction/testing runs performed during development.

🖥️ Frontend

The project includes a dedicated frontend application located inside:

frontend/

The frontend is structured as a modern Next.js + TypeScript web application.

Frontend Structure
frontend/
│
├── app/
├── public/
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json

The frontend provides the user-facing interface for interacting with the Smart Municipal AI system.

🏗️ Overall Architecture

The project can be broadly represented through the following workflow:

                  ┌──────────────────────┐
                  │   Municipal Images   │
                  │    / Test Images     │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │ Dataset Preparation  │
                  │      & Cleaning      │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │   YOLO-based Model   │
                  │       Training       │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  Object Detection &  │
                  │      Prediction      │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │     AI Services      │
                  │      (Python)        │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │      Frontend        │
                  │ Next.js + TypeScript │
                  └──────────────────────┘
📁 Project Structure
Smart-Municipal-AI/
│
├── ai-services/
│   ├── dataset/
│   ├── final_dataset/
│   ├── test_images/
│   ├── main.py
│   ├── prepare_drainage.py
│   ├── prepare_garbage.py
│   ├── prepare_streetlights.py
│   └── requirements.txt
│
├── damaged_lights_dataset/
│
├── drainage_dataset/
│
├── frontend/
│   ├── app/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── ...
│
├── garbage_dataset/
│
├── streetlight_dataset/
│
├── runs/
│   └── detect/
│       ├── train/
│       ├── train-2/
│       ├── train-3/
│       ├── train-4/
│       ├── train-5/
│       └── predict/
│           └── ...
│
├── weights/
│   └── yolo26n.pt
│
├── .gitattributes
├── .gitignore
├── README.md
└── yolo26n.pt
🛠️ Technologies Used
🤖 Artificial Intelligence & Machine Learning
Python
Computer Vision
YOLO-based Object Detection
Custom Image Datasets
Machine Learning Model Training
Image-based Prediction
🌐 Frontend
Next.js
TypeScript
JavaScript
HTML
CSS
PostCSS
🔧 Development & Version Control
Git
GitHub
⚙️ Installation & Setup
1. Clone the Repository

Replace YOUR-USERNAME with your GitHub username.

git clone https://github.com/YOUR-USERNAME/Smart-Municipal-AI.git

Move into the project directory:

cd Smart-Municipal-AI
2. Set Up the AI Services

Navigate to the AI services directory:

cd ai-services

Install the required Python dependencies:

pip install -r requirements.txt

The ai-services directory contains the Python-based machine learning workflow, dataset preparation scripts, test images, and AI-related functionality.

3. Set Up the Frontend

Open a new terminal and navigate to the frontend directory:

cd frontend

Install the required Node.js dependencies:

npm install

Start the Next.js development server:

npm run dev

The frontend can then be accessed through the local development URL provided by Next.js.

🔄 Development Workflow

The project follows a machine learning development workflow broadly based on:

Dataset Collection
        ↓
Dataset Preparation
        ↓
Model Training
        ↓
Model Testing
        ↓
Prediction
        ↓
AI Services
        ↓
Frontend Integration

The team experimented with different training and prediction runs during development and worked on integrating the machine learning component with the frontend.

🏆 Buildathon Achievement
🥉 Consolation Prize — 4th Position

Our team participated in Buildathon, an inter-college hackathon conducted at our college campus.

After developing and presenting the project, our team secured:

🏆 Consolation Prize — 4th Position

This project was developed collaboratively during the hackathon, with all four team members contributing to different technical, presentation, coordination, and development responsibilities.

👥 Team & Contributions
Team Member	Contribution
Sanskar Patil	Idea Presentation & Machine Learning Model Development
Sumit Patil	Machine Learning Model Development
Sarthak Rangdal	Frontend Development, API Integration & Backend Support
Samarth	Machine Learning Model Building & Training
🤝 Team Collaboration

Along with their individual responsibilities, all four team members contributed to coordination, collaboration, testing, problem-solving, and the overall development of the project throughout the Buildathon.

🚀 Future Scope

The current project can be further expanded into a larger municipal intelligence platform.

Potential future improvements include:

📍 Location-based issue mapping
📸 Real-time image and video monitoring
🗺️ Interactive municipal issue maps
🚨 Automated issue reporting
📊 Municipal authority dashboards
🔔 Real-time notifications
📈 Historical issue analysis
🏙️ Integration with smart-city infrastructure
📹 Integration with CCTV cameras and mobile sensing systems
🔍 Expansion to additional municipal infrastructure categories
⚡ Real-time AI-powered monitoring
📌 Project Status

This project was developed as a prototype during Buildathon.

The repository contains the machine learning resources, datasets, model files, training and prediction outputs, AI service components, and frontend application developed by our team during the hackathon.

👨‍💻 Team
Buildathon Team

Sanskar Patil
Idea Presentation & Machine Learning Model Development

Sumit Patil
Machine Learning Model Development

Sarthak Rangdal
Frontend Development, API Integration & Backend Support

Samarth
Machine Learning Model Building & Training

🙏 Acknowledgement

We would like to thank the Buildathon organizers, mentors, faculty members, and everyone involved in conducting the hackathon for providing us with the opportunity to work on this project, collaborate as a team, and present our solution.

📜 License

This repository was created as part of an academic hackathon project.

Please contact the project team before reusing or redistributing the project for commercial purposes.
