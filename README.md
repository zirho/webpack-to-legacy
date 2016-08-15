# branches

* legacy code: https://github.com/zirho/webpack-to-legacy/tree/master

* refactored: https://github.com/zirho/webpack-to-legacy/tree/1-add-new-entry-file 

* external package: https://github.com/zirho/webpack-to-legacy/tree/2-use-external-package

# Refactor legacy code today with webpack!

This repo is for [my blog post](http://zirho.github.io/2016/08/13/webpack-to-legacy/), showing how to refactor legacy js code with webpack.  

What I want to demonstrate are...

* Refactoring this web app, currently using global scope functions.

* Making it use ES6 syntax, also use external npm packages.

* Using HMR(hot module replacement) with webpack


# How to setup this repository in local

### clone github repository in local folder

```
$ git clone https://github.com/zirho/webpack-to-legacy.git webpack-to-legacy
```

### install npm packages

```
$ npm i 
```

### start webpack-dev-server 

```
$ npm run dev
```

and navigate to see web app in another termial window or tab
```
$ open http://localhost:8080
```



