//配置proxy，可解决redux-thunk中的跨域问题

const { createProxyMiddleware } = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    createProxyMiddleware(
      "/base", {
      target: "http://localhost:3030/",
      pathRewrite: {'^/base': ''},
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware(
      "/api", {
      target: "https://gank.io/",
      pathRewrite: {'^/api': ''},
      changeOrigin: true
    })
  );
};