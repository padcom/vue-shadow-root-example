# Using shadow DOM with Vue 3.x components

This example shows how to use shadow DOM for CSS isolation directly with Vue components. It uses [vue-shadow-root](https://www.npmjs.com/package/vue-shadow-dom) package to manage shadow DOM (for simplicty).

## Getting started

To start the project run the following command:

```
$ npm install
$ npm start
```

and navigate to http://localhost:2998

## Reason for using shadow DOM

Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which you can attach any element.

Shadow DOM provides three benefits:

- DOM scoping. DOM APIs like document.querySelector won't find elements in the component's shadow DOM, so it's harder for global scripts to accidentally break your component.

- Style scoping. You can write encapsulated styles for your shadow DOM that don't affect the rest of the DOM tree.

- Composition. The component's shadow root, which contains its internal DOM, is separate from the component's children. You can choose how children are rendered in your component's internal DOM.

For more information on shadow DOM:

- [Shadow DOM v1: Self-Contained Web Components](https://developers.google.com/web/fundamentals/web-components/shadowdom) on Web Fundamentals.

- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) on MDN.

- [Modern JavaScript: Shadow DOM](https://www.oreilly.com/library/view/modern-javascript/9781491971420/ch05.html)

## Other examples

https://codesandbox.io/s/vue-component-within-shadow-dom-1cz2e?from-embed=&file=/index.js
https://stackoverflow.com/questions/46879782/how-to-get-vue-to-work-in-shadow-dom
