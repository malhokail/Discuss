/*
 * In-Field Label jQuery Plugin
 * http://fuelyourcoding.com/scripts/infield.html
 *
 * Copyright (c) 2009 Doug Neiner
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 0.1
 */(function(e){e.InFieldLabels=function(t,n,r){var i=this;i.$label=e(t);i.$field=e(n);i.$label.data("InFieldLabels",i);i.showing=!0;i.init=function(){i.options=e.extend({},e.InFieldLabels.defaultOptions,r);i.$label.css("position","absolute");var t=i.$field.position();i.$label.css({left:t.left,top:t.top}).addClass(i.options.labelClass);if(i.$field.val()!=""){i.$label.hide();i.showing=!1}i.$field.focus(function(){i.fadeOnFocus()}).blur(function(){i.checkForEmpty(!0)}).bind("keydown.infieldlabel",function(e){i.hideOnChange(e)}).change(function(e){i.checkForEmpty()}).bind("onPropertyChange",function(){i.checkForEmpty()})};i.fadeOnFocus=function(){i.showing&&i.setOpacity(i.options.fadeOpacity)};i.setOpacity=function(e){i.$label.stop().animate({opacity:e},i.options.fadeDuration);i.showing=e>0};i.checkForEmpty=function(e){if(i.$field.val()==""){i.prepForShow();i.setOpacity(e?1:i.options.fadeOpacity)}else i.setOpacity(0)};i.prepForShow=function(e){if(!i.showing){i.$label.css({opacity:0}).show();i.$field.bind("keydown.infieldlabel",function(e){i.hideOnChange(e)})}};i.hideOnChange=function(e){if(e.keyCode==16||e.keyCode==9)return;if(i.showing){i.$label.hide();i.showing=!1}i.$field.unbind("keydown.infieldlabel")};i.init()};e.InFieldLabels.defaultOptions={fadeOpacity:.5,fadeDuration:300,labelClass:"infield"};e.fn.inFieldLabels=function(t){return this.each(function(){var n=e(this).attr("for");if(!n)return;var r=e("input#"+n+"[type='text'],"+"input#"+n+"[type='password'],"+"textarea#"+n);if(r.length==0)return;new e.InFieldLabels(this,r[0],t)})}})(jQuery);$(function(){$(".masthead-login label").inFieldLabels();$("#F-Toggle-Options a.a-options").click(function(e){e.preventDefault();$("#F-Toggle-List").slideToggle(130)});$("#F-Toggle-List").click(function(e){e.preventDefault();$("#F-Toggle-List").slideToggle(130)});$("#F-Toggle-List a").click(function(e){e.stopPropagation()});$(".tooltip").tooltipster({tooltipTheme:".modx-tipster",position:"left"});$("ul.dis-list li.dis-post").mouseenter(function(){$(this).find(".dis-post-answer-marker p").stop().animate({marginLeft:"-15px",opacity:.99},200).delay(800).animate({opacity:0},500)});$("ul.dis-list li.dis-post").mouseleave(function(){$(this).find(".dis-post-answer-marker p").css("opacity",0).stop().animate({marginLeft:"0px",opacity:0},200)});$(".dis-post-notanswer a span").mouseenter(function(){$(this).closest("div").find("p").stop().animate({marginLeft:"-15px",opacity:.99},100)})});