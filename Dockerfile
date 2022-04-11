#specifying a base image: Nodejs
FROM node:12.14.1

#set a directory for the app
WORKDIR C:/Users/gknow/WebstormProjects/CS3203_HW1
# copy all the files to the container
COPY . .
# install dependencies
RUN npm install

# define the port number the container should expose
EXPOSE 3000

# run the command
CMD npm start
