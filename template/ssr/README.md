# Omi SSR Demo

> A quick demo that illustrates how to add SSR to a Omi app

This demo was built with [`preact-cli`](https://github.com/developit/preact-cli), using the [`default`](https://github.com/preactjs-templates/default) template.

It's powered by an Express server with `gzip` compression... nothing special there.

Because of how `preact-cli` produces the `build` directory, the server must respect static/file requests first. This also means that your `build/index.html` will _always_ be served on the `/` request. This isn't a bad thing, it's just something to be aware of!

**Important:** This server behaves exactly like Preact CLI's [prerendering](https://github.com/developit/preact-cli#pre-rendering). This means that if you (or your libraries) have references to `window` or `document`, you must wrap them in conditional statements or include a shim.


## Install

```sh
$ npm install
```

## Develop

```sh 
$ npm run dev
```

## Release

```sh
$ npm run build
$ npm start
```


## License

MIT 



 使用 store 的问题

if (typeof window === 'undefined') return;


打包同时包含 preact 和 omi 的问题（改下preact-router里的preact to omi、改下preact-cli里的preact to omi）

目录变了，处理下这里？
	test: /\.jsx?$/,
				include: [(0, _minimatch.filter)(source('routes') + '/{*.js,*/index.js}'), (0, _minimatch.filter)(source('components') + '/{routes,async}/{*.js,*/index.js}')],
				loader: (0, _path.resolve)(__dirname, './async-component-loader'),



scoped css 问题


重复渲染的问题:
function render(vnode, parent, merge, ssrRoot) {






function render(vnode, parent, merge, ssrRoot) {
	var m = isElement(merge) || merge === undefined;
	if (typeof window === 'undefined') {
		if(vnode instanceof Component&&!m){
			vnode.$store = merge
		}
		return;
	}

	options.staticStyleRendered = false;
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
	if(ssrRoot){
		ssrRoot = document.querySelector(ssrRoot)
	}
	if (merge === true) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
	
	if (vnode instanceof Component) {
		if (window && window.Omi) {
			window.Omi.instances.push(vnode);
		}
		if (!m) {
			vnode.$store = options.$store = merge;
		}
		if (vnode.componentWillMount) vnode.componentWillMount();
		if (vnode.install) vnode.install();
		var rendered = vnode.render();
		if (vnode.style) {
			addScopedAttr(rendered, vnode.style(), '_style_' + vnode._id, vnode);
		}

		//don't rerender
		if (vnode.staticStyle) {
			addScopedAttrStatic(rendered, vnode.staticStyle(), '_style_' + vnode.constructor.name, !vnode.base);
		}

		vnode.base = diff(m ? merge : ssrRoot, rendered, {}, false, parent, false);

		if (vnode.componentDidMount) vnode.componentDidMount();
		if (vnode.installed) vnode.installed();
		options.staticStyleRendered = true;
		return vnode.base;
	}

	var result = diff(merge, vnode, {}, false, parent, false);
	options.staticStyleRendered = true;
	return result;
}