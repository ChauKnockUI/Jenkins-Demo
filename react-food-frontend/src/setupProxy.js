const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/food',
        createProxyMiddleware({
            target: 'http://backend:3000',
            changeOrigin: true,
        })
    );
};