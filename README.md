# Desire2Teach: Web Components

Demonstrates building a web component using vanilla JavaScript compared to [LitElement](https://lit-element.polymer-project.org/).

## Resources

### Web Components

* [LitElement](https://lit-element.polymer-project.org/guide): official LitElement guide
* [lit-html](https://lit-html.polymer-project.org/guide): official lit-html guide
* [Modern Web Project](https://modern-web.dev/): Guides, tools and libraries for modern web development (this project uses their development server tooling)
* [Google Web Fundamentals: Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements): Vanilla custom elements overview

### D2L Resources

* [The Guide to Web Component Developement at D2L](https://github.com/BrightspaceUI/guide/wiki): Documentation, tips, best practices
    - [LitElement Best Practices & Gotchas](https://github.com/BrightspaceUI/guide/wiki/LitElement-Best-Practices-&-Gotchas)
    - [Component Tiers](https://github.com/BrightspaceUI/guide/wiki/Component-Tiers)
* [@brightspace-ui/core](https://github.com/BrightspaceUI/core/): D2L's primary set of web components
* [Design.d2l](http://design.d2l/): Design resources for core components
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
