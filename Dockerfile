FROM node:16-alpine

WORKDIR /usr/src/app

COPY  package.json yarn.lock ./

RUN yarn

EXPOSE 3000

COPY . .

CMD ["yarn", "start"]