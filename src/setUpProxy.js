//프록시 서버 설정
const proxy = require("http-proxy-middleware");
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {

  // user-service;
  app.use(
    "/api/auth",
    createProxyMiddleware({
      target: "http://localhost:8088",
      changeOrigin: true,
    })
  );
  // user-service;
  app.use(
    "/user/me",
    createProxyMiddleware({
      target: "http://localhost:8088",
      changeOrigin: true,
    })
  );

  // bugboard-service
  app.use(
    "/api/bugboard",
    createProxyMiddleware({
      target: "http://localhost:8081",
      changeOrigin: true,
    })
  );

  // education-service
  app.use(
    "/api/edu",
    createProxyMiddleware({
      target: "http://localhost:8082",
      changeOrigin: true,
    })
  );

  // freeboard-service
  app.use(
   "/api/freeboard/",
    createProxyMiddleware({
      target: "http://localhost:8083",
      changeOrigin: true,
    })
  );

  // admin-service
  app.use(
    "/api/admin/notice",
    createProxyMiddleware({
      target: "http://localhost:8084",
      changeOrigin: true,
    })
  );

  // // Chat;
  // app.use(
  //   "/api/chat",
  //   createProxyMiddleware({
  //     target: "http://localhost:5000",
  //     changeOrigin: true,
  //   })
  // );


};

// module.exports = {
//   devServer: {
//     proxy: {
//       '/api/auth': {
//         target: 'https://localhost:8088',
//         changeOrigin: true,
//       },
//       '/api/admin': {
//         target: 'https://localhost:8084',
//         changeOrigin: true,
//       },
//     }
//   }
// }