FROM node:22

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

RUN chmod +x wait-for.sh
CMD ["sh", "wait-for.sh", "db", "node", "index.js"]
