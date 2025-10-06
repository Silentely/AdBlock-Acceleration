<div align="center">
<h1 align="center">AdBlock-Acceleration<br><img align='middle' src='https://anay.cosr.eu.org/?text=@Silentely/AdBlock-Acceleration'></img></h1>
<img align='middle' src='https://anay.cosr.eu.org/?repo=Silentely/AdBlock-Acceleration'></img>
<br>
<img src="https://img.shields.io/github/forks/Silentely/AdBlock-Acceleration?color=orange">
<img src="https://img.shields.io/github/issues/Silentely/AdBlock-Acceleration?color=green">
<br>
<img src="https://img.shields.io/github/license/Silentely/AdBlock-Acceleration?color=ff69b4">
<img src="https://img.shields.io/github/languages/code-size/Silentely/AdBlock-Acceleration?color=blueviolet">
<img src="https://img.shields.io/github/last-commit/Silentely/AdBlock-Acceleration/main?label=last%20update&color=success">
<img src="https://api.netlify.com/api/v1/badges/33088bed-6b83-4cfa-818d-183ec9b6a5ef/deploy-status">
<br>
</div>

<p align="center">
  <a href="#usage">Usage</a>
  · <a href="ANNOUNCEMENTS_EN.md">Announcement History</a>
  · <a href="README.md">中文</a>
</p>

# Project instruction 

International/China accelerated ad filtering rule subscriptions for popular tools (AdGuard, uBlock Origin, AdGuard Home, etc.):
- Zero-proxy fast updates: distributed via multiple mirrors to significantly reduce failures and waiting time.
- Multi-mirror redundancy: ① GHUCS, ② jsDelivr (cached, usually faster); ③ Render, ④ 7ed (no cache, stronger freshness).
- One-click copy & search: a web index provides mirror selector, instant search, and single/bulk copy.

# Announcement  

* **January 21, 2025, the warehouse.git was reduced in size .** 

More history: see [Announcement History](ANNOUNCEMENTS_EN.md).

## 🔖 Filter Tool Recommendations

