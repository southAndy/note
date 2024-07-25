# chose the base image
FROM node:14.17.0-alpine3.13

# Create app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Define the command to run your app
CMD ["npm","run", "build"]