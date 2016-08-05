#!groovy

node('linux') {
    catchError {
        stage 'Prepare'
        sh 'env | sort'
        env.PATH = "${tool 'Node-4.4.3'}/bin:${env.PATH}"

        stage 'Show Node & NPM version'
        sh 'node -v'
        sh 'npm -v'

        stage 'Checkout'
        checkout scm

        stage 'NPM install'
        sh 'npm install'

        stage 'Linting'
        sh 'npm run lint'

        stage 'Test'
        sh 'npm run test'

        stage 'Build'
        sh 'npm run build'
    }
    stage 'Notify'
    slackSend color: currentBuild.result != 'FAILURE' ? 'good' : 'danger', message: "<${env.BUILD_URL}|Build for ${env.JOB_NAME} by ${env.BUILD_USER_ID} has ${currentBuild.result != 'FAILURE' ? 'succeeded' : 'failed'}>"
}
