pipeline {
	agent any
	stages{
		stage("Build"){
			steps{
				echo 'Welcome to jenkins pipeline'
                npm install
			}
		}
				
		stage("Test"){
			steps{
				'./test/test.js'
			}
		}

		stage("three"){
			steps {
				echo "welcome"
                npm build
			}
		}
	}
}