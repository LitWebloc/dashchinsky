/*
Данный код только для главной страницы, на вывод курсов.
Его принцип - проверка есть ли в localstorage какие либо избранные курсы.
Удаление и добавление происходит по двум переменным - заголовок и ссылка на страницу
*/
//Проверяет на существование localstorage для курсов, если его нет, то добавляет его и пишет что курсы не выбраны(главная страница)
if (!localStorage["courses"]) {
    localStorage["courses"] = " ";
    $(".coursesBlock").append("<b style=\"color:#E5E5E5; font-size: 24px;\">Курсы не добавленны в избранное</b>");
} else {

//Проверяет на наличии избранных курсов из localstorage, в ячейке на главной странице
    if (localStorage["courses"] == " ") {
        $(".coursesBlock").append("<b style=\"color:#E5E5E5; font-size: 24px;\">Курсы не добавленны в избранное</b>");
    }
    let pokaz = [];
    pokaz = localStorage["courses"].split("%%%");
    for (let i = 0; i < pokaz.length; i++)
        pokaz[i] = pokaz[i].split("%Q%")

    pokaz = pokaz.slice(0, -1);
//После проверки какие страницы добавлены в избранные, выводит списки с курсами и ссылка на них
    for (let i = 0; i < pokaz.length; i++) {
        $(".coursesBlock").append('<li class="flex courses"><label><input onchange="locc(this);" class="checkCourses" type="checkbox" /><span class="textCourses">' + pokaz[i][1] + '</span><a href="' + pokaz[i][0] + '" class="linkCourses"><i class="material-icons">link</i></a></label></li>');
        $(".courses").each(function () {
            $('.textCourses:contains("' + pokaz[i][1] + '")').siblings("input").prop("checked", true);
            if (pokaz[i].indexOf(String($(this).find(".textCourses").text())) == 0) {
                for (let i2 = 0; i2 < pokaz[i].length; i2++)
                    $('.textCourses:contains("' + pokaz[i2][1] + '")').siblings("input").prop("checked", true);
            }
        });
    }
    if ($(".coursesBlock li").length == 0) {
        $(".footer .right").css("display", "none");
    } else {
        $(".footer .number .read").text($(".coursesBlock li").length);
    }
    if ($(".footer .number .read").text() == $(".footer .number .quantity").text())
        $(".footer .right .material-icons").addClass("green-text");
}

//Тут функция самого добавления и убирания курса из избранных на главной странице ток. Принцип относительно простой, его суть в том, что проверяет на наличие чека в кликнутом чеке, если нет, то он удаляет из localstorage данный курс.
function locc(t) {
    let coursesBlock = [],
        spanTEXT = $(".footer .number .read").text();
    console.log($(t).closest(".coursesBlock").children().length);

    if ($(t).prop("checked") == false) {
        $(".footer .number .read").text(+spanTEXT - 1)
    } else {
        $(".footer .number .read").text(+spanTEXT + 1)
    }
    console.log(coursesBlock);
    if ($(".footer .number .read").text() == $(".footer .number .quantity").text()) {
        $(".footer .right .material-icons").addClass("green-text");
    } else {
        $(".footer .right .material-icons").removeClass("green-text");
    }
    if (!localStorage["courses"]) {
        localStorage["courses"] = " ";
    }
    console.log($(t).siblings(".textCourses").text())
    let delement = [$(t).siblings(".linkCourses").attr("href"), $(t).siblings(".textCourses").text()],
        zamen = delement[0] + "%Q%" + delement[1] + "%%%";

    if ($(t).prop("checked")) {
        localStorage["courses"] = localStorage["courses"].replace(new RegExp(zamen, 'g'), ' ');
        localStorage["courses"] = zamen + localStorage["courses"];
    } else {
        localStorage["courses"] = localStorage["courses"].replace(new RegExp(zamen, 'g'), '');
    }
}
