import { createProxyMiddleware } from "http-proxy-middleware";

export default function proxy(app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5500",
      changeOrigin: true,
    })
  );
}
