# Step 1: Build the Angular app using Node.js image
FROM node:16-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY angular-frontend/package.json angular-frontend/package-lock.json /app/
RUN npm install

# Copy the Angular project and build it
COPY angular-frontend /app/
RUN npm run build --prod

# Step 2: Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy the Angular build from the build stage into the Nginx server
COPY --from=build /app/dist/angular-frontend /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start Nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
