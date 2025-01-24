/*!
 * lightgallery | 2.8.2 | November 28th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(e){for(var r,o=1,a=arguments.length;o<a;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)};function l(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var o=Array(t),a=0,e=0;e<r;e++)for(var n=arguments[e],i=0,p=n.length;i<p;i++,a++)o[a]=n[i];return o}var d={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",pinterest:!0,pinterestDropdownText:"Pinterest",additionalShareOptions:[],sharePluginStrings:{share:"Share"}};function h(t){var e="//www.facebook.com/sharer/sharer.php?u=";return e+encodeURIComponent(t.facebookShareUrl||window.location.href)}function g(t){var e="//twitter.com/intent/tweet?text=",r=encodeURIComponent(t.twitterShareUrl||window.location.href),o=t.tweetText;return e+o+"&url="+r}function c(t){var e="http://www.pinterest.com/pin/create/button/?url=",r=t.pinterestText,o=encodeURIComponent(t.src),a=encodeURIComponent(t.pinterestShareUrl||window.location.href);return e+a+"&media="+o+"&description="+r}var f={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"},u=function(){function t(e){return this.shareOptions=[],this.core=e,this.settings=s(s({},d),this.core.settings),this}return t.prototype.init=function(){this.settings.share&&(this.shareOptions=l(this.getDefaultShareOptions(),this.settings.additionalShareOptions),this.setLgShareMarkup(),this.core.outer.find(".lg-share .lg-dropdown").append(this.getShareListHtml()),this.core.LGel.on(f.afterSlide+".share",this.onAfterSlide.bind(this)))},t.prototype.getShareListHtml=function(){var e="";return this.shareOptions.forEach(function(r){e+=r.dropdownHTML}),e},t.prototype.setLgShareMarkup=function(){var e=this;this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.sharePluginStrings.share+`" aria-haspopup="true" aria-expanded="false" class="lg-share lg-icon">
                <ul class="lg-dropdown" style="position: absolute;"></ul></button>`),this.core.outer.append('<div class="lg-dropdown-overlay"></div>');var r=this.core.outer.find(".lg-share");r.first().on("click.lg",function(){e.core.outer.toggleClass("lg-dropdown-active"),e.core.outer.hasClass("lg-dropdown-active")?e.core.outer.attr("aria-expanded",!0):e.core.outer.attr("aria-expanded",!1)}),this.core.outer.find(".lg-dropdown-overlay").first().on("click.lg",function(){e.core.outer.removeClass("lg-dropdown-active"),e.core.outer.attr("aria-expanded",!1)})},t.prototype.onAfterSlide=function(e){var r=this,o=e.detail.index,a=this.core.galleryItems[o];setTimeout(function(){r.shareOptions.forEach(function(n){var i=n.selector;r.core.outer.find(i).attr("href",n.generateLink(a))})},100)},t.prototype.getShareListItemHTML=function(e,r){return'<li><a class="lg-share-'+e+'" rel="noopener" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+r+"</span></a></li>"},t.prototype.getDefaultShareOptions=function(){return l(this.settings.facebook?[{type:"facebook",generateLink:h,dropdownHTML:this.getShareListItemHTML("facebook",this.settings.facebookDropdownText),selector:".lg-share-facebook"}]:[],this.settings.twitter?[{type:"twitter",generateLink:g,dropdownHTML:this.getShareListItemHTML("twitter",this.settings.twitterDropdownText),selector:".lg-share-twitter"}]:[],this.settings.pinterest?[{type:"pinterest",generateLink:c,dropdownHTML:this.getShareListItemHTML("pinterest",this.settings.pinterestDropdownText),selector:".lg-share-pinterest"}]:[])},t.prototype.destroy=function(){this.core.outer.find(".lg-dropdown-overlay").remove(),this.core.outer.find(".lg-share").remove(),this.core.LGel.off(".lg.share"),this.core.LGel.off(".share")},t}();export{u as default};
