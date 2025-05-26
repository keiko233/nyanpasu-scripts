/*
 * This script will create a rule provider & group to filter web3 sites.
 * Copyright (C) 2025 keiko <i@elaina.moe> <
 */
export default function (params) {
  const extra_rule_providers = {
    append_web3: {
      type: "http",
      behavior: "classical",
      url: "https://nyanpasu-script.majokeiko.com/keiko233/nyanpasu-scripts/refs/heads/main/private/list/web3.yaml",
      path: "./ruleset/append_web3.yaml",
      interval: 86400,
    },
  };

  const extra_rules = ["RULE-SET,append_web3,Web3"];

  const getProxies = (apper) => {
    if (Array.isArray(apper)) {
      return ["DIRECT", ...apper, ...params.proxies.map((item) => item.name)];
    } else {
      return ["DIRECT", ...params.proxies.map((item) => item.name)];
    }
  };

  const extra_proxy_groups = [
    {
      name: "Web3",
      type: "select",
      proxies: getProxies(),
      icon: "https://cdn-icons-png.flaticon.com/512/15208/15208440.png",
    },
  ];

  return {
    ...params,
    "rule-providers": {
      ...params["rule-providers"],
      ...extra_rule_providers,
    },
    rules: [...extra_rules, ...params.rules],
    "proxy-groups": [...params["proxy-groups"], ...extra_proxy_groups],
  };
}
