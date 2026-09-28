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
```

---

## 🖥️ Tech Stack

### 🤖 AI / Machine Learning

* **Python**
* **YOLO** — Object Detection
* **Computer Vision**
* **Machine Learning**

### 🌐 Frontend

* **Next.js**
* **TypeScript**
* **JavaScript**
* **CSS**

### 🔌 Backend & API

* **Python**
* **API Integration**
* **AI Service Layer**

### 📊 Data & Model Training

* **Image Datasets**
* **Data Preprocessing**
* **Model Training & Validation**
* **YOLO Model Weights**

### 🛠️ Development Tools

* **Git & GitHub**
* **npm**
* **ESLint**

---

## 📂 Project Structure

```text
Smart-Municipal-AI/
│
├── ai-services/                 # AI/ML services and model pipeline
│   ├── dataset/                 # AI service datasets
│   ├── final_dataset/           # Processed/final datasets
│   ├── test_images/             # Images for testing
│   ├── main.py                  # Main AI service
│   ├── prepare_drainage.py      # Drainage dataset preparation
│   ├── prepare_garbage.py       # Garbage dataset preparation
│   ├── prepare_streetlights.py   # Streetlight dataset preparation
│   └── requirements.txt          # Python dependencies
│
├── frontend/                    # Web application
│   ├── app/                     # Application pages & components
│   ├── public/                  # Public/static assets
│   ├── package.json             # Frontend dependencies
│   ├── next.config.ts           # Next.js configuration
│   ├── tsconfig.json            # TypeScript configuration
│   └── ...
│
├── damaged_lights_dataset/      # Damaged lights image dataset
├── drainage_dataset/            # Drainage image dataset
├── garbage_dataset/             # Garbage image dataset
├── streetlight_dataset/         # Streetlight image dataset
│
├── runs/                        # YOLO training & prediction results
│   └── detect/
│       ├── train/
│       ├
```

---

## 🏆 Buildathon Achievement

Our team participated in **Buildathon**, an **inter-college hackathon** conducted at our college campus, where we developed **Smart Municipal AI** as a team of four.

🏆🏆 **Achievement: Consolation Prize — 4th Position** 🏆🏆

The project was developed through collaborative efforts in **AI/ML model development, frontend development, API integration, backend support, project coordination, and presentation**.

> 🚀 **Built together. Presented together. Achieved together.**

---

## 👥 Team & Contributions

| Team Member         | Role & Contribution                                         |
| ------------------- | ----------------------------------------------------------- |
| **Sanskar Patil**   | 💡 Idea Presentation & ML Model Development                 |
| **Sumit Patil**     | 🤖 ML Model Development                                     |
| **Sarthak Rangdal** | 🖥️ Frontend Development, API Integration & Backend Support |
| **Samarth**         | 🧠 ML Model Building & Training                             |

### 🤝 Team Collaboration

All four team members contributed to **project coordination, development, integration, testing, and overall problem-solving** throughout the Buildathon.

> **One team. One idea. One build. 🚀**

---

## 🔮 Future Scope

* 📍 **Location-Based Issue Mapping** — Map detected municipal issues to their exact locations.
* 📸 **Real-Time Detection** — Extend the system to support real-time image and video analysis.
* 📊 **Smart Municipal Dashboard** — Provide analytics and visual insights for detected issues.
* 🗂️ **Automated Issue Reporting** — Generate and manage municipal complaints based on detected problems.
* 🧠 **Improved Model Accuracy** — Train models with larger and more diverse datasets.
* 🌐 **Scalable Deployment** — Integrate the solution with real-world smart-city and municipal systems.

> 🚀 **From a hackathon prototype to a smarter, more connected municipal intelligence system.**

---

## 🔮 Future Scope

* 📍 **Location-Based Issue Mapping** — Map detected municipal issues to their exact locations.
* 📸 **Real-Time Detection** — Extend the system to support real-time image and video analysis.
* 📊 **Smart Municipal Dashboard** — Provide analytics and visual insights for detected issues.
* 🗂️ **Automated Issue Reporting** — Generate and manage municipal complaints based on detected problems.
* 🧠 **Improved Model Accuracy** — Train models with larger and more diverse datasets.
* 🌐 **Scalable Deployment** — Integrate the solution with real-world smart-city and municipal systems.

> 🚀 **From a hackathon prototype to a smarter, more connected municipal intelligence system.**

---

## 🤝 Built With Teamwork

This project was built during **Buildathon** through the combined efforts of our entire team.

From **ideation and presentation** to **ML model development, frontend, API integration, testing, and coordination**, every team member played an important role in bringing the project together.

> 💙 **Different skills. One team. One vision. One project. 🚀**

**Built with teamwork, collaboration, and a lot of late-night debugging. ☕💻**
