export default function(params) {
  const proxies = params.proxies;

  const extra = {
    "rule-providers": {
      reject: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/reject.txt?min=1",
        path: "./ruleset/reject.yaml",
        interval: 86400,
      },
      apple: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/apple.txt?min=1",
        path: "./ruleset/apple.yaml",
        interval: 86400,
      },
      google: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/google.txt?min=1",
        path: "./ruleset/google.yaml",
        interval: 86400,
      },
      proxy: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/proxy.txt?min=1",
        path: "./ruleset/proxy.yaml",
        interval: 86400,
      },
      direct: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/direct.txt?min=1",
        path: "./ruleset/direct.yaml",
        interval: 86400,
      },
      gfw: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/gfw.txt?min=1",
        path: "./ruleset/gfw.yaml",
        interval: 86400,
      },
      "tld-not-cn": {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/tld-not-cn.txt?min=1",
        path: "./ruleset/tld-not-cn.yaml",
        interval: 86400,
      },
      telegramcidr: {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/telegramcidr.txt?min=1",
        path: "./ruleset/telegramcidr.yaml",
        interval: 86400,
      },
      cncidr: {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/cncidr.txt?min=1",
        path: "./ruleset/cncidr.yaml",
        interval: 86400,
      },
      lancidr: {
        type: "http",
        behavior: "ipcidr",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/lancidr.txt?min=1",
        path: "./ruleset/lancidr.yaml",
        interval: 86400,
      },
      applications: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/Loyalsoldier/clash-rules/release/applications.txt?min=1",
        path: "./ruleset/applications.yaml",
        interval: 86400,
      },
      baneasyprivacy: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/EasyPrivacy/EasyPrivacy.list?min=1",
        path: "./ruleset/BanEasyPrivacy.yaml",
        interval: 86400,
      },
      advertising: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/AdvertisingLite/AdvertisingLite.yaml?min=1",
        path: "./ruleset/advertising.yaml",
        interval: 86400,
      },
      openai: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/OpenAI/OpenAI.yaml?min=1",
        path: "./ruleset/OpenAI.yaml",
        interval: 86400,
      },
      microsoft: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Microsoft/Microsoft.yaml?min=1",
        path: "./ruleset/Microsoft.yaml",
        interval: 86400,
      },
      onedrive: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/OneDrive/OneDrive.yaml?min=1",
        path: "./ruleset/OneDrive.yaml",
        interval: 86400,
      },
      ehgallery: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/EHGallery/EHGallery.yaml?min=1",
        path: "./ruleset/EHGallery.yaml",
        interval: 86400,
      },
      goosegooseduck: {
        type: "http",
        behavior: "ipcidr",
        url: "https://rawcdn.githack.com/keiko233/nyanpasu-scripts/refs/heads/main/private/list/goosegooseduck.yaml?min=1",
        path: "./ruleset/goosegooseduck.yaml",
        interval: 86400,
      },
      steam: {
        type: "http",
        behavior: "ipcidr",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Steam/Steam.yaml?min=1",
        path: "./ruleset/Steam.yaml",
        interval: 86400,
      },
      steamcn: {
        type: "http",
        behavior: "ipcidr",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/SteamCN/SteamCN.yaml?min=1",
        path: "./ruleset/SteamCN.yaml",
        interval: 86400,
      },
      unity: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Unity/Unity.yaml?min=1",
        path: "./ruleset/Unity.yaml",
        interval: 86400,
      },
      vrchatassets: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/keiko233/nyanpasu-scripts/refs/heads/main/private/list/vrchat-assets.yaml?min=1",
        path: "./ruleset/vrchat-assets.yaml",
        interval: 86400,
      },
      vrchatengine: {
        type: "http",
        behavior: "classical",
        url: "https://raw.githack.com/keiko233/nyanpasu-scripts/refs/heads/main/private/list/vrchat-engine.yaml?min=1",
        path: "./ruleset/vrchat-engine.yaml",
        interval: 86400,
      },
      claude: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Claude/Claude.yaml?min=1",
        path: "./ruleset/Claude.yaml",
        interval: 86400,
      },
      epicgames:{
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Epic/Epic.yaml?min=1",
        path: "./ruleset/EpicGames.yaml",
        interval: 86400,
      },
      epicgames_cdn: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/keiko233/nyanpasu-scripts/refs/heads/main/private/list/epicgames-cdn.yaml?min=1",
        path: "./ruleset/epicgames-cdn.yaml",
        interval: 86400,
      },
      ssh_port: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/keiko233/nyanpasu-scripts/refs/heads/main/private/list/ssh-port.yaml?min=1",
        path: "./ruleset/ssh-port.yaml",
        interval: 86400,
      },
      spotify: {
        type: "http",
        behavior: "classical",
        url: "https://rawcdn.githack.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Spotify/Spotify.yaml?min=1",
        path: "./ruleset/Spotify.yaml",
        interval: 86400,
      }
    },
  };

  const extra_rules = [
    "RULE-SET,ssh_port,SSH Port",
    "RULE-SET,apple,Apple",
    "RULE-SET,steam,Steam",
    "RULE-SET,steamcn,SteamCN",
    "RULE-SET,telegramcidr,Telegram",
    "RULE-SET,openai,OpenAI",
    "RULE-SET,claude,Claude",
    "RULE-SET,spotify,Spotify",
    "RULE-SET,epicgames,EpicGames",
    "RULE-SET,google,Google",
    "RULE-SET,microsoft,Microsoft",
    "RULE-SET,onedrive,OneDrive",
    "RULE-SET,ehgallery,EHGallery",
    "RULE-SET,goosegooseduck,Goose Goose Duck",
    "RULE-SET,vrchatassets,VRChat",
    "RULE-SET,vrchatengine,VRChat",
    "RULE-SET,baneasyprivacy,REJECT",
    "RULE-SET,lancidr,DIRECT",
    "RULE-SET,applications,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,epicgames_cdn,DIRECT",
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
      icon: "https://rawcdn.githack.com/keiko233/nyanpasu-scripts/refs/heads/main/private/icon/gradient.svg?min=1",
    },
    {
      name: "SSH Port",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: "https://cdn-icons-png.flaticon.com/512/11743/11743804.png",
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
      name: "EpicGames",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "https://store.epicgames.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg",
    },
    {
      name: "Telegram",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://store.steamchina.com",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    },
    {
      name: "Spotify",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://open.spotify.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
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
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg",
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
      name: "Claude",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://www.anthropic.com",
      icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.13.0/files/dark/claude-color.png",
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
  ];

  extra.rules = extra_rules;
  extra["proxy-groups"] = proxy_groups;
  return { ...params, ...extra };
}
