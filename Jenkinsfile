pipeline {
    agent any
    
    tools {
        nodejs 'nodeHome' // Must match Node.js installation name in Jenkins
    }
    
    stages {
        // Stage 1: Checkout code from GitHub
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/PriteshBhuravane/DevOps_Project.git'
            }
        }
        
        // Stage 2: Install dependencies
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        
        // Stage 3: Run tests
        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
        
        // Stage 4: Build production app
        stage('Build') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'build/**/*', fingerprint: true
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed'
        }
    }
}