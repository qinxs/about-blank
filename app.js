// load js/css
const M = {
  map: new Map(),
  moduleMap: new Map(),
  js(url) {
    if (this.map.has(url)) return;

    const ele = Object.assign(document.createElement('script'), {
      src: url,
      onload: () => (this.map.set(url, ele), log(`[loaded]: ${url}`)),
    });
    document.head.append(ele);
  },
  // use: const lodash = await M.jsm('https://cdn.jsdelivr.net/npm/lodash-es@4/+esm')
  jsm(url) {
    if (!this.moduleMap.has(url)) {
      const promise = import(url).then(mod => {
        log(`[loaded module]: ${url}`);
        return mod;
      });
      this.moduleMap.set(url, promise);
    }
    return this.moduleMap.get(url);
  },
  css(url) {
    if (this.map.has(url)) return;

    const ele = Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      href: url,
      onload: () => (this.map.set(url, ele), log(`[loaded]: ${url}`)),
    });
    document.head.append(ele);
  },
  remove(url) {
    if (!this.map.has(url)) return;

    const ele = this.map.get(url);
    ele.remove();
    this.map.delete(url);
  },
  clear() {
    this.map.forEach(ele => ele.remove());
    this.map.clear();
    this.moduleMap.clear();
  },
}

export {M};
