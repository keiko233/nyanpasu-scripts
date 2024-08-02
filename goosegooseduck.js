export default function(params) {
  const proxies = params.proxies;

  const extra = {
    "rule-providers": {
      "goose-goose-duck": {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githubusercontent.com/huyyi/ggd/master/ggd.list",
        path: "./ruleset/GooseGooseDuck.txt",
        interval: 86400,
      },
    },
  };

  const name = "Goose Goose Duck";

  params.rules.push(`RULE-SET,goose-goose-duck,${name}`);

  params["proxy-groups"].push({
    name,
    type: "select",
    proxies: proxies.map((item) => item.name),
    icon: "https://img.icons8.com/?size=128&id=OzCecOchnPlK&format=png",
  });

  return { ...params, ...extra };
}
