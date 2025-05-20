pipeline {
    agent any
    tools { nodejs 'nodeHome' }
    environment {
        CI = 'true'
        NPM_CONFIG_PREFIX = "${env.WORKSPACE}/.npm-global"
    }
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Install') { steps { sh 'npm ci --no-audit' } }
        stage('Test') {
            steps {
                script {
                    sh 'npm test -- --watchAll=false --passWithNoTests || true'
                }
            }
        }
        stage('Build') { steps { sh 'npm run build' } }
        stage('Deploy') {
            steps {
                script {
                    // Docker deployment (uncomment to use)
                    // sh 'docker build -t react-app .'
                    // sh 'docker run -d -p 3000:80 react-app'
                    
                    // Current serve approach
                    sh 'npx serve -s build -l 3000 & echo $! > serve.pid'
                    sh 'sleep 5 && curl -s http://localhost:3000'
                }
            }
        }
    }
    post {
        always {
            sh '[ -f serve.pid ] && kill $(cat serve.pid) || true'
            archiveArtifacts artifacts: 'build/**/*'
            cleanWs()
        }
    }
}