pipeline {
    agent any

    environment {
        REGISTRY = 'your-docker-repo/full-stack-app'
        IMAGE_NAME = 'full-stack-app'
        TAG = "${env.BUILD_ID}"
    }

    stages {
        stage('Checkout Frontend') {
            steps {
                // Checkout the frontend repository
                git url: 'https://github.com/madhustylizz/angular-frontend.git', branch: 'main'
            }
        }

        stage('Checkout Backend') {
            steps {
                // Checkout the backend repository
                git url: 'https://github.com/madhustylizz/java-backend.git', branch: 'main'
            }
        }

        stage('Build Frontend and Backend') {
            steps {
                script {
                    // Build the Angular frontend
                    dir('angular-frontend') {
                        sh 'npm install'
                        sh 'npm run build --prod'
                    }

                    // Build the Java backend with Maven
                    dir('java-backend') {
                        sh 'mvn clean package -DskipTests'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
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

        stage('Deploy Container') {
            steps {
                script {
                    // Deploy the container (runs on ports 8082 and 80)
                    sh "docker run -d -p 8082:8082 -p 80:80 ${REGISTRY}:${TAG}"
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
