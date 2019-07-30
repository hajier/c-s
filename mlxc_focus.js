var nav2Url = ["../tx_public/index.htm",
    "../tx_public/index.htm",
    "zhpt.html",
    mlxc_Url];

function setBackID() {
    setShortCookie("mlxc_backId", j);
}

function onFocus() {//获焦
    if (area == 1) {
        addClass($("nav1_" + i), "nav1_focus");
    } else if (area == 2) {
        addClass($("nav2_" + j), "nav2_focus");
    } else if (area == 3) {
        $("nav3_0").src = "img/xz.png";
    }
}

function lostFocus() {
    if (area == 1) {
        removeClass($("nav1_" + i), "nav1_focus");
    } else if (area == 2) {
        removeClass($("nav2_" + j), "nav2_focus");
    } else if (area == 3) {
        $("nav3_0").src = "img/wxz.png";
    }
}

function keyMove(_dirction) {
    dirction = _dirction;
    lostFocus();
    if (_dirction == 1) {//上
        if (area == 2) {
            if (j > 0) {
                j--;
            } else if (j == 0) {
                initArea(1);
            }
        } else if (area == 3) {
            initArea(2);
        }
    } else if (_dirction == 2) {//下
        if (area == 1) {
            initArea(2);
        } else if (area == 2) {
            if (j < 4) {
                j++;
            } else if (j == 4) {
                initArea(3);
            }
        }
    } else if (_dirction == 3) {// 左
        if (area == 1) {
            i == 0 ? i = 1 : i = 0;
        }
    } else if (_dirction == 4) {// 4 右
        if (area == 1) {
            i == 0 ? i = 1 : i = 0;
        }
    } else if (_dirction == 5) {//
        goback();
    }
    onFocus();
}

function doSelect() {
    if (area == 1) {
        if (i == 0) {
            window.location.href = rtsy;
        } else if (i == 1) {
            window.location.href = rttj;
        }
    } else if (area == 2) {
        if (j == 0) {
            setBackID();
            ajax_base("http://21.254.5.190/UTLService/UIL/Trace/Handler.ashx", "stbid=" + getSTBID() + "&is_tw=true&cid=" + lmID[j + 2] + "&ctitle=&mcode=2", function (data) {
                console.log(data);
            }, true);
            window.location.href = nav2Url[j] + "?id=" + lmID[j + 2] + "&returnUrl=" + encodeURIComponent(location.href);
        } else if (j == 1) {
            setBackID();
            ajax_base("http://21.254.5.190/UTLService/UIL/Trace/Handler.ashx", "stbid=" + getSTBID() + "&is_tw=true&cid=" + lmID[j + 2] + "&ctitle=&mcode=2", function (data) {
                console.log(data);
            }, true);
            window.location.href = nav2Url[j] + "?id=" + lmID[j + 2] + "&returnUrl=" + encodeURIComponent(location.href);
        } else if (j == 2) {
            setBackID();
            ajax_base("http://21.254.5.190/UTLService/UIL/Trace/Handler.ashx", "stbid=" + getSTBID() + "&is_tw=true&cid=" + lmID[j + 2] + "&ctitle=&mcode=2", function (data) {
                console.log(data);
            }, true);
            window.location.href = nav2Url[j] + "?id=" + lmID[j + 2] + "&yzid=" + lmID[1] + "&returnUrl=" + encodeURIComponent(location.href);
        } else if (j == 3) {
            window.location.href = mlxc_Url;
        } else if (j == 4) {
            setBackID();
            var url = !vid ? '../lmjs.html?returnUrl=' + encodeURIComponent(location.href) : '../qltx/index.htm?id=' + vid + '&returnUrl=' + encodeURIComponent(location.href);
            window.location.href = url;
        }
    } else if (area == 3) {
        goback();
    }
}
