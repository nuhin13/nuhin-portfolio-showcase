FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm ci --no-audit --prefer-offline
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]