# Desire2Teach: Web Components

Demonstrates building a web component using vanilla JavaScript compared to [Lit](https://lit.dev/).

## Resources

### Web Components

* [Lit](https://lit.dev/docs/): official Lit guide
* [Modern Web Project](https://modern-web.dev/): Guides, tools and libraries for modern web development (this project uses their development server tooling)
* [Google Web Fundamentals: Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements): Vanilla custom elements overview

### D2L Resources

* [Daylight Site](https://daylight.d2l.dev/): design and development resources for building UIs
* [@brightspace-ui/core](https://github.com/BrightspaceUI/core/): D2L's primary set of web components
* [BrightspaceUI Labs](https://github.com/BrightspaceUILabs): Experimental web components
* [Brightspace Hypermedia Components](https://github.com/BrightspaceHypermediaComponents): Hypermedia-driven web components

## Setup

Clone the repo and run:

```shell
npm install
```

## Run the Demos

To start a development server that hosts the demos, run:

```shell
npm start
```

It should open automatically, and reload whenever changes are made.

By default, `index.html` loads the vanilla web component (`vanilla.js`). To use Lit instead, switch it to load `lit.js`.
