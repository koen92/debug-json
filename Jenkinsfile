#!groovy

node('linux') {
    try {
        env.PATH = "${tool 'Node-4.4.3'}/bin:${env.PATH}"

        stage 'Show Node & NPM version'
        sh "node -v"
        sh "npm -v"

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

        stage 'Notify'
        slackSend color: 'good', message: "Build Succeeded - ${env.JOB_NAME} ${env.BUILD_NUMBER}  (<${env.BUILD_URL}|Open>)"
    } catch (err) {
        stage 'Notify'
        slackSend color: 'danger', message: "Build Failed - ${env.JOB_NAME} ${env.BUILD_NUMBER}  (<${env.BUILD_URL}|Open>)\n${err}"
    }
}
