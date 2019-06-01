# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /supreme-octo-invention

# add `/app/node_modules/.bin` to $PATH
ENV PATH /supreme-octo-invention/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /supreme-octo-invention/package.json
RUN yarn install

# start app
CMD ["yarn", "start"]