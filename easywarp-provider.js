export default function (params) {
  const proxies = params.proxies;

  const extra = {
    "proxy-providers": {
      warp: {
        type: "http",
        url: "https://neko-warp.nloli.xyz/neko_warp.yaml",
        interval: 3600,
        path: "./proxy_providers/neko_warp.yaml",
        override: {
          "additional-prefix": "WARP ",
          "dialer-proxy": "WARP Dialer",
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

  extra["proxy-groups"].push({
    name: "WARP Dialer",
    type: "select",
    proxies: ["DIRECT", ...proxies.map((item) => item.name)],
    icon: "https://www.applivery.com/wp-content/uploads/2024/11/Cloudflare-WARP.png",
  })

  return { ...params, ...extra };
}
