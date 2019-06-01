#/!/bin/sh

docker build -t app:dev .
docker run -v ${PWD}:/supreme-octo-invention -v /supreme-octo-invention/node_modules -p 3000:3000 --rm app:dev