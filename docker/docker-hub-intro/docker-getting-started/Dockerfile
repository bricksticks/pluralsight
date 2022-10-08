# Install the base requirements for the app.
# This stage is to support development.
#
# We're using python's pip to install all requirements.
FROM python:alpine AS base
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

# Start copying the app sources into the container so you can run the app
FROM node:12-alpine AS app-base
WORKDIR /app
COPY app/package.json app/yarn.lock ./
COPY app/spec ./spec
COPY app/src ./src

# Run tests to validate app
FROM app-base AS test
RUN apk add --no-cache python3 g++ make
RUN yarn install
RUN yarn test

# Clear out the node_modules and create the zip
FROM app-base AS app-zip-creator
COPY app/package.json app/yarn.lock ./
COPY app/spec ./spec
COPY app/src ./src
RUN apk add zip && \
    zip -r /app.zip /app

# Dev-ready container - actual files will be mounted in.
# MkDocs (mkdocs.org) is a tool to create static website content
# from markdown files.
# The following instruction serves the markdown documents on port 8000.
FROM base AS dev
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]

# Do the actual build of the mkdocs site
# Note this only happens inside the image
# we're doing nothing on the host!
FROM base AS build
COPY . .
RUN mkdocs build

# Extract the static content from the build
# and use a nginx image to serve the content
#
# The nginx image already handles everything including starting
# the webserver see (https://hub.docker.com/_/nginx).
# We just need to copy our static contents to the correct location
# and we're golden.
FROM nginx:alpine
COPY --from=app-zip-creator /app.zip /usr/share/nginx/html/assets/app.zip
COPY --from=build /app/site /usr/share/nginx/html

ARG bricksticks_commit_id
LABEL ch.bricksticks.project.original-url="https://github.com/docker/getting-started.git"
LABEL ch.bricksticks.project.bricksticks-url="https://github.com/bricksticks/pluralsight/tree/main/docker/docker-\
hub-intro/docker-getting-started"
LABEL ch.bricksticks.project.git-commit-id="${bricksticks_commit_id}"
LABEL ch.bricksticks.project.description="This docker getting started project is structured in a somewhat confusing \
way. It actually consists of two applications which are totally independent! One one hand the project contains what \
goes into this image, which is a static website generated from a markdown document using mkdocs. This markdown content \
is then being served using nginx! The zipping of the app folder is only there to allow creating a link in markdown to \
the app.zip such that it can be downloaded. The app/ contents are an entirely different project! It's an express app\
that is using react to generate the website contents and implements a simple TODO manager."
LABEL ch.bricksticks.image.description="Image to serve a docker tutorial around a todo app (which is not part of the \
image). The image uses nginx to serve a mkdocs markdown documentation."
LABEL ch.bricksticks.image.build-command="git log --format="%H" --max-count=1 | xargs -I'{}' docker build \
--tag docker-getting-started:1.0.0 --build-arg bricksticks_commit_id='{}' ."

