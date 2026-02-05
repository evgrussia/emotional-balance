# Multi-stage: build Vite SPA + serve with nginx
# emotional-balance frontend — balance-space.ru

FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./
# peerDependencies react/react-dom — install explicitly
RUN npm i react@18.3.1 react-dom@18.3.1
RUN npm i

COPY . .
RUN npm run build

# Runtime: nginx
FROM nginx:alpine

# Default Vite output
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA fallback: all routes -> index.html
RUN echo 'server { \
  listen 80; \
  root /usr/share/nginx/html; \
  index index.html; \
  location / { try_files $uri $uri/ /index.html; } \
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ { expires 1y; add_header Cache-Control "public, immutable"; } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
