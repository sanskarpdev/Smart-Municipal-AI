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
