FROM openjdk:14-jdk-alpine

COPY target/brewlog-server-thorntail.jar brewlog-server-thorntail.jar

ENV JAVA_OPTS="-Djava.net.preferIPv4Stack=true"

CMD java -jar brewlog-server-thorntail.jar