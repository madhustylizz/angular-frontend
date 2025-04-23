# Stage 1: Build Angular App
FROM node:18-slim AS builder
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npx ng build --configuration production

# Stage 2: Serve with Apache
FROM httpd:alpine
COPY --from=builder /app/dist/BookInventory/ /usr/local/apache2/htdocs/
