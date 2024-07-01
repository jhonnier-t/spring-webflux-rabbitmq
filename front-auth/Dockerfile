FROM node:18.19.0-alpine AS build
USER root
WORKDIR /frontauth/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontauth/app/dist/front-auth/browser /usr/share/nginx/html
