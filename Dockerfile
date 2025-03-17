FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY BergApp.js .
EXPOSE 3000
CMD ["node", "BergApp.js"]