# Stage 1: Build Angular App
FROM node:16.20.2
WORKDIR /app

# Copy only package files and install dependencies
COPY package*.json ./
RUN echo "Before npm install"
RUN npm install
RUN echo "After npm install"

# Copy the rest of the application code
COPY . .

# Set environment for Angular build
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the Angular app
RUN echo "Before build"
RUN npm run build -- --configuration production
RUN echo "After build"

# Stage 2: Serve the app using http-server
FROM node:16.20.2
WORKDIR /app

# Install http-server globally
RUN npm install -g http-server

# Copy build output from the builder stage
COPY --from=builder /app/dist/BookInventory /app

# Expose the port
EXPOSE 4200

# Serve the app
CMD ["http-server", ".", "-p", "4200", "-d", "false"]
