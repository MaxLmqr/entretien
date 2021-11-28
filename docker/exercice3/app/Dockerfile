FROM node:16-alpine

WORKDIR /app

COPY /app/package.json .

RUN npm install

COPY /app .
COPY /wait-for-it.sh .

EXPOSE 3000

RUN apk update && apk add bash
RUN ["chmod", "+x", "./wait-for-it.sh"]
CMD ./wait-for-it.sh db:3306 -- npm run start