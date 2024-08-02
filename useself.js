export default function(params) {
  const proxies = params.proxies;

  const extra = {
    "rule-providers": {
      reject: {
        type: "http",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
        path: "./ruleset/reject.yaml",
        interval: 86400,
      },
      apple: {
        type: "http",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
        path: "./ruleset/apple.yaml",
        interval: 86400,
      },
      google: {
        type: "http",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
        path: "./ruleset/google.yaml",
        interval: 86400,
      },
      proxy: {
        type: "http",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
        path: "./ruleset/proxy.yaml",
        interval: 86400,
      },
      direct: {
        type: "http",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
        path: "./ruleset/direct.yaml",
        interval: 86400,
      },
      gfw: {
        type: "http",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
        path: "./ruleset/gfw.yaml",
        interval: 86400,
      },
      "tld-not-cn": {
        type: "http",
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
        path: "./ruleset/tld-not-cn.yaml",
        interval: 86400,
      },
      telegramcidr: {
        type: "http",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
        path: "./ruleset/telegramcidr.yaml",
        interval: 86400,
      },
      cncidr: {
        type: "http",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
        path: "./ruleset/cncidr.yaml",
        interval: 86400,
      },
      lancidr: {
        type: "http",
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
        path: "./ruleset/lancidr.yaml",
        interval: 86400,
      },
      applications: {
        type: "http",
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
        path: "./ruleset/applications.yaml",
        interval: 86400,
      },
      banad: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/BanAD.yaml",
        path: "./ruleset/BanAD.yaml",
        interval: 86400,
      },
      baneasylist: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/BanEasyList.yaml",
        path: "./ruleset/BanEasyList.yaml",
        interval: 86400,
      },
      baneasylistchina: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/BanEasyListChina.yaml",
        path: "./ruleset/BanEasyListChina.yaml",
        interval: 86400,
      },
      baneasyprivacy: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/BanEasyPrivacy.yaml",
        path: "./ruleset/BanEasyPrivacy.yaml",
        interval: 86400,
      },
      proxymedia: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/ProxyMedia.yaml",
        path: "./ruleset/ProxyMedia.yaml",
        interval: 86400,
      },
      openai: {
        type: "http",
        behavior: "classical",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/OpenAi.yaml",
        path: "./ruleset/OpenAI.yaml",
        interval: 86400,
      },
      microsoft: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Microsoft.yaml",
        path: "./ruleset/Microsoft.yaml",
        interval: 86400,
      },
      onedrive: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/OneDrive.yaml",
        path: "./ruleset/OneDrive.yaml",
        interval: 86400,
      },
      ehgallery: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/EHGallery.yaml",
        path: "./ruleset/EHGallery.yaml",
        interval: 86400,
      },
      goosegooseduck: {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githubusercontent.com/huyyi/ggd/master/ggd.list",
        path: "./ruleset/GooseGooseDuck.txt",
        interval: 86400,
      },
      steam: {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Steam.yaml",
        path: "./ruleset/Steam.yaml",
        interval: 86400,
      },
      steamcn: {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/SteamCN.yaml",
        path: "./ruleset/SteamCN.yaml",
        interval: 86400,
      },
      unity: {
        type: "http",
        behavior: "domain",
        url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Unity/Unity.yaml",
        path: "./ruleset/Unity.yaml",
        interval: 86400,
      },
      vrchatassets: {
        type: "http",
        behavior: "domain",
        url: "https://github.com/Elenoxe/clash-rules-vrchat/raw/main/VRChatAssets.list",
        path: "./ruleset/VRChatAssets.txt",
        interval: 86400,
      },
      vrchatengine: {
        type: "http",
        behavior: "classical",
        url: "https://github.com/Elenoxe/clash-rules-vrchat/raw/main/VRChatEngine.list",
        path: "./ruleset/VRChatEngine.txt",
        interval: 86400,
      },
    },
  };

  const sshport_rules = ["DST-PORT,22,SSH Port", "DST-PORT,29418,SSH Port"];

  const extra_rules = [
    ...sshport_rules,
    "RULE-SET,apple,Apple",
    "RULE-SET,steam,Steam",
    "RULE-SET,steamcn,SteamCN",
    "RULE-SET,telegramcidr,Telegram",
    "RULE-SET,openai,OpenAI",
    "RULE-SET,google,Google",
    "RULE-SET,microsoft,Microsoft",
    "RULE-SET,onedrive,OneDrive",
    "RULE-SET,proxymedia,ProxyMedia",
    "RULE-SET,ehgallery,EHGallery",
    "RULE-SET,goosegooseduck,Goose Goose Duck",
    "RULE-SET,vrchatassets,VRChat",
    "RULE-SET,vrchatengine,VRChat",
    "RULE-SET,banad,Shield",
    "RULE-SET,baneasylist,Shield",
    "RULE-SET,baneasylistchina,Shield",
    "RULE-SET,baneasyprivacy,Privacy",
    "RULE-SET,lancidr,DIRECT",
    "RULE-SET,applications,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,reject,REJECT",
    "RULE-SET,gfw,Proxies",
    "RULE-SET,tld-not-cn,Proxies",
    "MATCH,Proxies",
  ];

  const getProxies = (apper) => {
    if (Array.isArray(apper)) {
      return ["DIRECT", ...apper, ...proxies.map((item) => item.name)];
    } else {
      return ["DIRECT", ...proxies.map((item) => item.name)];
    }
  };

  const proxy_groups = [
    {
      name: "Selected",
      type: "select",
      proxies: getProxies(),
      icon: "https://cdn-icons-png.flaticon.com/512/16222/16222029.png",
    },
    {
      name: "SSH Port",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: "https://cdn-icons-png.flaticon.com/512/5136/5136897.png",
    },
    {
      name: "Apple",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://captive.apple.com",
      icon: "	https://cdn-icons-png.flaticon.com/128/179/179309.png",
    },
    {
      name: "Steam",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://steamcommunity.com",
      icon: "https://cdn-icons-png.flaticon.com/128/3670/3670233.png",
    },
    {
      name: "SteamCN",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://steamcommunity.com",
      icon: "https://cdn-icons-png.flaticon.com/512/2626/2626307.png",
    },
    {
      name: "Telegram",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://store.steamchina.com",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    },
    {
      name: "Google",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://www.gstatic.com/generate_204",
      icon: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png",
    },
    {
      name: "Microsoft",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://www.msftconnecttest.com/connecttest.txt",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    },
    {
      name: "OneDrive",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://www.msftconnecttest.com/connecttest.txt",
      icon: "https://cdn-icons-png.flaticon.com/512/873/873136.png",
    },
    {
      name: "Unity",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://unity.com",
      icon: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
    },
    {
      name: "OpenAI",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://openai.com",
      icon: "https://cdn-icons-png.flaticon.com/512/11592/11592357.png",
    },
    {
      name: "ProxyMedia",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: "https://cdn-icons-png.flaticon.com/128/6404/6404519.png",
    },
    {
      name: "EHGallery",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: "https://cdn-icons-png.flaticon.com/512/9171/9171530.png",
    },
    {
      name: "Goose Goose Duck",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: "https://img.icons8.com/?size=128&id=OzCecOchnPlK&format=png",
    },
    {
      name: "VRChat",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://api.vrchat.cloud",
      icon: "https://www.svgrepo.com/show/331635/vrchat.svg",
    },
    {
      name: "Proxies",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: "https://cdn-icons-png.flaticon.com/512/9985/9985721.png",
    },
    {
      name: "Shield",
      type: "select",
      proxies: ["REJECT", "DIRECT"],
      icon: "https://cdn-icons-png.flaticon.com/512/9645/9645004.png",
    },
    {
      name: "Privacy",
      type: "select",
      proxies: ["REJECT", "DIRECT"],
      icon: "	https://cdn-icons-png.flaticon.com/512/4413/4413865.png",
    },
  ];

  extra.rules = extra_rules;
  extra["proxy-groups"] = proxy_groups;
  return { ...params, ...extra };
}
