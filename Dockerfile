FROM node:18-alpine3.14 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci

Run npm install -g @angular/cli
COPY. .
RUN npm build --configuration=prod
FROM nginx:latest
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/my-app /usr/share/nginx/html
EXPOSE 80
