FROM node:16

LABEL maintainer="bmswens@gmail.com"
EXPOSE 3000
ENV NODE_ENV production

WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "docker"]