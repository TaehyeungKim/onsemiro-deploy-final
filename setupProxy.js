const { createProxyMiddleware } = require("http-proxy-middleware");

export const TARGET = "https://onsemiro-likelion2.fly.dev/";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: TARGET,
      changeOrigin: true,
    })
  );
};