Filtering tools：
* 🌍 browser plug-in
  * [AdGuard](https://adguard.com)
  * [uBlock Origin](https://github.com/gorhill/uBlock)
  * [AdBlock Plus](https://adblockplus.org)
  * [Adblock](https://getadblock.com)
* 📺 router terminal
  * [AdGuard Home](https://adguard.com/zh_cn/adguard-home/overview.html)
  * [KoolProxyR](https://github.com/user1121114685/koolproxyR)
  * [Adbyby](http://www.adbyby.com/)
  * [admflt](http://www.admflt.com)
* 📱 mobile 
  * [AdGuard for Android](https://adguard.com/zh_cn/adguard-android/overview.html)
  * [AdGuard for iOS](https://adguard.com/zh_cn/adguard-ios/overview.html)
* 💻 Desktop (global de-advertising)）
  * [AdGuard for Windows](https://adguard.com/zh_cn/adguard-windows/overview.html)
  * [AdGuard for macOS](https://adguard.com/zh_cn/adguard-mac/overview.html)

## 🧩 Project Introduction

🙅‍♂️However, there is a pain point with all of these tools, as the rules are largely hosted on offshore servers, making updates extremely slow or even impossible to successfully update.

😫 A very common scenario: you've configured de-advertising tools for the elders and elderly in your family to prevent them from being phished, scammed or infected with viruses while browsing the web. But the fact is that often, many rules are carefully chosen, but in fact most of them are in the state of failure to update, and then a pop-up box appears, and the elder clicks randomly, but not necessarily what happens after ...... may say that the computer is broken, the update failed....

💥 This project is designed to solve this problem by updating the rules at light speed without going through any agents.

## 🕹 Project rationale

The project uses GitHub Actions to download the latest rules every 6 hours every day at UTC time, and then pushes them to GitHub Repo.  
The rules are distributed in conjunction with a globally accelerated CDN provided by multiple sites:

①[GHUCS](https://raw.githubusercontents.com) (With cache)  
②[JsDelivr](https://www.jsdelivr.com) (With cache)  
③[Render](https://render.com) (No cache)  
④[7ed](https://www.7ed.net) (No cache)   

The result is a second-by-second update of all de-advertising rules.

## 🧪 Personal test

Under normal network environment (without any proxies, in mainland China network environment)
* Before using accelerated links: It can take up to 5 minutes and 12 seconds to update up to 13 rules, and 4 updates have failed.
* When accelerated links are used: all rules are updated within 15 seconds.

<a id="usage"></a>
## 🍔 Usage

⚠️ Note: This rule is not for web proxy tools, don't give it to Surge, ShadowRocket, Quantumult(X), Clash(X/A) and similar tools!
Just copy the table below and use the accelerated address of the corresponding rule as a link to the subscription rule for the de-advertising tool.

### 🚀 Quick start (3 steps)
1. Open the Web index page (see “Web index page” below).
2. Pick a mirror (① or ② recommended by default), search your rule, and click “copy”.
3. Paste it as a custom subscription/filter/blocklist URL in your ad-blocking tool.

### 📲 Import guide by platform
- AdGuard (Android/iOS/macOS/Windows)
  - Path: Settings → Filters → Custom filters → Add → paste the accelerated URL → Save
- uBlock Origin (browser extension)
  - Path: Dashboard → Filter lists → Custom → Import/Add → paste the accelerated URL → Apply changes
- AdGuard Home (router/home gateway)
  - Path: Filters → DNS blocklists → Add blocklist → paste the accelerated URL → Save & Update

Tip: You can keep multiple mirror URLs for the same rule as redundancy, or one primary + one backup mirror to avoid single-point failures.

### 🧰 Bulk copy tips
- On the web index page, use “copy all visible links” to copy all rules in view.
- Deep-link shortcut: `index.html?mirror=ghucs&copy=EasyPrivacy.txt` (example) — it pre-selects the mirror and copies the final URL on entry.

### 🌐 Mirror selection tips
- For speed: prefer ① GHUCS, ② jsDelivr (cached, high hit rate).
- For freshness: prefer ③ Render, ④ 7ed (no cache, usually more up-to-date).
- If a mirror is blocked or slow in your network, switch to another. In mainland China, consider also keeping one no-cache mirror as a backup.

## 📃 List of rules

## Web index page (rule index with copy/search)

- Online mirror: [https://raw.cosr.eu.org](https://raw.cosr.eu.org)
- Features:
  - Mirror selector: GHUCS / jsDelivr / cosr / gitmirror
  - One-click copy per rule; copy-all for current visible rows
  - Instant search (by rule name or filename)
  - Size/Updated time sourced from `manifest.json`
  - Theme: light (default) / dark / follow system
- Deep link (copy shortcut): `index.html?mirror=ghucs&copy=EasyPrivacy.txt`
  - It selects the mirror and copies the final URL to clipboard

- gzip copies: each file also has a `.gz` companion (e.g. `EasyPrivacy.txt.gz`). Most tools can ingest gzip directly or after a quick `gunzip -c file.txt.gz > file.txt`.

| 🥑 Rule Name | original address | 🚀 accelerated address① | 🚀 accelerated address② | 🚀 accelerated address③ | 🚀 accelerated address④ |
| :----: | :----: | :----: | :----: | :----: | :----: |
| AdGuard DNS Filter | [original](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) <sub>[copy](index.html?mirror=ghucs&copy=AdGuard_Simplified_Domain_Names_Filter.txt)</sub> | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Simplified_Domain_Names_Filter.txt) <sub>[copy](index.html?mirror=jsdelivr&copy=AdGuard_Simplified_Domain_Names_Filter.txt)</sub> | [accelerated③](https://raw.cosr.eu.org/AdGuard_Simplified_Domain_Names_Filter.txt) <sub>[copy](index.html?mirror=cosr&copy=AdGuard_Simplified_Domain_Names_Filter.txt)</sub> | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) <sub>[copy](index.html?mirror=gitmirror&copy=AdGuard_Simplified_Domain_Names_Filter.txt)</sub> |
| Anti-AD | [original](https://anti-ad.net/easylist.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) <sub>[copy](index.html?mirror=ghucs&copy=Anti_AD_Easylist.txt)</sub> | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Anti_AD_Easylist.txt) <sub>[copy](index.html?mirror=jsdelivr&copy=Anti_AD_Easylist.txt)</sub> | [accelerated③](https://raw.cosr.eu.org/Anti_AD_Easylist.txt) <sub>[copy](index.html?mirror=cosr&copy=Anti_AD_Easylist.txt)</sub> | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) <sub>[copy](index.html?mirror=gitmirror&copy=Anti_AD_Easylist.txt)</sub> |
| EasyList China | [original](https://easylist-downloads.adblockplus.org/easylistchina.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) <sub>[copy](index.html?mirror=ghucs&copy=EasyList_China.txt)</sub> | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyList_China.txt) <sub>[copy](index.html?mirror=jsdelivr&copy=EasyList_China.txt)</sub> | [accelerated③](https://raw.cosr.eu.org/EasyList_China.txt) <sub>[copy](index.html?mirror=cosr&copy=EasyList_China.txt)</sub> | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) <sub>[copy](index.html?mirror=gitmirror&copy=EasyList_China.txt)</sub> |
| EasyPrivacy | [original](https://easylist-downloads.adblockplus.org/easyprivacy.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) <sub>[copy](index.html?mirror=ghucs&copy=EasyPrivacy.txt)</sub> | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyPrivacy.txt) <sub>[copy](index.html?mirror=jsdelivr&copy=EasyPrivacy.txt)</sub> | [accelerated③](https://raw.cosr.eu.org/EasyPrivacy.txt) <sub>[copy](index.html?mirror=cosr&copy=EasyPrivacy.txt)</sub> | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) <sub>[copy](index.html?mirror=gitmirror&copy=EasyPrivacy.txt)</sub> |
| I Don't Care About Cookies | [original](https://www.i-dont-care-about-cookies.eu/abp) | Sync paused in CI due to redistribution licensing restrictions (only the original address is kept; please follow its license). |
| HalfLife | [original](https://raw.githubusercontent.com/o0HalfLife0o/list/main/ad.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/HalfLife.txt ) | [accelerated③](https://raw.cosr.eu.org/HalfLife.txt ) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt ) |
| CJX's Annoyance List | [original](https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_Annoyance_List.txt) | [accelerated③](https://raw.cosr.eu.org/CJX's_Annoyance_List.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) |
| Chengfeng General Advertising Filter Rules | [original](https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/rule.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Xinggsf_rule.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Xinggsf_rule.txt) | [accelerated③](https://raw.cosr.eu.org/Xinggsf_rule.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Xinggsf_rule.txt) |
| Chengfeng Video Advertising Filter Rules | [original](https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/mv.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Xinggsf_mv.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Xinggsf_mv.txt) | [accelerated③](https://raw.cosr.eu.org/Xinggsf_mv.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Xinggsf_mv.txt) |
| Fanboy's Social Blocking List | [original](https://easylist-downloads.adblockplus.org/fanboy-social.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Fanboy-social.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Fanboy-social.txt) | [accelerated③](https://raw.cosr.eu.org/Fanboy-social.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Fanboy-social.txt) |
| ADgk | [original](https://banbendalao.coding.net/p/adgk/d/ADgk/git/raw/main/ADgk.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/ADgk.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/ADgk.txt) | [accelerated③](https://raw.cosr.eu.org/ADgk.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/ADgk.txt) |
| Great Sage Purification | [original](https://raw.githubusercontent.com/jdlingyu/ad-wars/main/hosts) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/ds_hosts.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/ds_hosts.txt) | [accelerated③](https://raw.cosr.eu.org/ds_hosts.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/ds_hosts.txt) |
| 1024 hosts | [original](https://raw.githubusercontent.com/Goooler/1024_hosts/main/hosts) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/1024_hosts.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/1024_hosts.txt) | [accelerated③](https://raw.cosr.eu.org/1024_hosts.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/1024_hosts.txt) |
| iOSAdblockList | [original](https://raw.githubusercontent.com/BlackJack8/iOSAdblockList/main/Hosts.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/iPv4_hosts.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/iPv4_hosts.txt) | [accelerated③](https://raw.cosr.eu.org/iPv4_hosts.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/iPv4_hosts.txt) |
| StevenBlack | [original](https://raw.githubusercontent.com/StevenBlack/hosts/main/hosts) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Steven_hosts) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Steven_hosts) | [accelerated③](https://raw.cosr.eu.org/Steven_hosts) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Steven_hosts) |
| Hblock | [original](https://hblock.molinero.dev/hosts) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Hblock_hosts) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Hblock_hosts) | [accelerated③](https://raw.cosr.eu.org/Hblock_hosts) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Hblock_hosts) |
| Malware Domain List | [original](https://www.malwaredomainlist.com/hostslist/hosts.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Malware_host.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Malware_host.txt) | [accelerated③](https://raw.cosr.eu.org/Malware_host.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Malware_host.txt) |
| Adblock Warning Removal List | [original](https://easylist-downloads.adblockplus.org/antiadblockfilters.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/antiadblockfilters.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/antiadblockfilters.txt) | [accelerated③](https://raw.cosr.eu.org/antiadblockfilters.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/antiadblockfilters.txt) |
| Fanboy’s Annoyances List | [original](https://easylist-downloads.adblockplus.org/fanboy-annoyance.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/fanboy-annoyance.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/fanboy-annoyance.txt) | [accelerated③](https://raw.cosr.eu.org/fanboy-annoyance.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/fanboy-annoyance.txt) |

### 🧾 FAQ
- Updates fail or are slow?
  - Switch mirrors (①/② ↔ ③/④) or trigger a manual update in your tool. Keeping one no-cache mirror as backup often helps.
- Why no acceleration for “I Don't Care About Cookies”?
  - Redistribution license restrictions. CI sync is paused; only the original address is listed.
- Update frequency?
  - CI fetches upstream every 6 hours and pushes to the repo. With mirrors, updates usually propagate within seconds (even faster on cache hits).

## File integrity & programmatic index

- checksums: see `checksums.txt` (generated by CI). Verify locally:

```bash
sha256sum -c checksums.txt
```

- manifest: see `manifest.json` for a machine-readable index with file sizes, hashes and timestamps.

## 🚛 Refinement projects

I'd like you to submit an Issue or Request to help me improve the rules.

Submit the rules that you think you need to update for acceleration. The following points should be noted.

1. the rules need to be on an offshore server, difficult to successfully update or slow to update.
2. indicate the name, source, and function of the rule.
3. If the rule you want to speed up is a file in a GitHub project, just use the jsDelivr syntax to speed up the project file **without submitting a request**.
`https://cdn.jsdelivr.net/gh/username/project name@version/accelerate files`.

### Feedback & issue reporting
- When filing an Issue, please include:
  - Region/ISP, chosen mirror(s), tool type & version
  - Error messages or screenshots, reproduction steps
  - The rule name and link involved

## 🌟 Special thanks

* [@Hackl0us](https://github.com/Hackl0us)

## 📈 Number of historical stars

![](https://starchart.cc/Silentely/AdBlock-Acceleration.svg)

## 💰 Sponsors

[![Powered by Netjett](https://i.miji.bid/2025/07/05/76050236db0a06996ee0fc077b87880b.jpeg)](https://netjett.com "Powered by Netjett - Free VPS for Open Source")
[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")


## 📜 License

- All code in this project is released under the [GPL-3.0 license](LICENSE) unless otherwise specified.
- The README.MD and wiki resources of this project are based on [CC BY-NC-SA 4.0][CC-NC-SA-4.0]. This means you can copy and redistribute the content of this project,
  but you must **provide appropriate credit and a link to the license**. At the same time, you **may not use this project for commercial purposes**, according to our narrow understanding
  (with supplementary terms), any profit-making activity is considered a commercial purpose.
- Please use this project in compliance with local laws and regulations.

<p align="center">
  <img src="https://github.com/docker/dockercraft/raw/master/docs/img/contribute.png?raw=true" alt="贡献图示">
</p>

[github-hosts]: https://raw.githubusercontent.com/racaljk/hosts/master/hosts "hosts on Github"
[CC-NC-SA-4.0]: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/Silentely">Silentely</a></sub>
</div>