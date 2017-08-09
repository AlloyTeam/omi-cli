import './container';

if ("production" !== process.env.NODE_ENV) {

    require('vconsole/dist/vconsole.min.js');
    // use it for hot reload
    module.hot.accept();
}