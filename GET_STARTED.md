# Getting Started with A.S.P.I.R.E Club Portal

This guide will help you set up the A.S.P.I.R.E Club portal project locally for development.

## Prerequisites

*   **Docker and Docker Compose**: Ensure you have Docker Desktop (or Docker Engine and Docker Compose CLI) installed and running on your system. You can download it from [Docker's official website](https://www.docker.com/products/docker-desktop/).
*   **Git**: For cloning the repository.
*   **Node.js and npm/yarn (Optional for local non-Docker development)**: While Docker handles the runtime environments, you might want Node.js installed locally for IDE integrations or running commands directly.

## Setup Instructions

1.  **Clone the Repository**:
    ```bash
    git clone <repository_url>
    cd ASPIREClub
    ```
    *(Replace `<repository_url>` with the actual URL of your Git repository)*

2.  **Environment Variables (if any)**:
    *   Check if there are any `.env.example` files in the `frontend` or `backend` directories. If so, copy them to `.env` (e.g., `cp frontend/.env.example frontend/.env`) and fill in any necessary values. Currently, the project structure suggests environment variables might be managed within Docker configurations or directly in code for development. Please update this section as your project evolves with specific `.env` file requirements.

3.  **Start the Services**:
    Navigate to the root directory of the project (where `docker-compose.yml` is located) and run:
    ```bash
    docker-compose up -d
    ```
    This command will build the Docker images (if not already built) and start the frontend, backend, and MongoDB services in detached mode.

4.  **Verify Services**:
    *   You can check the status of the running containers using:
        ```bash
        docker-compose ps
        ```
    *   To view logs for a specific service (e.g., frontend):
        ```bash
        docker-compose logs -f frontend
        ```

5.  **Access the Application**:
    *   **Frontend (Next.js)**: Open your web browser and navigate to [http://localhost:3000](http://localhost:3000)
    *   **Backend (Node.js/Express)**: The backend API should be accessible. Based on typical configurations, it might be on a port like `5001`. Check your `docker-compose.yml` or backend service configuration for the exact port and API base path (e.g., [http://localhost:5001/api](http://localhost:5001/api)).

6.  **Stopping the Services**:
    To stop all running services:
    ```bash
    docker-compose down
    ```

## Development Workflow

*   **Frontend**: Changes made to files in the `frontend/src` directory should trigger hot reloading in your browser at `http://localhost:3000`.
*   **Backend**: Changes made to files in the `backend` directory might require a restart of the backend service. You can restart a specific service using:
    ```bash
    docker-compose restart backend
    ```
    Or, to rebuild and restart if you've changed dependencies or Docker configurations:
    ```bash
    docker-compose up -d --build backend
    ```

## Troubleshooting

*   **Port Conflicts**: If `localhost:3000` or other ports are already in use, you might need to stop the conflicting application or modify the port mappings in `docker-compose.yml`.
*   **Docker Issues**: Refer to Docker documentation or check container logs (`docker-compose logs <service_name>`) for errors.

---

Happy Coding!
