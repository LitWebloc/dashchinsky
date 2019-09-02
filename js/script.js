"use strict";
//вставить header
let headerJS = `<header>
        <div class="header-icon mob menuIcon">
            <a href="#!" class="waves-effect"><i class="material-icons">sort</i></a>
        </div>
        <div class="search pc">

            <form role="search" method="get" class="search-form" action="">

                <button type="submit" class="search-submit"><span class="screen-reader-text-search"><i class="material-icons">search</i></span></button>
                <input type="search" class="search-field" placeholder="Поиск…" value="" name="s" id="s">
            </form>
        </div>
        <div class="header-icon">
            <span class="waves-effect mob"><i class="material-icons">search</i></span>
            <span id="notifications" class="waves-effect"><i class="material-icons">
                    <span class="circle"></span>notifications_none</i></span>
            <span id="info" class="waves-effect"><i class="material-icons">help_outline</i></span>
            <a href="#send" data-target="send" class="modal-trigger waves-effect"><i class="material-icons">mail_outline</i></a>
        </div>
        <div class="WinScrool"></div>
    </header>
    <aside class="sidenav-main">
        <div class="logo">
            <a href="#!">Dashchinskiy</a>
        </div>
        <div class="nav">
            <ul class="ul-nav">
                <li class="waves-effect waves-light active"><a href="#!">Главная</a></li>
                <li class="waves-effect waves-light"><a href="#!">Идеалогия</a></li>
                <li class="waves-effect waves-light"><a href="#!">Наша команда</a></li>
                <li class="waves-effect waves-light"><a href="#!">Обо мне</a></li>
                <li class="waves-effect waves-light"><a href="#!">История</a></li>
            </ul>
            <div class="hr"></div>
            <ul class="ul-nav">
                <li class="waves-effect waves-light"><a href="#!">Курсы</a></li>
                <li class="waves-effect waves-light"><a href="#!">Клуб</a></li>
            </ul>
            <div class="hr"></div>
            <ul class="ul-nav">
                <li class="waves-effect waves-light"><a href="#!">Кейсы</a></li>
                <li class="waves-effect waves-light"><a href="#!">Аудиты</a></li>
                <li class="waves-effect waves-light"><a href="#!">Отзывы</a></li>
            </ul>
        </div>
        <div class="botton">
            <small>Качественно, быстро и классно! Качественно, Качественно, быстро и классно!</small>
            <div class="socials">
                <a href="#"><img src="icon/inst.svg" alt=""></a>
                <a href="#"><img src="icon/fb.svg" alt=""></a>
                <a href=""><img src="icon/vk.svg" alt=""></a>
                <a href="#"><img src="icon/youtube.svg" alt=""></a>
                <a href="#"><img src="icon/twiter.svg" alt=""></a>
                <a href="#"><img src="icon/telegram.svg" alt=""></a>
                <a href="#"><img src="icon/od.svg" alt=""></a>
            </div>
        </div>
    </aside>`;
$("#headerJS").before(headerJS);
$("#headerJS").remove();
//вставить header //
//вставить footer
let footerJS= `
    <footer class="col s12">
        <p>2019</p>
    </footer>
    <div id="send" class="modal">
        <div class="modal-content">
            <form action="">
                <div class="row">
                    <div class="input-field col s12">
                        <b class="h4"><i class="material-icons">mail_outline</i><span>Форма для связи с нами</span></b>
                    </div>
                    <div class="input-field col s12">
                        <input id="first_name" type="text" class="validate">
                        <label for="first_name">Имя</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="last_name" type="email" class="validate">
                        <label for="last_name">Email</label>
                        <span class="helper-text" data-error="Некоректный" data-success="Всё хорошо"></span>
                    </div>
                    <div class="input-field col s12">
                        <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                        <label for="textarea2">Комментарий</label>
                    </div>
                    <div class="input-field col s12">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Отправить
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="notifications none">
        <ul class="collection">
            <li class="collection-item avatar">
                <a href="#!">
                    <img src="img/yuna.jpg" alt="" class="circle">
                    <span class="title">Title</span>
                    <p>First Line <br>
                        Second Line
                    </p>
                </a>
                <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
            </li>
            <li class="collection-item avatar">
                <a href="#!">
                    <i class="material-icons circle">folder</i>
                    <span class="title">Title file</span>
                    <p>First Line</p>
                </a>
                <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
            </li>
            <li class="collection-item avatar">
                <a href="#!">
                    <i class="material-icons circle green">insert_chart</i>
                    <span class="title">Title song</span>
                    <p>Second Line</p>
                </a>
                <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
            </li>
            <li class="collection-item avatar">
                <a href="#!">
                    <i class="material-icons circle red">play_arrow</i>
                    <span class="title">Title play</span>
                    <p>First Line <br>
                        Second Line
                    </p>
                </a>
                <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
            </li>
        </ul>
    </div>
    <div class="info none">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab libero saepe quasi impedit dignissimos harum ad nemo soluta. Qui similique earum quisquam deserunt id, officia dolore dicta reiciendis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab libero saepe quasi impedit dignissimos harum ad nemo soluta. Qui similique earum quisquam deserunt id, officia dolore dicta reiciendis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab libero saepe quasi impedit dignissimos harum ad nemo soluta. Qui similique earum quisquam deserunt id, officia dolore dicta reiciendis!</p>
    </div>
    <div class="bg_black none"></div>`;
