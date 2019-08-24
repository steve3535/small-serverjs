FROM alpine
LABEL maintainer="stefimeister@gmail.com"
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
RUN npm install
ENTRYPOINT["node","hello-server3.js"]
