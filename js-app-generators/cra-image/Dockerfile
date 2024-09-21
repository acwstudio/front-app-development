FROM node:18-alpine

RUN apk update
RUN apk add git
WORKDIR /app
RUN npm install -g create-react-app \
                   create-react-native-app \
                   react-native-cli
#RUN mkdir /app
#ADD . /app