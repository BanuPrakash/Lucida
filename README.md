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

npm i typescript ts-loader -D

===============

Task:
understand css-loader and style-loader

npm i css-loader style-loader -D

============================

React Demystify:

React.createElement() is just a wrapper for document.createElement()


<img src="a.png" width="100px" height="50px">

src, width, height are props 

render()

=========

* React.createElement()
* Class Component
* functional Component ==> 99% of code

class Component
Object --> can have state and behaivour


npx create-react-app usersapp --template typescript

React 18+:
supports concurrency, fiber based
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

React upto 17 version:
stack based rendering
import ReactDOM from 'react-dom';
ReactDOM.render(<App/>, document.getElementById('root'))


-----

RTL --> React Testing Library --> on top of JEST for component testing
Angular TestBed --> on top of Jasmine

Cypress => E2E testing

npm i cypress -D

========

Day 2

Recap:

build tool --> Webpack
* babel
* babel-loader
* babel preset-env/ preset-react

* css-loader and style-loader
* ts-loader and typescript

HtmlWebpackPlugin --> adding bundles in template file [index.html]
* source-map

----------

React.createElement()
ReactDOM.render()

npx create-react-app nameofapp --template typescript

==========================

Component Testing --> Unit Testing 
npm test

Types of Queries
https://testing-library.com/docs/queries/about

<button > </button>
screen.getByRole('button');

 <h1>Users List</h1>
 screen.getByText(/Users List/i);

<input type="text" placeholder="search by name" />
screen.getByPlaceholderText("search by name");

let {container} = render(<UsersComponent />);
container.getElementById("");
container.querySelectorAll("div");
container.getElementsByTagName("div");

AAA --> Assemble Action Assert

End2End Testing
npm i cypress -D

=================

React Hooks 16.8 version
* In functional component get all the capabilities of class components
--> state
--> life-cycle methods

* React Context--> avoids props drill

* react-router-dom and lazy loading of components
Client Side Routing

* bootstrap --> CSS Framework
* react-bootstrap ==> react components using bootstrap

============================
useState() Hook
```
class UserComponent extends Component {
  state = {
    name : 'George',
    age : 26
  }

  setName(n) {
    this.setState({
      name: n
    })
  }

  setAge(a) {
    this.setState({
      age: a
    })
  }
}

function UserComponent() {
  let [name, setName] = useState("George");
  let [age, setAge] = useState(26);
}

```

npx create-react-app productapp --template typescript


productapp> npm i bootstrap react-bootstrap react-router-dom axios

Making API calls from React:
* fetch --> available by default in JavaScript
* axios 

similar to HttpClientModule --> HttpClient service of Angular

https://fakestoreapi.com/products?limit=5


Web Vitals ==> FCP ==> first contentful paint

Context Consumer hook: useContext()
 let value = useContext(ProductContext); // consumer

```
 class ProductList extends Component {

  render() {
    <ProductContext.Consumer>
      {
        value => {
          value.products.map(...)
        }
      }
    </ProductContext.consumer>
  }
 }
 ```

 React Component Life Cycle methods

 constructor() ==> render() ==> componentDidMount()
 initialiszed 20 videos ==> create 20 placeholder

 Make API calls in componentDidMount() ==> update the state

 state changes ==> Updating phase ==> re-render

FCP

----

shouldComponentUpdate()

name
age

```
class ParentComponent extends React.Component {
  state = {
    name: "Peter",
    age: 42
  }
  
  render() {
    console.log("Parent renders!!!");
    return <div>
          Name: {this.state.name} <br />
          Age : {this.state.age} <br />
      
          <button onClick={() => this.setState({
          age: this.state.age + 1
        })} >
            Change Age
      </button>
         <button onClick={() => this.setState({
          name: this.state.name + ".."
        })} >
            change Name
      </button>
      </div>
  }
}


class NameComponent extends React.Component {
  render() {
    console.log("NameComponent renders!!!");
    return <div>
          {this.props.name}
      </div>
  }
}


class AgeComponent extends React.Component {
  render() {
    console.log("AgeComponent renders!!!");
    return <div>
          {this.props.age}
      </div>
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById("root"))

```

Solution ==> shouldComponentUpdate

```
class ParentComponent extends React.Component {
  state = {
    name: "Peter",
    age: 42
  }
  
  render() {
    console.log("Parent renders!!!");
    return <div>
          Name: {this.state.name} <br />
          Age : {this.state.age} <br />
      
          <button onClick={() => this.setState({
          age: this.state.age + 1
        })} >
            Change Age
      </button>
         <button onClick={() => this.setState({
          name: this.state.name + ".."
        })} >
            change Name
      </button>
      <NameComponent name={this.state.name} /> <br />
      <AgeComponent age={this.state.age} /> <br />
      </div>
  }
}

class NameComponent extends React.Component {
  shouldComponentUpdate(newProps, newState) {
      return this.props.name !== newProps.name
  }
  render() {
    console.log("NameComponent renders!!!");
    return <div>
          {this.props.name}
      </div>
  }
}


class AgeComponent extends React.Component {
  shouldComponentUpdate(newProps, newState) {
      return this.props.age !== newProps.age
  }
  render() {
    console.log("AgeComponent renders!!!");
    return <div>
          {this.props.age}
      </div>
  }
 
}

ReactDOM.render(<ParentComponent />, document.getElementById("root"))
```

FunctionalComponent solution to shouldComponentUpdate() is React.memo()

memo() is a HOC ==> Closure
function memo(comp) {
  var cache = old props
  if(newprops compare with cache) {
    if same return;
    else return comp(props);
  }
}

Example:
```
class ParentComponent extends React.Component {
  state = {
    name: "Peter",
    age: 42
  }
  
  render() {
    console.log("Parent renders!!!");
    return <div>
          Name: {this.state.name} <br />
          Age : {this.state.age} <br />
      
          <button onClick={() => this.setState({
          age: this.state.age + 1
        })} >
            Change Age
      </button>
         <button onClick={() => this.setState({
          name: this.state.name + ".."
        })} >
            change Name
      </button>
      <MemoNameComponent name={this.state.name} /> <br />
      <MemoAgeCompoent age={this.state.age} /> <br />
      </div>
  }
}

function NameComponent(props) {

    console.log("NameComponent renders!!!");
    return <div>
          {props.name}
      </div>
}

let MemoNameComponent = React.memo(NameComponent);


function AgeComponent(props) {
 
    console.log("AgeComponent renders!!!");
    return <div>
          {props.age}
      </div> 
}

let MemoAgeCompoent = React.memo(AgeComponent);

ReactDOM.render(<ParentComponent />, document.getElementById("root"))
```

componentDidMount in functional component:
useEffect(() => {

},[])

shouldComponentUpdate in functional component --> React.memo()


=========

