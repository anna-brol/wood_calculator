pipeline {
    agent any

    stages {
        stage('clone repo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/anna-brol/wood_calculator.git'
            }
        }
        stage('build image') {
            steps {
                 sh 'docker build -t ania1542/wood:latest .'
            }
        }
        stage('remove old container') {
            steps {
                 sh 'docker container rm -f wood &>/dev/null'
            }
        }
        stage('run container') {
            steps {
                 sh 'docker run -d -p 80:80 --name wood ania1542/wood:latest'
            }
        }
        stage('log in to dockerhub') {
            steps {
                 sh 'docker login -u ania1542 -p ${docker_pass}'
            }
        }
        stage('push to dockerhub') {
            steps {
                 sh 'docker push ania1542/wood:latest'
            }
        }
    }
}
