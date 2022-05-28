FROM node:18-alpine3.14

WORKDIR /app

RUN npm i -g pnpm

COPY package*.json .
RUN pnpm install

COPY . .

CMD ["pnpm", "start:dev"]
