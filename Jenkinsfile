#!groovy
ansiColor('xterm') {

    stage 'Build Executor'
    node('tippiq-jenkins-slave-nodejs-6-9-1') {
        catchError {
            stage 'Environment'
            sh 'node -v'
            sh 'npm -v'
            sh 'env | sort'

            stage 'Checkout'
            checkout scm

            stage 'Dependencies'
            sh 'yarn install'

            stage 'Lint'
            sh 'yarn lint'

            stage 'Test'
            sh 'yarn test'

            stage 'Build'
            sh 'yarn build'

            stage 'Pack'
            sh 'yarn pack'
            archiveArtifacts '*.tgz'
        }
        stage 'Notify'
        slackSend color: currentBuild.result != 'FAILURE' ? 'good' : 'danger', message: "<${env.BUILD_URL}|Build for ${env.JOB_NAME} by ${env.BUILD_USER_ID} has ${currentBuild.result != 'FAILURE' ? 'succeeded' : 'failed'}>"
    }
}
