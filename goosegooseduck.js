// Define the `main` function

function main(params) {
  const proxies = params.proxies;

  const extra = {
    "rule-providers": {
      GooseGooseDuck: {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githubusercontent.com/huyyi/ggd/master/ggd.list",
        path: "./ruleset/GooseGooseDuck.txt",
        interval: 86400,
      },
    },
  };

  const name = "Goose Goose Duck";

  params.rules.push(`RULE-SET,GooseGooseDuck,${name}`);

  params["proxy-groups"].push({
    name,
    type: "select",
    proxies: proxies.map((item) => item.name),
    icon: "https://img.icons8.com/?size=128&id=OzCecOchnPlK&format=png",
  });

  return { ...params, ...extra };
}
