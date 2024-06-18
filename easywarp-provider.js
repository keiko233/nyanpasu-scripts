// Define the `main` function

function main(params) {
  const extra = {
    "proxy-providers": {
      warp: {
        type: "http",
        url: "https://neko-warp.nloli.xyz/neko_warp.yaml",
        interval: 3600,
        path: "./proxy_providers/neko_warp.yaml",
        override: {
          "additional-prefix": "WARP ",
        },
      },
    },
  };

  extra["proxy-groups"] = params["proxy-groups"].map((item) => {
    return {
      ...item,
      use: ["warp"],
    };
  });

  return { ...params, ...extra };
}
