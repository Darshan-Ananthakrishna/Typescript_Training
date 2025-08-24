pipeline{
 agent any
 tools {
 nodejs "NodeJS23"
 }
 parameters{
 string(name:'SPEC_FILE', defaultValue:'login.spec.ts', description:'Tags to run the script')
 }
 environment{
 PLAYWRIGHT_HTML_REPORT='playwright-report'
 }
 stages{
 stage('Install Dependencies'){
 steps{
 bat 'npm install'
 bat "npx playwright test ${params.SPEC_FILE}"
 }
 }
 stage ('Run Playwright Test'){
 steps{
 bat 'npx playwright test'
 }
 }
 stage('Publish Report'){
 steps{
 publishHTML(target:[
 reportName:"Playwright Test Report",
 reportDir: "${env.PLAYWRIGHT_HTML_REPORT}",
 reportFiles:index.html,
 ])
 }
 }
 }
}
