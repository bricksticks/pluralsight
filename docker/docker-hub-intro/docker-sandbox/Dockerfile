FROM openjdk:8u131-jdk-alpine
RUN mkdir /myvol
RUN echo "hello world" > /myvol/greeting
VOLUME /myvol
CMD ["tail", "-f", "/myvol/greeting"]