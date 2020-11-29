# AngularMonorepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

ng serve --open --project=app1 --baseHref=/app1
ng serve --open --project=app2 --baseHref=/app2
ng serve --open --project=app3 --baseHref=/app3

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Docker Build

docker build app1 --build-arg APPLICATION_NAME=app1 --build-arg BASE_URL=/app1 .
docker build app2 --build-arg APPLICATION_NAME=app2 --build-arg BASE_URL=/app2 .
docker build app3 --build-arg APPLICATION_NAME=app3 --build-arg BASE_URL=/app3 .

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
