pipeline {
    agent any

    environment {
        REGISTRY = 'your-docker-repo/full-stack-app'
        IMAGE_NAME = 'full-stack-app'
        TAG = "${env.BUILD_ID}"
    }

    stages {
        stage('Checkout Backend and Frontend') {
            steps {
                // Checkout both repositories
                git url: 'https://github.com/madhustylizz/java-backend.git', branch: 'main'
                dir('angular-frontend') {
                    git url: 'https://github.com/madhustylizz/angular-frontend.git', branch: 'main'
                }
            }
        }

        stage('Build Backend and Angular App') {
            steps {
                script {
                    // Build the backend with Maven
                    sh 'mvn clean package -DskipTests'

                    // Build the Angular app
                    dir('angular-frontend') {
                        sh 'npm install'
                        sh 'npm run build --prod'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image combining both frontend and backend
                    sh "docker build -t ${REGISTRY}:${TAG} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push the Docker image to the registry
                    sh "docker push ${REGISTRY}:${TAG}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the container (runs on port 8080)
                    sh "docker run -d -p 8080:8080 ${REGISTRY}:${TAG}"
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
