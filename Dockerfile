# Use Node.js image to build the Angular app
FROM node:16-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json /app/
RUN npm install

# Copy the Angular project and build it
COPY . /app/
RUN npm run build --prod

# Use Nginx to serve the built Angular app
FROM nginx:alpine

# Copy the Angular build from the build stage into the Nginx server
COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80
