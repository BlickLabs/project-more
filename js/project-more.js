function changeNavSt(){window.scrollY>20?siteNavbar.classList.remove("active"):siteNavbar.classList.add("active")}function showTab(e,r){e.classList.add("section_services-tablink");var o,a,t;for(t=document.getElementsByClassName("section_services-tablink"),a=document.getElementsByClassName("section_services-tabcontent-wrapper"),o=0;o<a.length;o++)a[o].style.display="none";for(o=0;o<t.length;o++)t[o].classList.remove("open-tab");document.getElementById(r).style.display="flex",e.classList.add("open-tab")}!function(){$.validator.setDefaults({invalidHandler:function(e,r){var o=$(this);o.find(".form-message").removeClass(o.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var r=$(e).serialize(),o=$(e).find("select, input, textarea, button").not("[disabled]"),a=$(e).find(".form-message"),t=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),n=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),i=function(e){var r=e?t:n;o.removeAttr("disabled"),a.removeClass(e?"error":"success"),a.addClass(e?"success":"error"),a.html(r)};o.attr("disabled","disabled"),a.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:r}).done(function(r){i(1===parseInt(r)),e.reset()}).fail(function(){i(!1)}).always(function(){o.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}}),$.validator.addMethod("regex",function(e,r,o){return o.constructor!=RegExp?o=new RegExp(o):o.global&&(o.lastIndex=0),this.optional(r)||o.test(e)},"Por favor escribe un campo válido")}(),$('form[name="form-careers-1"]').validate({nameCareers:"required",phoneCareers:"required",openingCareers:"required",linkedinCareers:"required",emailCareers:{required:!0,email:!0},messages:{emailCareers:"Por favor introduce un correo válido.",openingCareers:"Selecciona una opción"},submitHandler:function(e){var r=$('form[name="form-careers-1"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/careers1/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="form-careers-1"]')[0].reset())})},invalidHandler:function(e,r){var o=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información, tienes "+o+" errores.")}}),$('form[name="form-careers-2"]').validate({LiCareers:"required",portfolioCareers:"required",githubCareers:"required",urlCareers:"required",whyMoreCareers:"required",submitHandler:function(e){var r=$('form[name="form-careers-2"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/careers2/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="form-careers-1"]')[0].reset())})},invalidHandler:function(e,r){var o=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información, tienes "+o+" errores.")}}),function(){"use strict";if("/"===window.location.pathname||"/index.html"===window.location.pathname||"/project-more/index.html"===window.location.pathname||"/careers.html"===window.location.pathname||"/project-more/careers.html"===window.location.pathname||"/referrals.html"===window.location.pathname||"/project-more/referrals.html"===window.location.pathname){var e,r=$("input").not("#form-contact-more_desktop input");e=function(e){$("#"+e).change(function(){$('label[for="'+e+'"]').text($("#"+e).val()),$("#"+e).addClass("turn-off")})},r.map(function(r,o){e(o.id)})}}();var siteNavbar=document.querySelector(".site-navbar");"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-more/index.html"!==window.location.pathname&&"/project-more/"!==window.location.pathname||(window.addEventListener("scroll",changeNavSt),changeNavSt()),$(".section_form-carousel").slick({dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,draggable:!1,variableWidth:!1,focusOnSelect:!1}),$(function(){$(".section_form-carousel-next").on("click",function(){$(".section_form-carousel").slick("slickNext")}),$(".section_form-carousel-prev").on("click",function(){$(".section_form-carousel").slick("slickPrev")})}),$(".section_form-carousel-next").eq(0).on("click",function(){var e=$("#inputName").val();$("#nameText").text(e)}),$(".section_form-carousel-next").eq(1).on("click",function(){var e=$("#inputEmail").val();$("#emailText").text(e)}),$('form[name="form-contact-more_desktop"]').validate({submitHandler:function(e){var r=$('form[name="form-contact-more_desktop"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="form-contact-more_desktop"]')[0].reset())})},invalidHandler:function(e,r){var o=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información, tienes "+o+" errores.")},rules:{name:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},message:{required:!0},email:{required:!0,email:!0},messages:{name:{required:"Por favor introduce tu nombre ",regex:"Por favor introduce un nombre válido"},message:"Por favor introduce tu mensaje.",email:"Por favor introduce un correo valido."}}});var captureTabandEnter=function(e){if(13===e.which||9===e.which){var r=$('form[name="form-contact-more_desktop"]').validate();e.preventDefault(),r.element(this)&&$(".section_form-carousel").slick("slickNext"),"inputName"===this.id&&$("#nameText").text($(this).val()),"inputEmail"===this.id&&$("#emailText").text($(this).val()),"inputMessage"===this.id&&$('form[name="form-contact-more_desktop"]').submit()}},elementsInput=$('form[name="form-contact-more_desktop"] input');elementsInput.on("keydown",captureTabandEnter),$('form[name="form-contact-more_mobile"]').validate({submitHandler:function(e){var r=$('form[name="form-contact-more_mobile"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="form-contact-more_mobile"]')[0].reset())})},invalidHandler:function(e,r){var o=($('form[name="form-contact-more_mobile"]').serialize(),r.numberOfInvalids());alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+o+" errores.")},rules:{name:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},message:{required:!0},email:{required:!0,email:!0},messages:{name:{required:"Por favor introduce tu nombre ",regex:"Por favor introduce un nombre válido"},message:"Por favor introduce tu mensaje.",email:"Por favor introduce un correo valido."}}}),$('form[name="form-contact-more_contact"]').validate({submitHandler:function(e){var r=$('form[name="form-contact-more_contact"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="form-contact-more_contact"]')[0].reset())})},invalidHandler:function(e,r){var o=($('form[name="form-contact-more_contact"]').serialize(),r.numberOfInvalids());alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+o+" errores.")},rules:{name:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},message:{required:!0},email:{required:!0,email:!0},messages:{name:{required:"Por favor introduce tu nombre ",regex:"Por favor introduce un nombre válido"},message:"Por favor introduce tu mensaje.",email:"Por favor introduce un correo valido."}}}),function(){"use strict";$(".section_projects-slick-firstrow").slick({dots:!1,infinite:!0,cssEase:"linear",autoplaySpeed:0,speed:5e3,slidesToShow:2,centerMode:!1,variableWidth:!0,adaptiveHeight:!0,arrows:!1,autoplay:!0}),$(".section_projects-slick-secondrow").slick({dots:!1,infinite:!0,cssEase:"linear",autoplaySpeed:0,speed:6e3,slidesToShow:2,centerMode:!1,variableWidth:!0,adaptiveHeight:!0,arrows:!1,autoplay:!0})}(),function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function r(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var o=window.matchMedia("(max-width: 876px)");o.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(r)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),o.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(r))})}(),$(document).on("touchstart click mouseover","label.error",function(e){$("#"+e.target.htmlFor).removeClass("turn-off"),$("#"+e.target.htmlFor).addClass("turn-on")}),$('form[name="form-quote"]').validate({submitHandler:function(e){var r=$('form[name="form-quote"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/quote/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="form-quote"]')[0].reset())})},invalidHandler:function(e,r){var o=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información, tienes "+o+" errores.")},rules:{nameQuote:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},phoneQuote:{required:!0},projectTypeQuote:{required:!0},linkedinCareers:{required:!0},projectNameQuote:{required:!0},budgetQuote:{required:!0},detailsQuote:{required:!0},emailQuote:{required:!0,email:!0},messages:{name:{required:"Por favor introduce tu nombre ",regex:"Por favor introduce un nombre válido"},email:"Por favor introduce un correo valido."}}}),$('form[name="form-referrals"]').validate({submitHandler:function(e){var r=$('form[name="form-referrals"]').serialize();$.ajax({url:"http://integrations.blick.mx/more/contact/referrals/",method:"POST",data:r}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="form-careers-1"]')[0].reset())})},invalidHandler:function(e,r){var o=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información, tienes "+o+" errores.")},rules:{nameReferrals:{required:!0,regex:/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/},messageReferrals:{required:!0},mailReferrals:{required:!0,email:!0},phoneReferrals:{required:!0},messages:{mailReferrals:"Por favor introduce un correo valido."}}}),function(){"use strict";$(".careers-view__carousel-wrapper").slick({dots:!0,dotsClass:"careers-view__carousel-dots",speed:500,draggable:!0,focusOnSelect:!1,fade:!0,cssEase:"linear",prevArrow:"",nextArrow:'<div class="careers-view__carousel-arrow careers-view__nextArrow"><img src="img/icons/np-right-arrow.png" alt="next arrow"></div>'})}(),$("a.services_view-option-link").click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-65},800)});