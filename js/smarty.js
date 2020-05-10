smartyads = "undefined" != typeof smartyads ? smartyads : {}, smartyads.buildUnits = function(r) {
    var e = window;
    try {
        window.top.location.toString(), e = window.top
    } catch (e) {}
    var t, l = {
            c: "b",
            m: "api",
            res: "iframe",
            domain: location.host,
            page: location.pathname,
            ua: navigator && navigator.userAgent ? escape(navigator.userAgent) : "",
            w: e.screen.width,
            h: e.screen.height,
            secure: "https:" === location.protocol ? 1 : 0,
            language: navigator && navigator.language ? navigator.language : "",
            gdpr_consent: "ALL"
        },
        s = "Error: Not valid config !!!",
        c = 'Error: Field "code", "placement_id", "sizes" are required !!!',
        d = "Error: Not valid sizes !!!",
        g = "Error: Not valid placement id !!!";
    t = function() {
        if (!(r instanceof Array) || 0 === r.length) return console.log(s), !1;
        for (var e = r.length, t = 0; t < e; t++)
            if ("object" == typeof r[t])
                if ("code" in r[t] && "placement_id" in r[t] && "sizes" in r[t])
                    if (!r[t].sizes instanceof Array || r[t].sizes.length < 2 || isNaN(parseInt(r[t].sizes[0])) || isNaN(parseInt(r[t].sizes[1]))) console.log(d);
                    else if (isNaN(parseInt(r[t].placement_id))) console.log(g);
                    else {
                        var n = document.getElementById(r[t].code);
                        if (null != n) {
                            var a = document.createElement("iframe");
                            a.setAttribute("style", "overflow: hidden; border: none;");
                            var o = "";
                            for (var i in l) o += i + "=" + l[i] + "&";
                            o += "placementId=" + r[t].placement_id, a.src = location.protocol + "//dp72dc.flitch.news/?" + o, a.setAttribute("width", r[t].sizes[0]), a.setAttribute("height", r[t].sizes[1]), n.appendChild(a)
                        } else console.log('Error: Element with ID "' + r[t].code + '" not found !!!')
                    } else console.log(c);
            else console.log(s)
    }, "loading" != document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function() {
        "complete" == document.readyState && t()
    })
};