// ==UserScript==
// @name         大麦抢票-挤爆了
// @namespace    Jeremy Lin
// @version      0.1.0
// @description  辅助购买大麦网演唱会门票
// @author       Jeremy Lin
// @match        https://buy.damai.cn/multi/flow?http_referer=*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.1.min.js
// ==/UserScript==


var original_str = window.location.href;
var dest_url = original_str.replace("https://buy.damai.cn/multi/flow?http_referer=", "")

window.location.href = dest_url;