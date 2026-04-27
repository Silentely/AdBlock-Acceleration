<div align="center">
<h1 align="center">AdBlock-Acceleration<br><img align='middle' src='https://anay.cosr.eu.org/?text=@Silentely/AdBlock-Acceleration'></img></h1>
<img align='middle' src='https://anay.cosr.eu.org/?repo=Silentely/AdBlock-Acceleration'></img>
<br>
<img src="https://img.shields.io/github/forks/Silentely/AdBlock-Acceleration?color=orange">
<img src="https://img.shields.io/github/issues/Silentely/AdBlock-Acceleration?color=green">
<br>
<img src="https://img.shields.io/github/license/Silentely/AdBlock-Acceleration?color=ff69b4">
<img src="https://img.shields.io/github/languages/code-size/Silentely/AdBlock-Acceleration?color=blueviolet">
<img src="https://img.shields.io/github/last-commit/Silentely/AdBlock-Acceleration/main?label=%E4%B8%8A%E6%AC%A1%E6%9B%B4%E6%96%B0&color=success">
<img src="https://api.netlify.com/api/v1/badges/33088bed-6b83-4cfa-818d-183ec9b6a5ef/deploy-status">
<br>
</div>

<p align="center">
  <a href="#usage">使用方法</a>
  · <a href="ANNOUNCEMENTS_CN.md">公告历史</a>
  · <a href="README_EN.md">English</a>
</p>

# 项目说明

为常见去广告工具（AdGuard、uBlock Origin、AdGuard Home 等）提供“国际/中国网络可用”的规则加速订阅：
- **零代理即可快速更新**：通过多镜像分发，显著降低更新失败率与等待时间。
- **多镜像冗余**：① GHUCS、② jsDelivr（有缓存，速度快）；③ Render、④ 7ed（无缓存，强一致）。
- **一键复制与搜索**：内置 Web 索引页支持镜像选择、即时搜索、单条/批量复制。

# 公告 

* **2025年01月21日，对仓库.git进行缩减大小。**

更多历史请见 [公告历史](ANNOUNCEMENTS_CN.md)。

## 🔖 过滤工具推荐

