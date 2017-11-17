function changeNavSt(){window.scrollY>20?siteNavbar.classList.remove("active"):siteNavbar.classList.add("active")}function showTab(e,r){e.classList.add("section_services-tablink");var t,i,a;for(a=document.getElementsByClassName("section_services-tablink"),i=document.getElementsByClassName("section_services-tabcontent-wrapper"),t=0;t<i.length;t++)i[t].style.display="none";for(t=0;t<a.length;t++)a[t].classList.remove("open-tab");document.getElementById(r).style.display="flex",e.classList.add("open-tab")}!function(){var e,r=window.location.pathname;"/"===r||"/index.html"===r||"/portfolio.html"===r||"/services.html"===r||"/careers.html"===r||"/team.html"===r||"/referrals.html"===r||"/quote.html"===r||"/contact.html"===r?(e="Please fix this field.",$.extend($.validator.messages,{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}."),step:$.validator.format("Please enter a multiple of {0}.")})):"/index-es.html"!==r&&"/portfolio-es.html"!==r&&"/services-es.html"!==r&&"/careers-es.html"!==r&&"/team-es.html"!==r&&"/referrals-es.html"!==r&&"/quote-es.html"!==r&&"/contact-es.html"!==r||(e="Por favor, corrige este campo",$.extend($.validator.messages,{required:"Este campo es obligatorio.",remote:"Por favor, rellena este campo.",email:"Por favor, escribe una dirección de correo válida.",url:"Por favor, escribe una URL válida.",date:"Por favor, escribe una fecha válida.",dateISO:"Por favor, escribe una fecha (ISO) válida.",number:"Por favor, escribe un número válido.",digits:"Por favor, escribe sólo dígitos.",creditcard:"Por favor, escribe un número de tarjeta válido.",equalTo:"Por favor, escribe el mismo valor de nuevo.",extension:"Por favor, escribe un valor con una extensión aceptada.",maxlength:$.validator.format("Por favor, no escribas más de {0} caracteres."),minlength:$.validator.format("Por favor, no escribas menos de {0} caracteres."),rangelength:$.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),range:$.validator.format("Por favor, escribe un valor entre {0} y {1}."),max:$.validator.format("Por favor, escribe un valor menor o igual a {0}."),min:$.validator.format("Por favor, escribe un valor mayor o igual a {0}."),nifES:"Por favor, escribe un NIF válido.",nieES:"Por favor, escribe un NIE válido.",cifES:"Por favor, escribe un CIF válido."})),$.validator.setDefaults({invalidHandler:function(e,r){var t=$(this);t.find(".form-message").removeClass(t.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var r=$(e).serialize(),t=$(e).find("select, input, textarea, button").not("[disabled]"),i=$(e).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Message sent!</span>'),n=$('<i class="fa fa-times-circle"></i><span>an error occurred</span>'),o=function(e){var r=e?a:n;t.removeAttr("disabled"),i.removeClass(e?"error":"success"),i.addClass(e?"success":"error"),i.html(r)};t.attr("disabled","disabled"),i.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:r}).done(function(r){o(1===parseInt(r)),e.reset()}).fail(function(){o(!1)}).always(function(){t.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}}),$.validator.addMethod("regex",function(e,r,t){return t.constructor!=RegExp?t=new RegExp(t):t.global&&(t.lastIndex=0),this.optional(r)||t.test(e)},e),jQuery(function(e){e('input[type="tel"]').mask("(9?9) 9999 9999",{placeholder:""})})}(),$('form[name="form-careers-1"]').validate({openingCareers:"requied",submitHandler:function(e){var r=$('form[name="form-careers-1"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/careers1/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Thanks for contacting us!"),$('form[name="form-careers-1"]')[0].reset())})},invalidHandler:function(e,r){var t=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verify your information, you have "+t+" errors.")},rules:{nameCareers:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},openingCareers:{required:!0},emailCareers:{required:!0,email:!0},phoneCareers:{required:!0}}}),$('form[name="form-careers-2"]').validate({whyMoreCareers:"required",submitHandler:function(e){var r=$('form[name="form-careers-2"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/careers2/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Thanks for contacting us!"),$('form[name="form-careers-1"]')[0].reset())})},invalidHandler:function(e,r){var t=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verify your information, you have "+t+" errors.")}}),function(){"use strict";if("/"===window.location.pathname||"/index.html"===window.location.pathname||"/project-more/index.html"===window.location.pathname||"/careers.html"===window.location.pathname||"/project-more/careers.html"===window.location.pathname||"/referrals.html"===window.location.pathname||"/project-more/referrals.html"===window.location.pathname){var e,r=$("input").not("#form-contact-more_desktop input");e=function(e){$("#"+e).change(function(){$('label[for="'+e+'"]').text($("#"+e).val()),$("#"+e).addClass("turn-off")})},r.map(function(r,t){e(t.id)})}}();var siteNavbar=document.querySelector(".site-navbar");"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-more/index.html"!==window.location.pathname&&"/project-more/"!==window.location.pathname&&"/index-es.html"!==window.location.pathname&&"/project-more/index-es.html"!==window.location.pathname||(window.addEventListener("scroll",changeNavSt),changeNavSt()),$(".section_form-carousel").slick({dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,draggable:!1,variableWidth:!1,focusOnSelect:!1}),$(function(){$(".section_form-carousel-next").on("click",function(){$(".section_form-carousel").slick("slickNext")}),$(".section_form-carousel-prev").on("click",function(){$(".section_form-carousel").slick("slickPrev")}),$(".section-form-title").on("click",function(){$(".section_form-carousel").slick("slickNext")})}),$(".section_form-carousel-next").eq(0).on("click",function(){var e=$("#inputName").val();$("#nameText").text(e)}),$(".section_form-carousel-next").eq(1).on("click",function(){var e=$("#inputEmail").val();$("#emailText").text(e)});var currentFile=window.location.pathname;$('form[name="form-contact-more_desktop"]').validate({submitHandler:function(e){var r=$('form[name="form-contact-more_desktop"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.success("Thanks for contacting us!"):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.success("¡Gracias por contactarnos!"),$('form[name="form-contact-more_desktop"]')[0].reset())})},invalidHandler:function(e,r){var t=r.numberOfInvalids();alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.error("Verify your information, you have "+t+" errors."):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.error("Verifica tu infomación, tienes "+t+" errores.")},rules:{name:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},message:{required:!0},email:{required:!0,email:!0}}});var captureTabandEnter=function(e){if(13===e.which||9===e.which){var r=$('form[name="form-contact-more_desktop"]').validate();e.preventDefault(),r.element(this)&&$(".section_form-carousel").slick("slickNext"),"inputName"===this.id&&$("#nameText").text($(this).val()),"inputEmail"===this.id&&$("#emailText").text($(this).val()),"inputMessage"===this.id&&$('form[name="form-contact-more_desktop"]').submit()}},elementsInput=$('form[name="form-contact-more_desktop"] input');elementsInput.on("keydown",captureTabandEnter),$('form[name="form-contact-more_mobile"]').validate({submitHandler:function(e){var r=$('form[name="form-contact-more_mobile"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.success("Thanks for contacting us!"):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.success("¡Gracias por contactarnos!"),$('form[name="form-contact-more_mobile"]')[0].reset())})},invalidHandler:function(e,r){var t=($('form[name="form-contact-more_mobile"]').serialize(),r.numberOfInvalids());alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.error("Verify your information, you have "+t+" errors."):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.error("Verifica tu infomación, tienes "+t+" errores.")},rules:{name:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},message:{required:!0},email:{required:!0,email:!0}}}),$('form[name="form-contact-more_contact"]').validate({submitHandler:function(e){var r=$('form[name="form-contact-more_contact"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.success("Thanks for contacting us!"):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.success("¡Gracias por contactarnos!"),$('form[name="form-contact-more_contact"]')[0].reset())})},invalidHandler:function(e,r){var t=($('form[name="form-contact-more_contact"]').serialize(),r.numberOfInvalids());alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.error("Verify your information, you have "+t+" errors."):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.error("Verifica tu infomación, tienes "+t+" errores.")},rules:{name:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},message:{required:!0},email:{required:!0,email:!0}}}),function(){"use strict";$(".section_projects-slick-firstrow").slick({dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,variableWidth:!0,arrows:!1,autoplay:!1}),$(".section_projects-slick-secondrow").slick({dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,variableWidth:!0,arrows:!1,autoplay:!1})}(),$(function(){$(".section_projects-carousel-next").on("click",function(){$(".section_projects-slick-firstrow").slick("slickNext")}),$(".section_projects-carousel-prev").on("click",function(){$(".section_projects-slick-firstrow").slick("slickPrev")}),$(".section_projects-carousel-next").on("click",function(){$(".section_projects-slick-secondrow").slick("slickNext")}),$(".section_projects-carousel-prev").on("click",function(){$(".section_projects-slick-secondrow").slick("slickPrev")})});var langMenu=document.querySelector(".lang_menu_desktop"),langMenuMobile=document.querySelector(".lang_mobile");langMenu.addEventListener("click",function(){langMenu.classList.toggle("active"),document.querySelector(".cover-lang_menu-d").classList.toggle("coverOn")}),langMenuMobile.addEventListener("click",function(){langMenuMobile.classList.toggle("active"),document.querySelector(".cover-lang_menu-m").classList.toggle("coverOn")}),function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function r(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var t=window.matchMedia("(max-width: 876px)");t.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(r)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),t.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(r))})}(),$(document).on("touchstart click mouseover","label.error",function(e){$("#"+e.target.htmlFor).removeClass("turn-off"),$("#"+e.target.htmlFor).addClass("turn-on")});var currentFile=window.location.pathname;$('form[name="form-quote"]').validate({budgetQuote:"required",submitHandler:function(e){var r=$('form[name="form-quote"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/quote/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.success("Thanks for contacting us!"):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.success("¡Gracias por contactarnos!"),$('form[name="form-quote"]')[0].reset())})},invalidHandler:function(e,r){var t=r.numberOfInvalids();alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.error("Verify your information, you have "+t+" errors."):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.error("Verifica tu infomación, tienes "+t+" errores.")},rules:{nameQuote:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},phoneQuote:{required:!0},projectTypeQuote:{required:!0},linkedinCareers:{required:!0},projectNameQuote:{required:!0},budgetQuote:{required:!0},detailsQuote:{required:!0},emailQuote:{required:!0,email:!0}}});var currentFile=window.location.pathname;$('form[name="form-referrals"]').validate({submitHandler:function(e){var r=$('form[name="form-referrals"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/referrals/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.success("Thanks for contacting us!"):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.success("¡Gracias por contactarnos!"),$('form[name="form-referrals"]')[0].reset())})},invalidHandler:function(e,r){var t=r.numberOfInvalids();alertify.logPosition("bottom right"),"/"===currentFile||"/index.html"===currentFile||"/portfolio.html"===currentFile||"/services.html"===currentFile||"/careers.html"===currentFile||"/team.html"===currentFile||"/referrals.html"===currentFile||"/quote.html"===currentFile||"/contact.html"===currentFile?alertify.error("Verify your information, you have "+t+" errors."):"/index-es.html"!==currentFile&&"/portfolio-es.html"!==currentFile&&"/services-es.html"!==currentFile&&"/careers-es.html"!==currentFile&&"/team-es.html"!==currentFile&&"/referrals-es.html"!==currentFile&&"/quote-es.html"!==currentFile&&"/contact-es.html"!==currentFile||alertify.error("Verifica tu infomación, tienes "+t+" errores.")},rules:{nameReferrals:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},messageReferrals:{required:!0},mailReferrals:{required:!0,email:!0},phoneReferrals:{required:!0}}}),function(){"use strict";$(".careers-view__carousel-wrapper").slick({dots:!0,dotsClass:"careers-view__carousel-dots",speed:500,draggable:!0,focusOnSelect:!1,fade:!0,cssEase:"linear",prevArrow:"",nextArrow:'<div class="careers-view__carousel-arrow careers-view__nextArrow"><img src="img/icons/np-right-arrow.png" alt="next arrow"></div>'})}(),$("a.services_view-option-link").click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-95},800)});