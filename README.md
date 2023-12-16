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

https://www.bilibili.com/video/BV1Dg411E7jw/?spm_id_from=333.337.search-card.all.click&vd_source=6ef320a491509d3bfced4fe0704540ea


https://www.isqqw.com/geojson

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
