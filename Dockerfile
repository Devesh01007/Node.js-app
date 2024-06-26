Dockerize the Application
Create a Dockerfile in the root directory of application:
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "app.js"]

