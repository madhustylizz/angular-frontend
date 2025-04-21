pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/madhustylizz/angular-frontend.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("angular-frontend")
                }
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 80:80 --name frontend angular-frontend'
            }
        }
    }
}
