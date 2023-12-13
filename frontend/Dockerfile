FROM node:18-alpine AS builder

WORKDIR /usr/src/spryte-frontend

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=builder /usr/src/spryte-frontend/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf