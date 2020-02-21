FROM node:latest

WORKDIR /docker-workspace/marioplan

ENV PORT 3000

#This will help npm to listen for file changes and reload the project
ENV CHOKIDAR_USEPOLLING true

#COPY ./package*.json ./

#RUN npm install

COPY . .

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]
