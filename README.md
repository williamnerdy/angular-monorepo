# AngularMonorepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

`ng serve --open --project=app1`
`ng serve --open --project=app2`
`ng serve --open --project=app3`

## Code scaffolding

Run `ng generate component component-name --project=project-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Docker Build

`docker build -t app1 --build-arg APPLICATION_NAME=app1 .`
`docker build -t app2 --build-arg APPLICATION_NAME=app2 .`
`docker build -t app3 --build-arg APPLICATION_NAME=app3 .`

## Running unit tests

Run `ng test --project=project-name` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e --project=project-name` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