过滤工具：
* 🌍 浏览器插件
  * [AdGuard](https://adguard.com)
  * [uBlock Origin](https://github.com/gorhill/uBlock)
  * [AdBlock Plus](https://adblockplus.org)
  * [Adblock](https://getadblock.com)
* 📺 路由器端
  * [AdGuard Home](https://adguard.com/zh_cn/adguard-home/overview.html)
  * [KoolProxyR](https://github.com/user1121114685/koolproxyR)
  * [Adbyby](http://www.adbyby.com/)
  * [阿呆喵](http://www.admflt.com)
* 📱 移动端
  * [AdGuard for Android](https://adguard.com/zh_cn/adguard-android/overview.html)
  * [AdGuard for iOS](https://adguard.com/zh_cn/adguard-ios/overview.html)
* 💻 桌面端（全局去广告）
  * [AdGuard for Windows](https://adguard.com/zh_cn/adguard-windows/overview.html)
  * [AdGuard for macOS](https://adguard.com/zh_cn/adguard-mac/overview.html)

🙅‍♂️但是这类工具都存在一个痛点，因为规则基本都托管在境外服务器，导致更新极其缓慢，甚至无法成功更新。

😫 一个非常常见的场景：你为家中长辈、老人配置了去广告工具来避免他们在浏览网页时被钓鱼、欺诈或感染病毒。但是事实往往是，精心选择了很多规则，但实际上大部分规则都处于更新失败的状态，然后弹出提示框，长辈乱点，之后不一定怎样了……可能说电脑坏了，更新失败了……

💥 这个项目就是为了解决这一难题，无需通过任何代理即可光速更新规则。

## 🧩 项目介绍

这类工具都存在一个痛点，因为规则基本都托管在境外服务器，导致更新极其缓慢，甚至无法成功更新。

一个非常常见的场景：你为家中长辈、老人配置了去广告工具来避免他们在浏览网页时被钓鱼、欺诈或感染病毒。但是事实往往是，精心选择了很多规则，但实际上大部分规则都处于更新失败的状态，然后弹出提示框，长辈乱点，之后不一定怎样了……可能说电脑坏了，更新失败了……

## 🕹 项目原理

项目使用了 GitHub Actions 在每天 UTC 时间每隔6小时更新下载一次最新规则，然后推送到 GitHub Repo。  
配合使用多个网站提供的全球加速 CDN 来分发规则：

①[GHUCS](https://raw.githubusercontents.com) （具有缓存）  
②[jsDelivr](https://www.jsdelivr.com) （具有缓存）   
③[Render](https://render.com) （无缓存）    
④[7ed](https://www.7ed.net) （无缓存）     

从而实现秒秒钟更新所有去广告规则。

## 🧪 个人测试

正常网络环境下（无任何代理，在中国大陆网络环境下）
* 使用加速链接前：更新 13 个规则最长可能需要 5 分钟 12 秒，而且有 4 个更新失败。
* 使用加速链接后：所有规则在 15秒内全部更新完成。

<a id="usage"></a>
## 🍔 使用方法

**⚠️ 注意：** 该规则不是针对网络代理工具的，不要给 Surge、ShadowRocket、Quantumult(X)、Clash(X/A) 等类似工具使用！
直接拷贝下方表格中，对应规则的加速地址，作为去广告工具的订阅规则链接即可。

### 🚀 快速开始（3 步）
1. 打开 Web 规则索引页（见下文“Web 规则索引页”）。
2. 选择镜像（默认推荐 ① 或 ②），搜索并点击对应规则右侧“复制”。
3. 在你的去广告工具中粘贴为“自定义订阅/自定义过滤器/阻止列表 URL”。

### 📲 各平台导入指南
- AdGuard（Android/iOS/macOS/Windows）
  - 路径：设置 → 过滤器 → 自定义过滤器 → 添加 → 粘贴加速地址 → 保存
- uBlock Origin（浏览器扩展）
  - 路径：Dashboard（仪表盘）→ Filter lists → Custom → Import/添加自定义 → 粘贴加速地址 → Apply changes
- AdGuard Home（路由器/家庭网关）
  - 路径：Filters → DNS blocklists → Add blocklist → 粘贴加速地址 → Save & Update

小贴士：同一规则可同时添加多条镜像链接作“冗余”，或保留 1 条主镜像 + 1 条备用镜像，降低单点故障影响。

### 🧰 批量复制技巧
- 在 Web 索引页使用“复制当前可见规则链接”即可一键复制表格中所有可见规则。
- 深链快捷：`index.html?mirror=ghucs&copy=EasyPrivacy.txt`（示例）——进入即选定镜像并复制该文件最终链接。

### 🌐 镜像选择建议
- 追求速度：优先 ① GHUCS、② jsDelivr（有缓存、命中率高）。
- 强制最新：使用 ③ Render、④ 7ed（无缓存，一般更“新”）。
- 若某镜像在你所在网络环境不可用，换另一个镜像即可；国内网络建议同时保留一个无缓存镜像作备用。

## 📃 规则列表

## Web 规则索引页（复制/搜索/镜像选择）

- 在线镜像：[https://raw.cosr.eu.org](https://raw.cosr.eu.org)
- 功能：
  - 镜像选择：GHUCS / jsDelivr / cosr / gitmirror
  - 单条一键复制；按“复制当前可见规则链接”批量复制
  - 即时搜索（按规则名或文件名）
  - 大小/更新时间来自根目录 `manifest.json`
  - 主题：浅色（默认）/ 深色 / 跟随系统
- 深链（复制直达）：`index.html?mirror=ghucs&copy=EasyPrivacy.txt`
  - 进入即按镜像复制最终链接到剪贴板

| 🥑 规则名称 | 原始地址 | 🚀 加速地址① | 🚀 加速地址② | 🚀 加速地址③ | 🚀 加速地址④ |
| :----: | :----: | :----: | :----: | :----: | :----: |
| AdGuard DNS Filter | [原始](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Simplified_Domain_Names_Filter.txt) | [加速③](https://raw.cosr.eu.org/AdGuard_Simplified_Domain_Names_Filter.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) |
| Anti-AD | [原始](https://anti-ad.net/easylist.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Anti_AD_Easylist.txt) | [加速③](https://raw.cosr.eu.org/Anti_AD_Easylist.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) |
| EasyList China | [原始](https://easylist-downloads.adblockplus.org/easylistchina.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyList_China.txt) | [加速③](https://raw.cosr.eu.org/EasyList_China.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) |
| EasyPrivacy | [原始](https://easylist-downloads.adblockplus.org/easyprivacy.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyPrivacy.txt) | [加速③](https://raw.cosr.eu.org/EasyPrivacy.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) |
| 屏蔽网站的Cookies警告 | [原始](https://www.i-dont-care-about-cookies.eu/abp) | 已在 CI 暂停同步，可能存在再分发许可限制（仅保留原始地址，使用者请按其许可自取）。 |
| HalfLife | [原始](https://raw.githubusercontent.com/o0HalfLife0o/list/main/ad.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/HalfLife.txt ) | [加速③](https://raw.cosr.eu.org/HalfLife.txt ) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt ) |
| CJX's Annoyance List | [原始](https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_Annoyance_List.txt) | [加速③](https://raw.cosr.eu.org/CJX's_Annoyance_List.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) |
| 乘风通用广告过滤规则 | [原始](https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/rule.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Xinggsf_rule.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Xinggsf_rule.txt) | [加速③](https://raw.cosr.eu.org/Xinggsf_rule.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Xinggsf_rule.txt) |
| 乘风视频广告过滤规则 | [原始](https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/mv.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Xinggsf_mv.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Xinggsf_mv.txt) | [加速③](https://raw.cosr.eu.org/Xinggsf_mv.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Xinggsf_mv.txt) |
| 禁止社交媒体图标列表 | [原始](https://easylist-downloads.adblockplus.org/fanboy-social.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Fanboy-social.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Fanboy-social.txt) | [加速③](https://raw.cosr.eu.org/Fanboy-social.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Fanboy-social.txt) |
| ADgk | [原始](https://banbendalao.coding.net/p/adgk/d/ADgk/git/raw/main/ADgk.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/ADgk.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/ADgk.txt) | [加速③](https://raw.cosr.eu.org/ADgk.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/ADgk.txt) |
| 大圣净化 | [原始](https://raw.githubusercontent.com/jdlingyu/ad-wars/main/hosts) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/ds_hosts.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/ds_hosts.txt) | [加速③](https://raw.cosr.eu.org/ds_hosts.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/ds_hosts.txt) |
| 1024 hosts | [原始](https://raw.githubusercontent.com/Goooler/1024_hosts/main/hosts) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/1024_hosts.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/1024_hosts.txt) | [加速③](https://raw.cosr.eu.org/1024_hosts.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/1024_hosts.txt) |
| iOSAdblockList | [原始](https://raw.githubusercontent.com/BlackJack8/iOSAdblockList/main/Hosts.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/iPv4_hosts.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/iPv4_hosts.txt) | [加速③](https://raw.cosr.eu.org/iPv4_hosts.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/iPv4_hosts.txt) |
| StevenBlack | [原始](https://raw.githubusercontent.com/StevenBlack/hosts/main/hosts) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Steven_hosts) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Steven_hosts) | [加速③](https://raw.cosr.eu.org/Steven_hosts) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Steven_hosts) |
| Hblock | [原始](https://hblock.molinero.dev/hosts) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Hblock_hosts) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Hblock_hosts) | [加速③](https://raw.cosr.eu.org/Hblock_hosts) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Hblock_hosts) |
| Malware Domain List | [原始](https://www.malwaredomainlist.com/hostslist/hosts.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Malware_host.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Malware_host.txt) | [加速③](https://raw.cosr.eu.org/Malware_host.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Malware_host.txt) |
| Adblock Warning Removal List | [原始](https://easylist-downloads.adblockplus.org/antiadblockfilters.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/antiadblockfilters.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/antiadblockfilters.txt) | [加速③](https://raw.cosr.eu.org/antiadblockfilters.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/antiadblockfilters.txt) |
| Fanboy’s Annoyances List | [原始](https://easylist-downloads.adblockplus.org/fanboy-annoyance.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/fanboy-annoyance.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/fanboy-annoyance.txt) | [加速③](https://raw.cosr.eu.org/fanboy-annoyance.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/fanboy-annoyance.txt) |
| AdGuard Chinese Filter | [原始](https://filters.adtidy.org/extension/ublock/filters/224.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AdGuard_Chinese_Filter.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Chinese_Filter.txt) | [加速③](https://raw.cosr.eu.org/AdGuard_Chinese_Filter.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AdGuard_Chinese_Filter.txt) |
| uBlock filters | [原始](https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/uBlock_filters.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/uBlock_filters.txt) | [加速③](https://raw.cosr.eu.org/uBlock_filters.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/uBlock_filters.txt) |
| AWAvenue Ads Rule (秋风广告规则) | [原始](https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/AWAvenue-Ads-Rule.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AWAvenue_Ads_Rule.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AWAvenue_Ads_Rule.txt) | [加速③](https://raw.cosr.eu.org/AWAvenue_Ads_Rule.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AWAvenue_Ads_Rule.txt) |
| AdGuard Base Filter | [原始](https://filters.adtidy.org/extension/ublock/filters/2.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AdGuard_Base_Filter.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Base_Filter.txt) | [加速③](https://raw.cosr.eu.org/AdGuard_Base_Filter.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AdGuard_Base_Filter.txt) |
| AdGuard Mobile Ads Filter | [原始](https://filters.adtidy.org/extension/ublock/filters/11.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AdGuard_Mobile_Ads_Filter.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Mobile_Ads_Filter.txt) | [加速③](https://raw.cosr.eu.org/AdGuard_Mobile_Ads_Filter.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AdGuard_Mobile_Ads_Filter.txt) |
| 百度搜索结果屏蔽百家号(Baidu Ad Block) | [原始](https://raw.githubusercontent.com/banbendalao/ADgk/master/kill-baidu-ad.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/kill-baidu-ad.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/kill-baidu-ad.txt) | [加速③](https://raw.cosr.eu.org/kill-baidu-ad.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/kill-baidu-ad.txt) |

### 🧾 FAQ（常见问题）
- 订阅更新失败或很慢？
  - 先切换镜像（①/② ↔ ③/④），或在工具中手动“立即更新”。必要时保留一个无缓存镜像作备用。
- 为什么“屏蔽网站的 Cookies 警告”不提供加速？
  - 其再分发许可存在限制，已在 CI 暂停同步，仅保留原始地址，使用者请按其许可自取。
- 更新频率？
  - CI 每 6 小时拉取上游并推送，通常 15 秒内即可通过镜像完成更新分发（命中缓存时更快）。

## 文件完整性与程序化索引

- 校验和：见 `checksums.txt`（由 CI 生成）。本地校验示例：

```bash
sha256sum -c checksums.txt
```

- 清单：见 `manifest.json`，包含文件大小、哈希与时间戳，便于程序化消费。

## 🚛 完善项目

希望大家可以提交 Issue 或者 Request 来帮助我完善规则

提交认为你们需要更新加速的规则。下面几点需要注意：

1. 规则需要在境外服务器，难以成功更新或更新缓慢的。
2. 注明规则的名称、来源、作用
3. 如果你需要加速的规则是 GitHub 的项目中的文件，请直接使用 jsDelivr 的语法加速项目文件即可，**无需提交请求**。
`https://cdn.jsdelivr.net/gh/用户名/项目名@版本/加速文件`

### 反馈建议与问题报告
- 提交 Issue 时请尽量附上：
  - 所在地区与运营商、使用的镜像、工具类型与版本
  - 失败截图或报错信息、可复现步骤
  - 涉及的规则名称与链接

## 🌟 特别鸣谢

* [@Hackl0us](https://github.com/Hackl0us)

## 📈 历史 Star 数

![](https://starchart.cc/Silentely/AdBlock-Acceleration.svg)

## 💰 赞助商

[![Powered by Netjett](https://i.miji.bid/2025/07/05/76050236db0a06996ee0fc077b87880b.jpeg)](https://netjett.com "Powered by Netjett - Free VPS for Open Source")
[![Powered by DartNode](https://i.mji.rip/2026/01/04/3bf2296ec703a8d811bce184a5ea4245.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")


## License

- 本项目的所有代码除另有说明外,均按照 [GPL-3.0 license](LICENSE) 发布。
- 本项目的README.MD，wiki等资源基于 [CC BY-NC-SA 4.0][CC-NC-SA-4.0] 这意味着你可以拷贝、并再发行本项目的内容，  
  但是你将必须同样**提供原作者信息以及协议声明**。同时你也**不能将本项目用于商业用途**，按照我们狭义的理解  
  (增加附属条款)，凡是**任何盈利的活动皆属于商业用途**。
- 请在遵守当地相关法律法规的前提下使用本项目。

<p align="center">
  <img src="https://github.com/docker/dockercraft/raw/master/docs/img/contribute.png?raw=true" alt="贡献图示">
</p>

[github-hosts]: https://raw.githubusercontent.com/racaljk/hosts/master/hosts "hosts on Github"
[CC-NC-SA-4.0]: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/Silentely">Silentely</a></sub>
</div>