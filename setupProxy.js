const { createProxyMiddleware } = require("http-proxy-middleware");

export const TARGET = "http://localhost:8000";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: TARGET,
      changeOrigin: true,
    })
  );
};
