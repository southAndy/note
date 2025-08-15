#puppteer

It is related with how to open browser in Puppeteer.


```js
this.browser = await puppeteer.launch({
	headless: true,
});
```

when mode is true (default mode), there are many benefits:

1. **faster excution**: because you don't need to open browser, and wait for view rendering.
2. **More resource-efficient**: Uses less memory and CPU since no graphical rendering is required


when it is `false` :

1. **Slower execution** - Generally slower as it has to render everything visually
2. **Resource intensive** - Uses more system resources