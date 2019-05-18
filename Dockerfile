FROM node
MAINTAINER marc.despland@orange.com
ENV LISTEN_PORT 8080
ENV LISTEN_IP 0.0.0.0
WORKDIR /app
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install
ENTRYPOINT ["npm", "start"]