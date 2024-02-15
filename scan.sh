export SONAR_SCANNER_OPTS='-Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8080 -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=127.0.0.1:8000'
sonar-scanner   -Dsonar.organization=second-orgz   -Dsonar.projectKey=second-orgz_pro-j-h2-ttt-h2   -Dsonar.sources=.   -Dsonar.host.url=https://sc-staging.io
