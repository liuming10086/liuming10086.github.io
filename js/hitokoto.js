! function(e, t) {
    e.autoTyper = function(e) {
        var o = {
            selector: ".hitokoto",
            words: ["Hello World..."],
            charSpeed: 85,
            delay: 2100,
            loop: !0,
            flipflop: !0,
            position: 0,
            currentWord: "",
            element: null,
            isStopped: !1
        };
        ! function(e) {
            if (e)
                for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t])
        }(e);
        var n = function*() {
                (o.position === o.currentWord.length || o.isStopped) && (o.flipflop && (yield setTimeout(function() {
                    i().next()
                }, o.delay)), yield null), o.element.innerHTML += o.currentWord[o.position++], yield setTimeout(function() {
                    n().next()
                }, o.position < o.currentWord.length ? o.charSpeed : 0)
            },
            i = function*() {
                (0 === o.position || o.isStopped) && (yield null), o.element.innerHTML = o.currentWord.substr(0, --o.position), yield setTimeout(function() {
                    i().next()
                }, o.position > 0 ? o.charSpeed : 0)
            },
            r = function*(e, t) {
                yield setTimeout(function() {
                    o.position = 0, o.currentWord = e, o.element.innerHTML = "", n().next()
                }, t)
            },
            l = function*() {
                o.isStopped && (yield null);
                for (var e = 0, t = 0; t < o.words.length; t++) {
                    if (o.words[t]) {
                        r(o.words[t], e).next();
                        var n = o.words[t].length * o.charSpeed;
                        o.flipflop && (n *= 2), e += n + o.delay
                    }
                }
                yield setTimeout(function() {
                    o.loop && l().next()
                }, e)
            };
        this.start = function() {
            if ("string" == typeof o.selector && o.selector && Array.isArray(o.words) && o.words.length) {
                var e = t.querySelector(o.selector);
                e && (o.element = e, o.isStopped = !1, l().next())
            }
        }, this.stop = function() {
            o.isStopped = !0, o.position = 0, o.currentWord = ""
        }
    }
}(window, document);
$.ajax({
    url: "https://v1.hitokoto.cn/?c=b",
    type: 'get',
    success: function(data){
        var options = {
            words: [data.hitokoto], // words/sentences that will be auto typed
            charSpeed: 85, // letter typing animation speed
            delay: 2100, // word/sentence typing animation delay
            loop: false, // if loop is activated, autoTyper will start over
            flipflop: false // if flipflop is activated, letters which are typed animated will be removed ony by one animated
        };
        new autoTyper(options).start();
    }
});
