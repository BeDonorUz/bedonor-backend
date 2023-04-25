FROM node:20-buster

WORKDIR /app

RUN npm i -g pnpm

COPY package*.json .
COPY .npmrc .
RUN pnpm install

COPY . .

RUN apt update
RUN apt install -y postgresql-client

CMD ["pnpm", "start:dev"]
