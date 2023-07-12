FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["npm" , "run", "server"]


# how to build image
# docker compose up -d --build