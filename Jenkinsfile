#!groovy

node('linux') {
    stage 'Prepare'
    step([$class: 'GitHubSetCommitStatusBuilder'])
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
    step([$class: 'GitHubCommitStatusSetter'])

    slackSend color: currentBuild.result == 'SUCCESS' ? 'good' : 'danger', message: "Build ${currentBuild.result == 'SUCCESS' ? 'Succeeded' : 'Failed'} - ${env.JOB_NAME} ${env.BUILD_NUMBER}  (<${env.BUILD_URL}|Open>)"
}
