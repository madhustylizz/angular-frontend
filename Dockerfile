# Stage 1: Build Angular App
FROM node:18-slim AS builder
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npx ng build --configuration production

# Stage 2: Serve with http-server
FROM node:18-slim
RUN npm install -g http-server
WORKDIR /app
COPY --from=builder /app/dist/BookInventory/ .
EXPOSE 4200
CMD [ "http-server", "-p", "4200" ]
