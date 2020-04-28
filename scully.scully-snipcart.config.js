exports.config = {
  projectRoot: "./src",
  projectName: "scully-snipcart",
  outDir: "./dist/static",
  routes: {
    "/products/:productId": {
      type: "json",
      productId: {
        url: "https://scully-snipcart-api.netlify.com/products.json",
        property: "id",
      },
    },
  },
};
