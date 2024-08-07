const { createProxyMiddleware } = require("http-proxy-middleware");

// export const TARGET = "https://onsemiro-likelion2.fly.dev/";
// export const TARGET = "http://localhost:8000";
// import { TARGET } from "apis/api";
const TARGET = "http://43.201.130.12:8080/";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: TARGET,
      changeOrigin: true,
    })
  );
};
