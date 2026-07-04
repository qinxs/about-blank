## 说明

空白页 ( https://blank.7bxing.com/ )


## `about:blank` 存在限制
- 启动自动聚焦地址栏
- 不能执行 js 小书签 ( Bookmarklet )


## 页面做了什么
- 页面优化 只有一个请求
- 方便调试
  - 解构 `console` 对象中的 `log`, `dir`, `table`
  - 函数 `app()`, 执行后导入 `M` 对象  
    其中 `M.js()`, `M.css()`, `M.jsm()` 可以快速导入远程 js/css 库 ( cdn )  
  > M.jsm 使用备注: 
  >  ```
  >  const lodash = await M.jsm('https://cdn.jsdelivr.net/npm/lodash-es@4/+esm')
  >  lodash.add(1, 2)
  >  ```
- serviceWorker
  - 保证页面可离线运行
  - 启动速度更快