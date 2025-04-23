# Stage 1: Build Angular App
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod --project=BookInventory

# Stage 2: Serve with Apache
FROM httpd:alpine
COPY --from=builder /app/dist/BookInventory/ /usr/local/apache2/htdocs/
