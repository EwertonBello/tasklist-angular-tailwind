# TasklistAngularTailwind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## TailWindCSS Install

Run `npm i tailwindcss postcss-import postcss-loader postcss-scss @angular-builders/custom-webpack -D` to install and Run `npx tailwind init` to init.

## TailWindCSS Config

Import Tailwind on style.scss:
```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

```

Create file `webpack.config.js` and insert code:
	```
	module.exports = {
	    module: {
		      rules: [
		        {
		          test: /\.scss$/,
		          loader: 'postcss-loader',
		          options: {
		            ident: 'postcss',
		            syntax: 'postcss-scss',
		            plugins: () => [
		              require('postcss-import'),
		              require('tailwindcss'),
		              require('autoprefixer'),
		            ]
		         }
		       }
		    ]
		}
	};
	``` 

In angular.json, replace: 
`@angular-devkit/build-angular:browser` to `@angular-builders/custom-webpack:browser`
add ```"customWebpackConfig": {
              "path": "./webpack.config.js"
            }``` in `options`.

And replace: 

`@angular-devkit/build-angular:dev-server` to `@angular-builders/custom-webpack:dev-server`
add ```"customWebpackConfig": {
              "path": "./webpack.config.js"
            }``` in `options`

## Demo

The app is running in (https://ewertonbello.github.io/tasklist-angular-tailwind/).

## Resources Font

Background Patterns (http://www.heropatterns.com/).

Illustrations (https://undraw.co/illustrations).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
