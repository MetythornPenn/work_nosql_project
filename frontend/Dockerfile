FROM node:alphine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

CMD [ "npm", "run", "client" ]

# how to build image 
# docker compose up -d --build