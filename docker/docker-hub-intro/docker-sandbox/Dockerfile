FROM openjdk:8u131-jdk-alpine

# TODO (HRC): there really needs to be a better way to do this ...
ARG   git_commit
ARG   image_version
LABEL ch.bricksticks.image.commit-id="${git_commit}"
LABEL ch.bricksticks.image.project-url="https://github.com/docker/getting-started.git"
LABEL ch.bricksticks.image.origin="bricksticks/pluralsight/docker/docker-getting-started"
LABEL ch.bricksticks.image.description="Image of a webserver running the docker getting started \ 
                                        instructions accessible via browser."
LABEL ch.bricksticks.image.command="docker build --build-arg git_commit=$git_commit --build-arg image_version=$image_version -t sandbox:$image_version ."


RUN mkdir /myvol
RUN echo "hello world" > /myvol/greeting
VOLUME /myvol
CMD ["tail", "-f", "/myvol/greeting"]

