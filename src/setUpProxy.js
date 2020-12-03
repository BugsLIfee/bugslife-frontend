//프록시 서버 설정
const proxy = require("http-proxy-middleware");
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {

  const AWS_URL = "http://f6310e3e-default-backendin-e9e6-1825476586.ap-northeast-1.elb.amazonaws.com"
  // user-service;
  app.use(
    "/auth",
    createProxyMiddleware({
      target: AWS_URL,
      // target: "http://localhost:8088",
      changeOrigin: true,
    })
  );

  // user-service;
  app.use(
    "/user/me",
    createProxyMiddleware({
      // target: "http://localhost:8088",
      target: AWS_URL,
      changeOrigin: true,
    })
  );

  // other-user-service;

  app.use(
    "/user/other",
    createProxyMiddleware({
      target: AWS_URL,
      changeOrigin: true,
    })
  );

  // bugboard-service
  app.use(
    "/api/bugboard",
    createProxyMiddleware({
      target: AWS_URL,
      // target: "http://localhost:8081",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/payment",
    createProxyMiddleware({
      // target: "http://localhost:8088",
      target: AWS_URL,
      changeOrigin: true,
    })
  );

  app.use(
    "/api/point",
    createProxyMiddleware({
      // target: "http://localhost:8088",
      target:  AWS_URL,
      changeOrigin: true,
    })
  );
  // education-service
  app.use(
    "/api/edu",
    createProxyMiddleware({
      // target: "http://localhost:8082",
      target: AWS_URL,
      changeOrigin: true,
    })
  );

  // freeboard-service
  app.use(
   "/api/freeboard/",
    createProxyMiddleware({
      // target: AWS_URL,
      target: "http://localhost:8083",
      changeOrigin: true,
    })
  );

  // admin-service
  app.use(
    "/api/admin/notice",
    createProxyMiddleware({
      target:  AWS_URL,
      // target: "http://localhost:8084",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/premium-chat",
    createProxyMiddleware({
      target: "http://localhost:8085",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/allchat",
    createProxyMiddleware({
      target: "http://localhost:8086",
      changeOrigin: true,
    })
  );

    // admin-service
  app.use(
    "/api/report",
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