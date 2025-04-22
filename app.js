// load js/css
const M = {
  map: new Map(),
  js(url) {
    if (this.map.has(url)) return;

    const ele = Object.assign(document.createElement('script'), {
      src: url,
      onload: () => (this.map.set(url, ele), log(`[loaded]: ${url}`)),
    });
    document.head.append(ele);
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
  },
}

export {M};
