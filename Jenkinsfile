pipeline {
    agent any

    environment {
        REGISTRY = 'your-docker-repo/frontend-app'
        IMAGE_NAME = 'frontend-app'
        TAG = "${env.BUILD_ID}"
    }

    stages {
        stage('Checkout Repositories') {
            steps {
                // Checkout frontend repository
                dir('angular-frontend') {
                    git url: 'https://github.com/madhustylizz/angular-frontend.git', branch: 'main'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
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
                    sh "docker run -d -p 80:80 ${REGISTRY}:${TAG}"
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
