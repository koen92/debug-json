#!groovy

node {

    def nodeHome = tool name: 'Node-4.4.3', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"

    stage 'Show Node & NPM version'

      sh "node -v"
      sh "npm -v"

    stage 'Checkout'
      checkout scm

    stage 'NPM install'
      sh "npm install"

    stage 'Linting'
      sh "npm run lint"

    stage 'Test'
      sh "npm run test"

    stage 'Build'
      sh "npm run build"
}