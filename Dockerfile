ARG APPLICATION_NAME
ARG BASE_URL

# Building app
FROM node:12-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm ci --silent --only=production
RUN npm run build --  --prod --project=$APPLICATION_NAME

# Starting NGINX
FROM nginx:1.18.0-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage dist/$APPLICATION_NAME/ /usr/share/nginx/html
EXPOSE 80
