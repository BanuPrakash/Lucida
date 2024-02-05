import map, { filter } from './lib';

let numbers = [4, 3, 9, 11, 13, 44, 9];

let result = filter(numbers, e => e % 2 == 0);

result.forEach(no => console.log(no));

let doubled = map(numbers, e => e * 2);

doubled.forEach(no => console.log(no));

console.log("End!!!")

let React = {
    createElement: (tag, props, ...children) => {
        console.log(props);
        console.log(children);
        var element = { tag, props: { ...props, children } };
        console.log(element);
        return element;
    }
}
let welcome =  (
    <div className="card">
        <h1 className="card-header">Welcome to React</h1>
        <p>Good Day!!</p>
    </div>
);

console.log(welcome);

function render(element, container) {
    if (['string', 'number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    let domElement = document.createElement(element.tag);

    if (element.props.children) {
        element.props.children.forEach(child => render(child, domElement))
    }
    container.appendChild(domElement);

    console.log(domElement);
}
render(welcome, document.getElementById("root"));