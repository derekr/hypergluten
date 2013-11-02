## hypergluten
#### HTML data binding on top of hyperglue

Instead of binding data to css selectors data is bound to `[data-bind={key}]` 
for you.

### Installation
```bash
npm install hypergluten
```

### Basic Use
```js
var g = require('hypergluten');
var html = '<h1 data-bind="title"></h1>';

g(html, { title: 'Hello World!' });
```

```html
<h1 data-bind="title">Hello World!</h1>
```

The rendering is all delegated to hyperglue so providing objects works 
as you'd expect.

```js
var g = require('hypergluten');
var html = '<img data-bind="thumb">';

g(html, { 
    thumb: {
        src: '/pizza.png'
    }
});
```

```html
<img data-bind="thumb" src="/pizza.png">
```

### Testing
```bash
npm test
```
