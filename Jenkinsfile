pipeline {
    agent any

    environment {
        REGISTRY = 'your-docker-repo/full-stack-app'
        IMAGE_NAME = 'full-stack-app'
        TAG = "${env.BUILD_ID}"
    }

    stages {
        stage('Checkout Repositories') {
            steps {
                // Checkout backend
                dir('java-backend') {
                    git url: 'https://github.com/madhustylizz/java-backend.git', branch: 'main'
                }

                // Checkout frontend
                dir('angular-frontend') {
                    git url: 'https://github.com/madhustylizz/angular-frontend.git', branch: 'main'
                }
            }
        }

        stage('Build Projects') {
            steps {
                script {
                    // Backend build
                    dir('java-backend') {
                        sh 'mvn clean package -DskipTests'
                    }

                    // Frontend build
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
                    sh "docker build -t ${REGISTRY}:${TAG} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh "docker push ${REGISTRY}:${TAG}"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh "docker run -d -p 8081:8081 ${REGISTRY}:${TAG}"
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
