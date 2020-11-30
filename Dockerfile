ARG APPLICATION_NAME

# Building app
FROM node:12-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm run build --  --prod --project=my-components
RUN npm run build --  --prod --project=${APPLICATION_NAME}

# Starting NGINX
FROM nginx:1.18.0-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage dist/${APPLICATION_NAME}/ /usr/share/nginx/html
EXPOSE 80