$("#footerJS").before(footerJS);
$("#footerJS").remove();
//вставить header //

$(".secondary-content").click(function () {
    console.log();
    if (!localStorage["notifications"])
        localStorage["notifications"] = " ";

    if (localStorage["notifications"] == " ") {
        localStorage["notifications"] = $(this).closest(".collection-item").children().children(".title").text();
    } else {
        localStorage["notifications"] = localStorage["notifications"] + "%%%" + $(this).closest(".collection-item").children().children(".title").text();
    }
    $(this).closest(".collection-item").remove();
    notificationsNull();
});

function notificationsNull() {
    if (localStorage["notifications"]) {
        let notification = localStorage["notifications"].split("%%%");
        $(".notifications li").each(function () {
            for (let i = 0; i < notification.length; i++) {
                if ($(this).children().children(".title").text() == notification[i]) {
                    $(this).remove();
                }
            }
        });
        if ($(".notifications ul li").length == 0) {
            $(".notifications").html("<div class=\"notificationsNull\">Список пуст</div>");
        }
    }
}

$(window).load(function () {
    $(".preloader").css({
        "bottom": "100%"
    });
});
$(window).scroll(WinScroll);

function WinScroll() {
    let scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $("#WinScrool").remove();
    $('<style type="text/css" id="WinScrool"></style>').html('.WinScrool {width: ' + scrollPercent + '%}').appendTo('head');
}
function sliderTag(){
    if ($(window).width() <= '995'){
        console.log(true);
    }else{
        let swiper = new Swiper('.tag-post', {
          slidesPerView: 'auto',
          spaceBetween: 3,
          freeMode: true,
        });
    }
}
$(document).ready(function () {
    $('.modal').modal();
    $('input#input_text, textarea#textarea2').characterCounter();
    hideP();
    
    sliderTag();
    $(window).resize(function() {
        console.log("Разрешение экрана было изменено")
    });
});


$('.hide-text').scroll(hideP);

function hideP() {
    let hht = $(".hide-text").height(),
        hhtp = $(".hide-text p").height(),
        procent = 50 * $(".hide-text").scrollTop() / ($(".hide-text p").height() - $(".hide-text").height());
    if (hht < hhtp) {
        $(".hide-text").parent(".body").addClass("hide-p");
        $("#hide-p").remove();
        $('<style type="text/css" id="hide-p"></style>').html('.body.hide-p:before {height: calc(50px - ' + procent + 'px)}').appendTo('head');
    }
}
if ($(window).width < 980) {
    $(".search").addClass("pc");
}

$(".header-icon .waves-effect.mob").on("click", function () {
    $(".search").hasClass("pc") ? $(".search").removeClass("pc") : $(".search").addClass("pc");
});
$(".menuIcon").click(function () {
    $(".sidenav-main").addClass("open");
    $(".bg_black").removeClass("none");
});
$("#notifications").click(function () {
    $(".notifications").removeClass("none");
    notificationsNull();
});
$("#info").click(function () {
    $(".info").removeClass("none");
});
$(".bg_black").click(function () {
    if ($(".bg_black").hasClass("none")) {
        $(".bg_black").removeClass("none");
    } else {
        $(".bg_black").addClass("none");
    }
});
$(".checkСonsent").change(function () {
    if ($(this).prop("checked")) {
        $(".subscribe").removeAttr("disabled");
    } else {
        $(".subscribe").attr("disabled", true);
    }
});
$(document).mouseup(function (e) {
    let container = $(".sidenav-main");
    if (container.has(e.target).length === 0) {
        $(".sidenav-main").removeClass("open");
    }
    container = $(".search");
    if (container.has(e.target).length === 0) {
        $(".search").addClass("pc");
    }
    container = $(".notifications");
    if (container.has(e.target).length === 0) {
        $(".notifications").addClass("none");
    }
    container = $(".info");
    if (container.has(e.target).length === 0) {
        $(".info").addClass("none");
    }
    container = $(".video-frame.open");
    if (container.has(e.target).length === 0) {
        $(".video-frame.open .modal-content").html(' ');
    }
});

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
$('.video-m').click(function(){
    const hrefFrame = $(this).data('href');
    $('.video-frame .modal-content').html(`<iframe width="100%" height="500" src="https://www.youtube.com/embed/${hrefFrame}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
});


let sidebar = new StickySidebar('#secondary', {
    innerWrapperSelector: '#search-2',
    topSpacing: 0,
    bottomSpacing: 0
});