<div align="center">
<h1 align="center">AdBlock-Acceleration<br><img align='middle' src='https://anay.cosr.eu.org/?text=@Silentely/AdBlock-Acceleration'></img></h1>
<img align='middle' src='https://anay.cosr.eu.org/?repo=Silentely/AdBlock-Acceleration'></img>
<br>
<img src="https://img.shields.io/github/forks/Silentely/AdBlock-Acceleration?color=orange">
<img src="https://img.shields.io/github/issues/Silentely/AdBlock-Acceleration?color=green">
<br>
<img src="https://img.shields.io/github/license/Silentely/AdBlock-Acceleration?color=ff69b4">
<img src="https://img.shields.io/github/languages/code-size/Silentely/AdBlock-Acceleration?color=blueviolet">
<img src="https://img.shields.io/badge/dynamic/json?label=GitHub%20Followers&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3DSilentely&labelColor=282c34&color=181717&logo=github&longCache=true "关注数量">
<br>
<img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSilentely%2FAdBlock-Acceleration.svg?type=small">
</div>

# 项目说明

国际/中国加速过滤广告规则订阅（[English instructions](https://github.com/Silentely/AdBlock-Acceleration/blob/main/README.md)）

# 公告 

* **2025年01月21日，对仓库.git进行缩减大小。** 
* **2025年01月20日，加速地址④（Fastgit）替换为新地址，加速地址⑤(iQDNS)删除。** 
* **2023年10月17日，对仓库.git进行缩减大小。** 
* **2022年10月19日，对仓库.git进行缩减大小。**    
* **2022年8月7日，新增iQDNS RAW加速站点。**    
* **2022年6月18日，新增乘风视频广告过滤规则。**    
* **2022年6月11日，加速地址②（jsDelivr）在中国大陆部分地区恢复解析。原加速地址④在线率低，现已替换Fastgit加速地址。**    
* **2022年5月17日，加速地址②（jsDelivr）在中国大陆再次被DNS污染，鉴于目前状况，建议中国大陆用户选用加速地址③和加速地址④。**    
* **~~2022年4月30日，加速地址②（jsDelivr）在中国大陆已恢复访问。~~**    
* **~~2022年4月28日，由于不可描述的原因加速地址②（jsDelivr）已被中国大陆DNS污染，中国大陆用户请及时更换加速地址②。~~**    
* **2022年3月22日，因加速地址③停止解析和加速地址④在某些地区与加速地址②重合，现均已替换新地址，请及时更新地址。**    

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

## 🕹 项目原理
项目使用了 GitHub Actions 在每天 UTC 时间每隔6小时更新下载一次最新规则，然后推送到 GitHub Repo。  
配合使用五个网站提供的全球加速 CDN 来分发规则  
①[GHUCS](https://raw.githubusercontents.com) （具有缓存）  
②[jsDelivr](https://www.jsdelivr.com) （具有缓存）   
③[Render](https://render.com) （无缓存）    
④[7ed](https://www.7ed.net) （无缓存）     

从而实现秒秒钟更新所有去广告规则。

## 🧪 个人测试
正常网络环境下（无任何代理，在中国大陆网络环境下）
* 使用加速链接前：更新 13 个规则最长可能需要 5 分钟 12 秒，而且有 4 个更新失败。
* 使用加速链接后：所有规则在 15秒内全部更新完成。

## 🚛 完善项目
希望大家可以提交 Issue 或者 Request 来帮助我完善规则

提交认为你们需要更新加速的规则。下面几点需要注意：

1. 规则需要在境外服务器，难以成功更新或更新缓慢的。
2. 注明规则的名称、来源、作用
3. 如果你需要加速的规则是 GitHub 的项目中的文件，请直接使用 jsDelivr 的语法加速项目文件即可，**无需提交请求**。
`https://cdn.jsdelivr.net/gh/用户名/项目名@版本/加速文件`

## 🍔 使用方法
**⚠️ 注意：** 该规则不是针对网络代理工具的，不要给 Surge、ShadowRocket、Quantumult(X)、Clash(X/A) 等类似工具使用！
直接拷贝下方表格中，对应规则的加速地址，作为去广告工具的订阅规则链接即可。

## 📃 规则列表

| 🥑 规则名称 | 原始地址 | 🚀 加速地址① | 🚀 加速地址② | 🚀 加速地址③ | 🚀 加速地址④ |
| :----: | :----: | :----: | :----: | :----: | :----: |
| AdGuard DNS Filter | [原始](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Simplified_Domain_Names_Filter.txt) | [加速③](https://raw.cosr.eu.org/AdGuard_Simplified_Domain_Names_Filter.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) |
| Anti-AD | [原始](https://anti-ad.net/easylist.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Anti_AD_Easylist.txt) | [加速③](https://raw.cosr.eu.org/Anti_AD_Easylist.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) |
| EasyList China | [原始](https://easylist-downloads.adblockplus.org/easylistchina.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyList_China.txt) | [加速③](https://raw.cosr.eu.org/EasyList_China.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) |
| EasyPrivacy | [原始](https://easylist-downloads.adblockplus.org/easyprivacy.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyPrivacy.txt) | [加速③](https://raw.cosr.eu.org/EasyPrivacy.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) |
| 屏蔽网站的Cookies警告 | [原始](https://www.i-dont-care-about-cookies.eu/abp) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/I_dont_care_about_cookies.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/I_dont_care_about_cookies.txt) | [加速③](https://raw.cosr.eu.org/I_dont_care_about_cookies.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/I_dont_care_about_cookies.txt) |
| HalfLife | [原始](https://raw.githubusercontent.com/o0HalfLife0o/list/main/ad.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/HalfLife.txt ) | [加速③](https://raw.cosr.eu.org/HalfLife.txt ) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt ) |
| CJX's EasyList Lite | [原始](https://raw.githubusercontent.com/cjx82630/cjxlist/main/cjxlist.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/CJX's_EasyList_Lite.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_EasyList_Lite.txt) | [加速③](https://raw.cosr.eu.org/CJX's_EasyList_Lite.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/CJX's_EasyList_Lite.txt) |
| CJX's Annoyance List | [原始](https://raw.githubusercontent.com/cjx82630/cjxlist/main/cjx-annoyance.txt) | [加速①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) | [加速②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_Annoyance_List.txt) | [加速③](https://raw.cosr.eu.org/CJX's_Annoyance_List.txt) | [加速④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) |
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


## 特别鸣谢

* [@Hackl0us](https://github.com/Hackl0us)

## 历史 Star 数
![](https://starchart.cc/Silentely/AdBlock-Acceleration.svg)

## 访问量
![](http://profile-counter.glitch.me/Silentely/count.svg)

## Git 提交日志
[查看完整提交历史](https://github.com/Silentely/AdBlock-Acceleration/commits/main)

## 赞助商
[![Powered by Netjett](https://i.miji.bid/2025/07/05/76050236db0a06996ee0fc077b87880b.jpeg)](https://netjett.com "Powered by Netjett - Free VPS for Open Source")
[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")

## License

- 本项目的所有代码除另有说明外,均按照 [MIT License](LICENSE) 发布。
- 本项目的README.MD，wiki等资源基于 [CC BY-NC-SA 4.0][CC-NC-SA-4.0] 这意味着你可以拷贝、并再发行本项目的内容，<br/>
  但是你将必须同样**提供原作者信息以及协议声明**。同时你也**不能将本项目用于商业用途**，按照我们狭义的理解<br/>
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
