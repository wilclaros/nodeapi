FROM node:18

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install --omit=dev

EXPOSE 4000

CMD ["npm", "start"]