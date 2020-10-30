pipeline {
	agent any
	environment {
		CI 'true'
	}
	stages{
		stage("Build"){
			steps{
				echo 'Building application'
                sh 'npm install'
			}
		}
				
		stage("Test"){
			steps{
				echo 'Testing application'
				sh './test/test.js'
			}
		}
	}
}