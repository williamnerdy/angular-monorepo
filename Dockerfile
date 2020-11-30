# Building app
FROM node:12-alpine AS build-stage
WORKDIR /app
COPY . .
ARG APPLICATION_NAME
RUN npm ci --silent
RUN npm run build --  --prod --project=my-components
RUN npm run build --  --prod --project=$APPLICATION_NAME --deploy-url=/$APPLICATION_NAME/

# Starting NGINX
FROM nginx:1.18.0-alpine
ARG APPLICATION_NAME
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/$APPLICATION_NAME/ /usr/share/nginx/html
EXPOSE 80
