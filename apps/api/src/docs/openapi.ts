export const openApiDocument = {
  openapi: "3.0.3",
  info: {
    title: "Trinix Travel API",
    version: "1.0.0",
    description: "REST API for the Trinix MERN+ travel platform."
  },
  servers: [{ url: "/api" }],
  paths: {
    "/health": {
      get: {
        summary: "Health check",
        responses: {
          "200": {
            description: "Service is healthy"
          }
        }
      }
    },
    "/auth/login": {
      post: {
        summary: "Login user"
      }
    },
    "/destinations": {
      get: {
        summary: "List destinations"
      }
    },
    "/packages": {
      get: {
        summary: "List packages"
      }
    }
  }
};
