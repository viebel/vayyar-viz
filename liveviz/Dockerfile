FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY docker/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY docker/server.js /usr/src/app
RUN mkdir /usr/src/app/build
COPY build /usr/src/app/build

EXPOSE 8080
CMD [ "npm", "start" ]

