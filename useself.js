const res = (path) => {
  return `https://nyanpasu-script.majokeiko.com/${path}`;
};

const icon = (path, { png = false, searchParams = {} } = {}) => {
  const searchString = Object.entries({
    width: 64,
    height: 64,
    ...searchParams,
  })
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");

  const url = `api.iconify.design/${path}.svg${searchString ? `?${searchString}` : ""}`;

  if (png) {
    return `https://wsrv.nl/?url=${url}&output=png&w=64&h=64`;
  }

  return `https://${url}`;
};

export default function (params) {
  const proxies = params.proxies;

  const extra = {
    "rule-providers": {
      reject: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/AdvertisingLite/AdvertisingLite_Classical.yaml",
        ),
        path: "./ruleset/reject.yaml",
        interval: 86400,
      },
      apple: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Apple/Apple_Classical.yaml",
        ),
        path: "./ruleset/apple.yaml",
        interval: 86400,
      },
      google: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Google/Google.yaml",
        ),
        path: "./ruleset/google.yaml",
        interval: 86400,
      },
      google_fcm: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/GoogleFCM/GoogleFCM.yaml",
        ),
        path: "./ruleset/google_fcm.yaml",
        interval: 86400,
      },
      china: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/China/China_Classical.yaml",
        ),
        path: "./ruleset/china.yaml",
        interval: 86400,
      },
      gfw: {
        type: "http",
        behavior: "domain",
        url: res("Loyalsoldier/clash-rules/refs/heads/release/gfw.txt"),
        path: "./ruleset/gfw.yaml",
        interval: 86400,
      },
      "tld-not-cn": {
        type: "http",
        behavior: "domain",
        url: res("Loyalsoldier/clash-rules/release/tld-not-cn.txt"),
        path: "./ruleset/tld-not-cn.yaml",
        interval: 86400,
      },
      proxy: {
        type: "http",
        behavior: "domain",
        url: res("Loyalsoldier/clash-rules/release/proxy.txt"),
        path: "./ruleset/proxy.txt",
        interval: 86400,
      },
      direct: {
        type: "http",
        behavior: "domain",
        url: res("Loyalsoldier/clash-rules/release/direct.txt"),
        path: "./ruleset/direct.txt",
        interval: 86400,
      },
      telegramcidr: {
        type: "http",
        behavior: "ipcidr",
        url: res("Loyalsoldier/clash-rules/release/telegramcidr.txt"),
        path: "./ruleset/telegramcidr.txt",
        interval: 86400,
      },
      cncidr: {
        type: "http",
        behavior: "ipcidr",
        url: res("Loyalsoldier/clash-rules/release/cncidr.txt"),
        path: "./ruleset/cncidr.txt",
        interval: 86400,
      },
      lancidr: {
        type: "http",
        behavior: "ipcidr",
        url: res("Loyalsoldier/clash-rules/release/lancidr.txt"),
        path: "./ruleset/lancidr.txt",
        interval: 86400,
      },
      applications: {
        type: "http",
        behavior: "classical",
        url: res("Loyalsoldier/clash-rules/release/applications.txt"),
        path: "./ruleset/applications.yaml",
        interval: 86400,
      },
      baneasyprivacy: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/EasyPrivacy/EasyPrivacy_Classical.yaml",
        ),
        path: "./ruleset/BanEasyPrivacy.yaml",
        interval: 86400,
      },
      advertising: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/AdvertisingLite/AdvertisingLite.yaml",
        ),
        path: "./ruleset/advertising.yaml",
        interval: 86400,
      },
      openai: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/OpenAI/OpenAI.yaml",
        ),
        path: "./ruleset/OpenAI.yaml",
        interval: 86400,
      },
      microsoft: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Microsoft/Microsoft.yaml",
        ),
        path: "./ruleset/Microsoft.yaml",
        interval: 86400,
      },
      onedrive: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/OneDrive/OneDrive.yaml",
        ),
        path: "./ruleset/OneDrive.yaml",
        interval: 86400,
      },
      ehgallery: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/EHGallery/EHGallery.yaml",
        ),
        path: "./ruleset/EHGallery.yaml",
        interval: 86400,
      },
      goosegooseduck: {
        type: "http",
        behavior: "classical",
        url: res(
          "keiko233/nyanpasu-scripts/refs/heads/main/private/list/goosegooseduck.yaml",
        ),
        path: "./ruleset/goosegooseduck.yaml",
        interval: 86400,
      },
      steam: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Steam/Steam.yaml",
        ),
        path: "./ruleset/Steam.yaml",
        interval: 86400,
      },
      steamcn: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/SteamCN/SteamCN.yaml",
        ),
        path: "./ruleset/SteamCN.yaml",
        interval: 86400,
      },
      unity: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Unity/Unity.yaml",
        ),
        path: "./ruleset/Unity.yaml",
        interval: 86400,
      },
      vrchatassets: {
        type: "http",
        behavior: "classical",
        url: res(
          "keiko233/nyanpasu-scripts/refs/heads/main/private/list/vrchat-assets.yaml",
        ),
        path: "./ruleset/vrchat-assets.yaml",
        interval: 86400,
      },
      vrchatengine: {
        type: "http",
        behavior: "classical",
        url: res(
          "keiko233/nyanpasu-scripts/refs/heads/main/private/list/vrchat-engine.yaml",
        ),
        path: "./ruleset/vrchat-engine.yaml",
        interval: 86400,
      },
      claude: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Claude/Claude.yaml",
        ),
        path: "./ruleset/Claude.yaml",
        interval: 86400,
      },
      anthropic: {
        type: "http",
        behavior: "classical",
        url: res(
          "VPSDance/ai-proxy-rules/refs/heads/main/rules/clash/anthropic.yaml",
        ),
        path: "./ruleset/anthropic.yaml",
        interval: 86400,
      },
      epicgames: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Epic/Epic.yaml",
        ),
        path: "./ruleset/EpicGames.yaml",
        interval: 86400,
      },
      epicgames_cdn: {
        type: "http",
        behavior: "classical",
        url: res(
          "keiko233/nyanpasu-scripts/refs/heads/main/private/list/epicgames-cdn.yaml",
        ),
        path: "./ruleset/epicgames-cdn.yaml",
        interval: 86400,
      },
      ssh_port: {
        type: "http",
        behavior: "classical",
        url: res(
          "keiko233/nyanpasu-scripts/refs/heads/main/private/list/ssh-port.yaml",
        ),
        path: "./ruleset/ssh-port.yaml",
        interval: 86400,
      },
      spotify: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Spotify/Spotify.yaml",
        ),
        path: "./ruleset/Spotify.yaml",
        interval: 86400,
      },
      netflix: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Netflix/Netflix.yaml",
        ),
        path: "./ruleset/Netflix.yaml",
        interval: 86400,
      },
      reject: {
        type: "http",
        behavior: "domain",
        url: res("Loyalsoldier/clash-rules/refs/heads/release/reject.txt"),
        path: "./ruleset/reject.txt",
        interval: 86400,
      },
      developer: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Developer/Developer.yaml",
        ),
        path: "./ruleset/Developer.yaml",
        interval: 86400,
      },
      github: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/GitHub/GitHub.yaml",
        ),
        path: "./ruleset/GitHub.yaml",
        interval: 86400,
      },
      twitter: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Twitter/Twitter.yaml",
        ),
        path: "./ruleset/Twitter.yaml",
        interval: 86400,
      },
      escapefromtarkov: {
        type: "http",
        behavior: "classical",
        url: res(
          "keiko233/nyanpasu-scripts/refs/heads/main/private/list/escapefromtarkov.yaml",
        ),
        path: "./ruleset/escapefromtarkov.yaml",
        interval: 86400,
      },
      game_download: {
        type: "http",
        behavior: "classical",
        url: res(
          "blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Game/GameDownload/GameDownload.yaml",
        ),
        path: "./ruleset/GameDownloadCN.yaml",
        interval: 86400,
      },
      game_download_self: {
        type: "http",
        behavior: "classical",
        url: res(
          "keiko233/nyanpasu-scripts/refs/heads/main/private/list/download.yaml",
        ),
        path: "./ruleset/download.yaml",
        interval: 86400,
      },
    },
  };

  const extra_rules = [
    "RULE-SET,ssh_port,SSH Port",
    "RULE-SET,developer,Developer",
    "RULE-SET,github,Developer",
    "RULE-SET,twitter,Twitter",
    "RULE-SET,apple,Apple",
    "RULE-SET,steam,Steam",
    "RULE-SET,steamcn,SteamCN",
    "RULE-SET,telegramcidr,Telegram",
    "RULE-SET,openai,OpenAI",
    "RULE-SET,claude,Claude",
    "RULE-SET,anthropic,Claude",
    "RULE-SET,spotify,Spotify",
    "RULE-SET,netflix,Netflix",
    "RULE-SET,epicgames,EpicGames",
    "RULE-SET,google,Google",
    "RULE-SET,microsoft,Microsoft",
    "RULE-SET,onedrive,OneDrive",
    "RULE-SET,ehgallery,EHGallery",
    "RULE-SET,goosegooseduck,Goose Goose Duck",
    "RULE-SET,vrchatassets,VRChat",
    "RULE-SET,vrchatengine,VRChat",
    "RULE-SET,escapefromtarkov,Escape From Tarkov",
    "RULE-SET,epicgames_cdn,Download Service",
    "RULE-SET,game_download,Download Service",
    "RULE-SET,game_download_self,Download Service",
    "RULE-SET,baneasyprivacy,REJECT",
    "RULE-SET,advertising,REJECT",
    "RULE-SET,reject,REJECT",
    "RULE-SET,lancidr,DIRECT",
    "RULE-SET,applications,DIRECT",
    "RULE-SET,google_fcm,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,china,DIRECT",
    "RULE-SET,tld-not-cn,Proxies",
    "RULE-SET,gfw,Proxies",
    "RULE-SET,proxy,Proxies",
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
      icon: res(
        "keiko233/nyanpasu-scripts/refs/heads/main/private/icon/gradient.svg",
      ),
    },
    {
      name: "SSH Port",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: icon("bi/terminal-fill", {
        searchParams: {
          color: "#1744ad",
        },
      }),
    },
    {
      name: "Developer",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: icon("fluent-color/code-16"),
    },
    {
      name: "Apple",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://captive.apple.com",
      icon: icon("skill-icons/apple-light"),
    },
    {
      name: "Twitter",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://x.com",
      icon: icon("logos/twitter"),
    },
    {
      name: "Steam",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://steamcommunity.com",
      icon: icon("selfhst/steam"),
    },
    {
      name: "SteamCN",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://steamcommunity.com",
      icon: icon("bi/steam"),
    },
    {
      name: "EpicGames",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "https://store.epicgames.com/",
      icon: icon("simple-icons/epicgames"),
    },
    {
      name: "Download Service",
      type: "select",
      proxies: getProxies(["Selected"]),
      icon: icon("material-icon-theme/folder-download"),
    },
    {
      name: "Telegram",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://store.steamchina.com",
      icon: icon("logos/telegram"),
    },
    {
      name: "Spotify",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://open.spotify.com",
      icon: icon("logos/spotify-icon"),
    },
    {
      name: "Netflix",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://www.netflix.com",
      icon: icon("thesvg-color/netflix"),
    },
    {
      name: "Google",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://www.gstatic.com/generate_204",
      icon: icon("devicon/google"),
    },
    {
      name: "Microsoft",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://www.msftconnecttest.com/connecttest.txt",
      icon: icon("logos/microsoft-icon"),
    },
    {
      name: "OneDrive",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://www.msftconnecttest.com/connecttest.txt",
      icon: icon("selfhst/microsoft-onedrive"),
    },
    {
      name: "Unity",
      type: "select",
      proxies: getProxies(["Selected"]),
      url: "http://unity.com",
      icon: icon("skill-icons/unity-light"),
    },
    {
      name: "OpenAI",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "http://openai.com",
      icon: icon("selfhst/openai-light"),
    },
    {
      name: "Claude",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://www.anthropic.com",
      icon: icon("thesvg-color/claude"),
    },
    {
      name: "EHGallery",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: icon("flat-color-icons/gallery"),
    },
    {
      name: "Goose Goose Duck",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: icon("twemoji/goose"),
    },
    {
      name: "VRChat",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://api.vrchat.cloud",
      icon: res(
        "keiko233/nyanpasu-scripts/refs/heads/main/private/icon/vrchat.svg",
      ),
    },
    {
      name: "Escape From Tarkov",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      url: "https://escapefromtarkov.com",
      icon: res(
        "keiko233/nyanpasu-scripts/refs/heads/main/private/icon/escapefromtarkov.png",
      ),
    },
    {
      name: "Proxies",
      type: "select",
      proxies: ["Selected", ...getProxies()],
      icon: icon("fluent-color/agents-16"),
    },
  ];

  extra.rules = extra_rules;
  extra["proxy-groups"] = proxy_groups;
  return { ...params, ...extra };
}
