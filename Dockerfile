# Use official Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

# Copy the rest of the application
COPY . /app/

# Build the Angular app
RUN npm run build --prod

# Install an HTTP server to serve the built app
RUN npm install -g http-server

# Expose the port
EXPOSE 80

# Serve the app on port 80
CMD ["http-server", "dist/your-angular-app", "-p", "80"]
