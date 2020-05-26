from ubuntu:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get -y install zsh
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt-get -y install wget

RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org
RUN mkdir -p /data/db

WORKDIR /Climate_Conditions_API
COPY . /Climate_Conditions_API
