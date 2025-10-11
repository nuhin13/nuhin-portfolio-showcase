#!/bin/bash

# SSL Certificate setup script using Let's Encrypt
set -e

echo "🔐 Setting up SSL certificate for nuhin13.com..."

# Install certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Generate SSL certificate
echo "📜 Generating SSL certificate..."
sudo certbot --nginx -d nuhin13.com -d www.nuhin13.com --non-interactive --agree-tos -m nuhin.csedu@gmail.com

echo "✅ SSL certificate installed successfully!"
echo "🔄 SSL will auto-renew via certbot timer"