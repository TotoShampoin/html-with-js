# HTML With JavaScript
To simplify the making of dynamic html elements while remaining as vanilla as possible

## Import
Import in your HTML code:
```html
<script src="html.with.min.js"></script>
```
Or import as ES6 module:
```js
import $$ from "html.with.module.js";
```

## How to use
```js
$$(tagName, content, options);
```
`tagName`
> A string that is the tag of the element you want to create (`h1`, `div`, `canvas`, ...) 

`content`
> The content of the element. Can be :
>  -  A string containing the text content (in form of innerText)
>     ```js
>     "Hello World!!"
>     ```
>  -  Another HTML Element (that can be made either with HWJ or with any native JS function that handles HTMLElement instances)
>     ```js
>     $$(...)
>     document.getElementById("element-with-this-id")
>     document.createElement("div")
>     ```
>  -  An array of the previous type of content

`options`
> Every properties of the HTML Element that you would normally access line by line, as an options parameter! That includes :
>  -  classList, as an entire string, or as an array of strings
>  -  dataset, as an object
>  -  style, as an object (includes both JS naming (`fontSize`) and CSS naming (`"font-size"`))
>  -  events, as functions
> ```js
> {
>     classList: ["button--blue", "button--big"],
>     dataset: { "but-id": "18" },
>     style: { fontSize: "2rem", width: "12rem", height: "3rem" },
>     onclick: ev => console.log("Click!"),
> }
> ```

By default, the aruments are
```js
$$("div", "", {});
```

## Example
```js
const first_line = $$("p", "Hello!");
const secnd_line = $$("p", [
    $$("a", "Click here to access TotoShampoin's awesome Github :D", {href: "https://github.com/TotoShampoin"});
]);
document.body.append(first_line);
document.body.append(secnd_line);
```
Or you can also check out [This example](./example/index.html)

## Licence

Copyright 2021 TotoShampoin

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.