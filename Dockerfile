FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY BergApp.js .
COPY docker-compose.yml /app/docker-compose/yml
EXPOSE 80
LABEL org.opencontainers.image.ports="80:80"
CMD ["node", "BergApp.js"]