import{_ as l,a as r,b as c}from"./3-9279dc93.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as u,c as d,f as t,b as e,d as n,a as s,w as h,e as m}from"./app-f1614689.js";const g={},_=e("p",null,"This plugin will use lightgallery make the pictures in the body of the page enter the preview mode when clicked.",-1),f={class:"hint-container danger"},k=e("p",{class:"hint-container-title"},"LICENSE RESTRICTIONS",-1),v={href:"https://www.lightgalleryjs.com/license/",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"The organization license has no limit for you under non-commercial usage as it supports unlimited developers and unlimited products. You are safe to publish your docs or project with this plugin under ANY License.",-1),w={href:"https://www.gnu.org/licenses/gpl-3.0.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.gnu.org/licenses/gpl-3.0.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.lightgalleryjs.com/license/",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"YOU ARE WARNED!",-1),L=e("h2",{id:"customize-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize-options","aria-hidden":"true"},"#"),n(" Customize Options")],-1),E={href:"https://www.lightgalleryjs.com/",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"lightgallery",-1),I=e("code",null,"defineLightGalleryConfig",-1),T=m(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineLightGalleryConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-lightgallery/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineLightGalleryConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// lightgallery options here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="operation-delay" tabindex="-1"><a class="header-anchor" href="#operation-delay" aria-hidden="true">#</a> Operation Delay</h2><p>If your theme adds animations when switching pages, you may need to delay when lightgallery re-finds page images. You can configure this delay via the <code>delay</code> option, the default value is <code>800</code> (in milliseconds).</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,4),z=e("div",{class:"image-preview"},[e("img",{src:l}),e("img",{src:r}),e("img",{src:c})],-1);function G(P,j){const a=o("ExternalLinkIcon"),i=o("ProjectLink");return u(),d("div",null,[_,t(" more "),e("div",f,[k,e("p",null,[n("Please note that although this plugin release under MIT license, we are currently making this possible with a built-in "),e("a",v,[n("organization license of lightgallery"),s(a)]),n(" of VuePress Theme Hope, and we would like to admit you are a member of our organization if you are using it for non-commercial usage.")]),y,e("p",null,[n("But PLEASE DO AWARE that organizational license can only be used on one product. To use this plugin for commercial usage, since lightgallery is under "),e("a",w,[n("GNU GPL license v3"),s(a)]),n(", you must put your source code under the "),e("a",b,[n("GNU GPL license v3"),s(a)]),n(" license, or consider "),e("a",x,[n("purchasing a license"),s(a)]),n(" to avoid troubles.")]),C,e("p",null,[n("If you are worried about this, please consider using "),s(i,{name:"photo-swipe"},{default:h(()=>[n("vuepress-plugin-photo-swipe")]),_:1}),n(" instead.")])]),L,e("p",null,[n("You can pass options to "),e("a",E,[N,s(a)]),n(" by importing and calling "),I,n(" in client config file:")]),T,t(" markdownlint-disable "),z,t(" markdownlint-restore ")])}const R=p(g,[["render",G],["__file","guide.html.vue"]]);export{R as default};