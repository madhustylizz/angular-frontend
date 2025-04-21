# Step 1: Build the Angular app using Node.js image
FROM node:16-alpine AS build

WORKDIR /app

# Clone the frontend repository
COPY angular-frontend/package.json angular-frontend/package-lock.json /app/
RUN npm install

# Copy the Angular project and build it
COPY angular-frontend /app/
RUN npm run build --prod

# Step 2: Build the Java backend using Maven
FROM maven:3.8.6-openjdk-17 AS backend-build

WORKDIR /app

# Clone the backend repository
COPY java-backend/pom.xml /app/
RUN mvn dependency:resolve

# Copy the entire backend source code and build it
COPY java-backend /app/
RUN mvn clean package -DskipTests

# Step 3: Use Nginx to serve Angular and Java together
FROM nginx:alpine

# Copy the Angular build from the build stage into the Nginx server
COPY --from=build /app/dist/angular-frontend /usr/share/nginx/html

# Copy the Java backend JAR file from the build stage into the container
COPY --from=backend-build /app/target/java-backend.jar /usr/share/java/java-backend.jar

# Expose ports (frontend on port 80, backend on port 8082)
EXPOSE 8082 80

# Start the backend and frontend together
CMD java -jar /usr/share/java/java-backend.jar & nginx -g 'daemon off;'
