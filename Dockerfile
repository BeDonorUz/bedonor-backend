FROM node:18-alpine3.14

WORKDIR /app

RUN npm i -g pnpm

COPY package*.json .
COPY .npmrc .
RUN pnpm install

COPY . .

RUN apk add postgresql-client

CMD ["pnpm", "start:dev"]
