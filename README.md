# AdBlock-Acceleration

国内加速过滤广告规则订阅

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
  * Adbyby
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
项目使用了 GitHub Actions 在每天 UTC 时间 00:00 （每隔4小时更新一次）更新下载一次最新规则，然后推送到 GitHub Repo。
配合 [jsDelivr](https://www.jsdelivr.com) 全球加速 CDN 来分发规则。
从而实现秒秒钟更新所有去广告规则，简直不要太爽。

## 🧪 个人测试
正常网络环境下（无任何代理，在中国大陆网络环境下）
* 使用加速链接前：更新 12 个规则最长可能需要 4 分钟 56 秒，而且有 3 个更新失败。
* 使用加速链接后：所有规则在 7 秒内全部更新完成。

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

|  🥑 规则名称   | 🚀 加速地址  |
|  :----:  | :----:  |
| Adguard Simplified Domain Names Filter | [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/AdGuard_Simplified_Domain_Names_Filter.txt) |
| Easylist China  | [加速](https://cdn.jsdelivr.net/ghSilentely/AdBlock-Acceleration/Easylist_China.txt) |
| EasyPrivacy | [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/Easylist_Privacy.txt) |
| I Don't Care About Cookies | [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/I_dont_care_about_cookies.txt) |
| HalfLife| [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/HalfLife.txt  ) |
| CJX's EasyList Lite| [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_EasyList_Lite.txt) |
| CJX's Annoyance List | [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/CJX's_Annoyance_List.txt) |
| 乘风广告过滤 | [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/xinggsf_rule.txt ) |
| 乘风视频过滤 | [加速](https://cdn.jsdelivr.net/gh/Silentely/AdBlock-Acceleration/xinggsf_mv.txt ) |
