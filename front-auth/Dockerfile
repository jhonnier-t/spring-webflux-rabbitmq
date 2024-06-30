FROM node:18.17.0-alpine AS build
USER root
WORKDIR /frontauth/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontauth/app/www/ /usr/share/nginx/html/