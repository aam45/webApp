FROM node:18-alpine3.14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

RUN npm install -g @angular/cli
RUN npx ngcc --properties es2022 browser module main --first-only --create-ivy-entry-pointCOPY. .
RUN npm build --configuration=prod
FROM nginx:stable
COPY ./nginx.config /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio-am/ /usr/share/nginx/html
EXPOSE 80
