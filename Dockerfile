# Node image to build Angular app
FROM node:20-alpine3.16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm install -g @angular/cli
RUN npx ngcc --properties es2022 browser module main --first-only --create-ivy-entry-point \
COPY. .
RUN ng build --configuration=production

# Nginx to serve the built application
FROM nginx:stable
COPY ./nginx.config /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio-am /usr/share/nginx/html
EXPOSE 80
# Nginx to serve the built application
# Build docker build -t portfolio-am .
#Run docker run -d  -p 8080:80 portfolio-am
