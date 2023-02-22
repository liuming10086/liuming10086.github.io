(function () {
    let progressBar = document.querySelector(".progress");
    document.addEventListener("scroll", function (e) {
        // 距顶部
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 可视区高度
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 滚动条总高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        progressBar.value =
            +(scrollTop / (scrollHeight - clientHeight))*100;
    });
})();