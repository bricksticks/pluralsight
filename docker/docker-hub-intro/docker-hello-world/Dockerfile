FROM node:12-alpine

# Note that this command is something that the image understands since 
# the above image is setup in a way that all that is necessary for this 
# command to run is there.
# I.e. this image comes with linux (apk)
# Then we run apk to install python2 g++ and make!
RUN apk add --no-cache python2 g++ make

# Set the working directory for the following instructions
# (note that if the directory does not exist docker WILL create it)
WORKDIR /app

# Copy the contents in our project app to the app folder in the image
COPY app .

# Not really sure what this does but yarn seems to be another package manager
# It seems to instruct something to ignore some settings and user others 
# instead ...?
RUN yarn install --production

# "node" seems to be the main program to use to run Node.js scripts 
# (similar to python)
# i.e. this instruction launches the src/index.js script...
CMD ["node", "src/index.js"]