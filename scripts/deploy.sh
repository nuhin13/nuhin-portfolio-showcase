#!/bin/bash

# Production deployment script
set -e

echo "🚀 Starting production deployment..."

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down --remove-orphans

# Build with no cache for production
echo "🏗️ Building containers..."
docker-compose build --no-cache

# Start services
echo "▶️ Starting services..."
docker-compose up -d

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
sleep 30

# Health check
if curl -f http://localhost:8080/health > /dev/null 2>&1; then
    echo "✅ Portfolio is healthy and running on port 8080"
    echo "🌐 Local access: http://192.168.0.105:8080"
    echo "🌐 Domain access: https://nuhin13.com (after domain setup)"
else
    echo "❌ Health check failed. Checking logs..."
    docker-compose logs
    exit 1
fi

echo "🎉 Deployment completed successfully!"