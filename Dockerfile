FROM node:18-alpine

COPY package.json /app/
COPY server.js /app/
COPY public /app/public

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]