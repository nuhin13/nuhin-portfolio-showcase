#!/bin/bash
set -e

# Build Docker image from docker/Dockerfile
IMAGE_NAME="nuhin-portfolio-app"
DOCKERFILE_PATH="docker/Dockerfile"
DOCKER_COMPOSE_PATH="docker/docker-compose.yml"

# Step 1: Build the Docker image
echo "Building Docker image..."
docker build -f "$DOCKERFILE_PATH" -t "$IMAGE_NAME" .
echo "Docker image built successfully."

# Step 2: Stop and remove any running containers for this app
EXISTING_CONTAINER=$(docker ps -aq --filter "ancestor=$IMAGE_NAME")
if [ -n "$EXISTING_CONTAINER" ]; then
  echo "Stopping and removing existing containers..."
  docker stop $EXISTING_CONTAINER || true
  docker rm $EXISTING_CONTAINER || true
fi

# Step 3: Deploy using docker-compose
echo "Starting services with docker-compose..."
docker compose -f "$DOCKER_COMPOSE_PATH" up -d --build

echo "Deployment complete."

