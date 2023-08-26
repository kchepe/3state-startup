FROM node:18-alpine as client

RUN mkdir -p /app

WORKDIR /app

COPY package.json yarn.lock ./

RUN CI=true 

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "dev"]