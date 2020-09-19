# Vue3.0

> Vue3.0 DEMO

### 安装 vite 工具 替代 webpack



>首先安装vite 
```
  npm install -g create-vite-app
```

>利用vite构建项目
```
  create-vite-app vue3-demo(项目名称)
```
>进入项目
```
  cd vue3-demo
```


Vue3.0项目目录<img style="vertical-align:middle;" src="../vue3-cmap/src/assets/vue3的项目目录.png"/>

<!-- ![GITHUB](../vue3-cmap/src/assets/vue3的项目目录.png "git圖示") -->


>package.json
```

{
  "name": "vue3-cmap",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "vue": "^3.0.0-rc.1"
  },
  "devDependencies": {
    "vite": "^1.0.0-rc.1",
    "@vue/compiler-sfc": "^3.0.0-rc.1"
  }
}

```

>index.html 
```
  在HTML文件中直接引入main.js 

  <script type="module" src="/src/main.js"></script>
```

>main.js
```
  在main.js文件中
  Vue3.0中挂载元素对比
  createApp(App).mount('#app')
```


>Vue2.x中挂载元素对比
```
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

  new Vue({
    el: '#app',
    data(){
      return {
       
      }
    },
    components: { App },
    template: '<App/>',
    mounted:function(){
    
    },
  })
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
