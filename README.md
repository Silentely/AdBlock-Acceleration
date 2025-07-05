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

# Project instruction 

International/China accelerated ad filtering rules subscription（[中文说明](https://github.com/Silentely/AdBlock-Acceleration/blob/main/README_CN.md)）

# Announcement  

* **January 21, 2025, the warehouse.git was reduced in size .** 
* **January 20, 2025, acceleration address ④ (Fastgit) is replaced with a new address, and acceleration address ⑤ (iQDNS) is removed.**
* **On October 17, 2023, the warehouse.git was reduced in size .**  
* **On October 19, 2022, the warehouse.git was reduced in size .**   
* **On ugust 7, 2022, New iQDNS RAW acceleration site added.**   
* **On June 18, 2022, Add Chengfeng Video Advertising Filter Rules.**    
* **On June 11, 2022, the accelerated address ② (jsDelivr) resumed resolution in some parts of mainland China. The original accelerated address ④ has a low online rate and is now replacing the Fastgit accelerated address.**    
* **On May 17, 2022, the accelerated address ② (jsDelivr) was again polluted by DNS in mainland China. In view of the current situation, users in mainland China are advised to use the accelerated address ③ and accelerated address ④.**    
* **On April 30, 2022, the accelerated address ② (jsDelivr) has resumed access in mainland China.**  
* **~~On April 28, 2022, the acceleration address ② (jsDelivr) has been polluted by mainland China DNS due to indescribable reasons, users in mainland China please change the acceleration address ② in time.~~**    
* **On March 22, 2022, the accelerated address ③ stopped resolving and the accelerated address ④ overlapped with the accelerated address ② in some areas, now both have been replaced with new addresses, please update the addresses in time.**    

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
  
🙅‍♂️However, there is a pain point with all of these tools, as the rules are largely hosted on offshore servers, making updates extremely slow or even impossible to successfully update.

😫 A very common scenario: you've configured de-advertising tools for the elders and elderly in your family to prevent them from being phished, scammed or infected with viruses while browsing the web. But the fact is that often, many rules are carefully chosen, but in fact most of them are in the state of failure to update, and then a pop-up box appears, and the elder clicks randomly, but not necessarily what happens after ...... may say that the computer is broken, the update failed....

💥 This project is designed to solve this problem by updating the rules at light speed without going through any agents.

## 🕹 Project rationale
The project uses GitHub Actions to download the latest rules every 6 hours every day at UTC time, and then pushes them to GitHub Repo.  
The rules are distributed in conjunction with a globally accelerated CDN provided by five sites  
①[GHUCS](https://raw.githubusercontents.com) (With cache)  
②[JsDelivr](https://www.jsdelivr.com) (With cache)  
③[Render](https://render.com) (No cache)  
④[7ed](https://www.7ed.net) (No cache)   

The result is a second-by-second update of all de-advertising rules.

## 🧪 personal test
Under normal network environment (without any proxies, in mainland China network environment)
* Before using accelerated links: It can take up to 5 minutes and 12 seconds to update up to 13 rules, and 4 updates have failed.
* When accelerated links are used: all rules are updated within 15 seconds.

## 🚛 Refinement projects
I'd like you to submit an Issue or Request to help me improve the rules.

Submit the rules that you think you need to update for acceleration. The following points should be noted.

1. the rules need to be on an offshore server, difficult to successfully update or slow to update.
2. indicate the name, source, and function of the rule.
3. If the rule you want to speed up is a file in a GitHub project, just use the jsDelivr syntax to speed up the project file **without submitting a request**.
`https://cdn.jsdelivr.net/gh/username/project name@version/accelerate files`.

## 🍔 Usage
⚠️ Note: This rule is not for web proxy tools, don't give it to Surge, ShadowRocket, Quantumult(X), Clash(X/A) and similar tools!
Just copy the table below and use the accelerated address of the corresponding rule as a link to the subscription rule for the de-advertising tool.

## 📃 List of rules

| 🥑 Rule Name | original address | 🚀 accelerated address① | 🚀 accelerated address② | 🚀 accelerated address③ | 🚀 accelerated address④ |
| :----: | :----: | :----: | :----: | :----: | :----: |
| AdGuard DNS Filter | [original](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Simplified_Domain_Names_Filter.txt) | [accelerated③](https://raw.cosr.eu.org/AdGuard_Simplified_Domain_Names_Filter.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/AdGuard_Simplified_Domain_Names_Filter.txt) |
| Anti-AD | [original](https://anti-ad.net/easylist.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Anti_AD_Easylist.txt) | [accelerated③](https://raw.cosr.eu.org/Anti_AD_Easylist.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/Anti_AD_Easylist.txt) |
| EasyList China | [original](https://easylist-downloads.adblockplus.org/easylistchina.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyList_China.txt) | [accelerated③](https://raw.cosr.eu.org/EasyList_China.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyList_China.txt) |
| EasyPrivacy | [original](https://easylist-downloads.adblockplus.org/easyprivacy.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/EasyPrivacy.txt) | [accelerated③](https://raw.cosr.eu.org/EasyPrivacy.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/EasyPrivacy.txt) |
| I Don't Care About Cookies | [original](https://www.i-dont-care-about-cookies.eu/abp) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/I_dont_care_about_cookies.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/I_dont_care_about_cookies.txt) | [accelerated③](https://raw.cosr.eu.org/I_dont_care_about_cookies.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/I_dont_care_about_cookies.txt) |
| HalfLife | [original](https://raw.githubusercontent.com/o0HalfLife0o/list/main/ad.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/HalfLife.txt ) | [accelerated③](https://raw.cosr.eu.org/HalfLife.txt ) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/HalfLife.txt ) |
| CJX's EasyList Lite | [original](https://raw.githubusercontent.com/cjx82630/cjxlist/main/cjxlist.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/CJX's_EasyList_Lite.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_EasyList_Lite.txt) | [accelerated③](https://raw.cosr.eu.org/CJX's_EasyList_Lite.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/CJX's_EasyList_Lite.txt) |
| CJX's Annoyance List | [original](https://raw.githubusercontent.com/cjx82630/cjxlist/main/cjx-annoyance.txt) | [accelerated①](https://raw.githubusercontents.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) | [accelerated②](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_Annoyance_List.txt) | [accelerated③](https://raw.cosr.eu.org/CJX's_Annoyance_List.txt) | [accelerated④](https://raw.gitmirror.com/Silentely/AdBlock-Acceleration/main/CJX's_Annoyance_List.txt) |
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


##    Special thanks

* [@Hackl0us](https://github.com/Hackl0us)


## Number of historical stars
![](https://starchart.cc/Silentely/AdBlock-Acceleration.svg)


## Views
![](http://profile-counter.glitch.me/Silentely/count.svg)

## Git commit log
[View Full Commit History](https://github.com/Silentely/AdBlock-Acceleration/commits/main)

## Sponsors
[![Powered by Netjett](https://i.miji.bid/2025/07/05/76050236db0a06996ee0fc077b87880b.jpeg)](https://netjett.com "Powered by Netjett - Free VPS for Open Source")
[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")