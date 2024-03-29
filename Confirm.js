// ==UserScript==
// @name         大麦抢票-确认
// @namespace    Jeremy Lin
// @version      0.7.1
// @description  辅助购买大麦网演唱会门票
// @author       Jiaming Lin
// @match        https://buy.damai.cn/orderConfirm*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.1.min.js
// ==/UserScript==


var test_url = "https://buy.damai.cn/orderConfirm?exParams=%7B%22damai%22%3A%221%22%2C%22channel%22%3A%22damai_app%22%2C%22umpChannel%22%3A%2210002%22%2C%22atomSplit%22%3A%221%22%2C%22serviceVersion%22%3A%221.8.5%22%7D&buyParam=600583263497_1_4192587404863&buyNow=true&spm=a2oeg.project.projectinfo.dbuy"
var timer = null;
var current_url = null;
$(document).ready(function(){
    window.current_url = window.location.href;
    if($(".error-msg").length > 0) {
        window.location.reload();
        // console.log("error");
    } else {
        var buyer_number = parseInt($(".ticket-buyer-title em").text());
        console.log(buyer_number);
        var buyer_list = $(".buyer-list-item input");
        for(var i=0; i < buyer_number; i++) {
            console.log(buyer_list[i]);
            buyer_list[i].click();
        }

        $(".submit-wrapper button").click();
        setTimeout(check_alert, 1500);

    }


});


function check_alert() {
    var alerts = $(".next-dialog-alert");
    if(alerts.length > 0) {
        window.location.reload();
    }
}




