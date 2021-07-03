# Data Center Website - 0.1
Responsive landing page created using React with TypeScript and Sass.\
App can be serve localy or in the docker container
## Localy
### Configuration and Running
To install dependencies and run app go to the clone folder and type these commands:
```
yarn
yarn start
```
## Docker
### Configuration  and Running
To run app in the container you need to configure and create a container using those commands:
```
docker build -t data-center-frontend-image:latest .
docker run -d -p 3000:3000  --name data-center-frontend data-center-frontend-image
```