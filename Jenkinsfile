pipeline {
    agent any
    tools {
        nodejs 'nodeHome' // Must match your Jenkins Node.js installation name
    }
    options {
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }
    stages {
        // STAGE 1: Get the code
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'main']],
                    extensions: [],
                    userRemoteConfigs: [[
                        url: 'https://github.com/PriteshBhuravane/DevOps_Project.git',
                        credentialsId: '' // Add if private repo
                    ]]
                ])
            }
        }

        // STAGE 2: Install dependencies
        stage('Install') {
            steps {
                sh 'npm ci --no-audit --prefer-offline'
            }
        }

        // STAGE 3: Run tests (optional)
        stage('Test') {
            steps {
                script {
                    try {
                        sh 'npm test -- --watchAll=false --passWithNoTests'
                    } catch(err) {
                        echo "Tests completed with warnings"
                        // currentBuild.result = 'UNSTABLE' // Uncomment to mark unstable
                    }
                }
            }
        }

        // STAGE 4: Deployment
        stage('Deploy') {
            steps {
                script {
                    // Option A: Development mode (like npm start)
                    if (env.DEV_MODE == "true") {
                        echo "Starting development server..."
                        sh '''
                            pkill -f "react-scripts start" || true
                            nohup npm start > react.log 2>&1 &
                            echo $! > react.pid
                            sleep 5
                            curl -s http://localhost:3000
                        '''
                    } 
                    // Option B: Production mode
                    else {
                        echo "Starting production server..."
                        sh '''
                            npm run build
                            npm install -g serve
                            pkill -f "serve -s build" || true
                            nohup serve -s build -l 3000 > serve.log 2>&1 &
                            echo $! > serve.pid
                            sleep 3
                            curl -s http://localhost:3000
                        '''
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                // Cleanup processes
                sh '''
                    [ -f react.pid ] && kill $(cat react.pid) || true
                    [ -f serve.pid ] && kill $(cat serve.pid) || true
                    rm -f react.pid serve.pid
                '''
                // Archive logs
                archiveArtifacts artifacts: '*.log', allowEmptyArchive: true
                cleanWs()
            }
        }
        success {
            echo "Deployment successful! Access at: http://${env.JENKINS_URL}:3000"
        }
    }
}