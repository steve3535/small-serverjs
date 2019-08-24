FROM alpine
LABEL maintainer="stefimeister@gmail.com"
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 8080
ENTRYPOINT["node","hello-server3.js"]
