pipeline{
 agent any
 tools {
 nodejs "nodeJS24"
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
 sh 'npm install'
 sh 'npx playwright install'
 }
 }
 stage ('Run Playwright Test'){
 steps{
 sh 'npx playwright test ${params.SPEC_FILE}'
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
