pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building backend and frontend Docker images...'
                bat 'docker-compose build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deliver') {
            steps {
                echo 'Deploying application...'
                bat 'docker-compose down'
                bat 'docker-compose up -d'
            }
        }
    }

    post {
        success { echo 'Pipeline succeeded!' }
        failure { echo 'Pipeline failed!' }
    }
}
