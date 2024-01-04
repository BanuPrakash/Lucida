# React

JavaScript build tool --> Webpack

Webpack default scaffolding code for Angular / React / Vue

------------
```
Client Side Rendering
* Javascript with DOM
document.createElement("div") ==> <div>
document.querySelector("div")

* jQuery --> library
$("<div>");
$("div");
AJAX simplified

* Templates
1) Handlebars
2) Mustache
3) underscore
...
{{user.username}}

* SPA
1) Backbone --> Library gave Model and Controller support. For views we had to choose any of the above templates
2) AngularJS --> Framework --> MVC architecture
3) React --> Facebook ==> View Library
4) Angular
...

Server Side Rendering
* ASP.NET --> HTML / PDF
* Servlet with JSP / ThymeLeaf
* ExpressJS with Templates like Mustache, Handlebars, Jade, Pug, ...
* NextJS
* PHP

```

We can write our code in 
* Latest version of JS [ Above ES6/ ES2015+]
https://caniuse.com/
Babel / Tracuer
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. 
* TypeScript
JS dynamically typed:
var name = 'Raj';
name.toUpperCase();
name++;

name = 24;
name++;
---

let name:string = "Harry";

name = 24; // Error ---> tsc


* Dart
* CoffeeScript
* LiveScript
...

tsc UserComponent.ts --> UserComponent.js

==========

JavaScript build tools
* Grunt
* Gulp
* Webpack
* vite
...

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, uglify, compilation, unit testing, and linting.
+ bundle


let user={"name": "Harry","phone": "1234567890"}

let customerFirstName = "Peter"; 
let _c = "Peter"

---------
index.html
<script src="bundle.kime#2f2.js"></script>

Steps:
1) intialiaze Node Project
npm init --y

2) npm i webpack webpack-cli html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react -D
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

@babel/core => babel transpiler
babel-loader ==> understands ES6 Module system
import {add, sub} from './lib';


NodeJS by default understands CommonJS module system
let {add, sub} = require('./lib');

@babel/preset-env
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

Promise.resolve(...);

Pollyfill:A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.


@babel/preset-react 
We write JSX ==> JavaScript and XML has to be converted into JS object
let data = <div>
    {firstName}
</div>


```
npm run dev

> webpack-react@1.0.0 dev
> webpack --mode development

asset bundle.78d35a5c.js 4.64 KiB [emitted] [immutable] (name: main)
asset index.html 306 bytes [emitted]
runtime modules 670 bytes 3 modules
cacheable modules 565 bytes
  ./src/index.js 242 bytes [built] [code generated]
  ./src/lib.js 323 bytes [built] [code generated]
webpack 5.89.0 compiled successfully in 297 ms

npm run prod

> webpack-react@1.0.0 prod
> webpack --mode production

asset index.html 277 bytes [emitted]
asset bundle.d587b9c0.js 250 bytes [emitted] [immutable] [minimized] (name: main)
orphan modules 323 bytes [orphan] 1 module
./src/index.js + 1 modules 565 bytes [built] [code generated]
webpack 5.89.0 compiled successfully in 401 ms
```

npm i webpack-dev-server -D