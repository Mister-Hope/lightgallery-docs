import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c,b as n,d as e,a as i,e as a}from"./app-f1614689.js";const r={},d=a('<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;.theme-default-content :not(a) &gt; img:not([no-view])&quot;</code></li></ul><p>图片选择器</p><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[&quot;pager&quot;, &quot;share&quot;, &quot;zoom&quot;]</code></li></ul><p>想要启用的 Light Gallery 插件。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>可选值:</p><ul><li><code>&quot;autoplay&quot;</code>: 自动播放</li><li><code>&quot;fullscreen&quot;</code>: 全屏</li><li><code>&quot;pager&quot;</code>: 分页</li><li><code>&quot;thumbnail&quot;</code>: 缩略图</li><li><code>&quot;rotate&quot;</code>: 旋转</li><li><code>&quot;share&quot;</code>: 分享</li><li><code>&quot;zoom&quot;</code>: 缩放</li></ul></div><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>800</code></li></ul><p>注册复制按钮的延时，单位 ms。</p><p>如果你使用的主题有切换动画，建议配置此选项为 <code>切换动画时长 + 200</code></p><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h2><h3 id="definelightgalleryconfig" tabindex="-1"><a class="header-anchor" href="#definelightgalleryconfig" aria-hidden="true">#</a> defineLightGalleryConfig</h3>',14),p={href:"https://www.lightgalleryjs.com/docs/settings/",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineLightGalleryConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-lightgallery/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineLightGalleryConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在此设置 lightgallery 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1);function h(g,f){const t=s("ExternalLinkIcon");return l(),c("div",null,[d,n("p",null,[e("传递给 "),n("a",p,[e("lightgallery"),i(t)]),e(" 的额外选项")]),u])}const q=o(r,[["render",h],["__file","config.html.vue"]]);export{q as default};