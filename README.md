# Beatstat Frontend

This is the frontend for the **Beatstat** project, built with [Vite](https://vitejs.dev/) and React. The development environment is fully containerized using Docker and Docker Compose.

---

## 🚀 Getting Started (with Docker Compose)

To run this project locally using Docker Compose, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/nowhereOnce/BeatStat-front
cd Beatstat-front
```

### 2. Build the Docker image

```bash
docker compose build
```

### 3. Start the development server

```bash
docker compose up
```

The app will be available at http://localhost:5173

---

⚙️ Configuration Notes

    Vite is configured to run on port 5173.

    The project source code is mounted into the container as a volume for live hot-reload.

    The node_modules folder is handled inside the container to avoid host conflicts.

---

📦 Requirements

    Docker

    Docker Compose plugin

You can verify the plugin with:

```bash
docker compose version
```

--- 

🧼 Cleanup

To stop the container:

```bash
docker compose down
```

To rebuild after changes in the Dockerfile or dependencies:

```bash
docker compose up --build
```

