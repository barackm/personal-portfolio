FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
RUN mkdir data
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
