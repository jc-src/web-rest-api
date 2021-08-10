# Use official node image as the base image
FROM node:16.1

# Set the working directory
WORKDIR /frontend

# Add the source code to app
COPY ./ /frontend/

# Install all the dependencies
RUN npm install

# Expose port 80
EXPOSE 4200

CMD [ "npm", "run", "play" ]