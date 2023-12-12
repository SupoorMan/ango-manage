# ango-manage

## SCSS
npm install -D sass-loader@^10 sass

vue.config.js
``
css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/scss-common.scss";`
      }
    }
  }
``

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
