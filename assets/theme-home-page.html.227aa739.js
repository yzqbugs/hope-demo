import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,a as s,b as n,d as o,w as l,e as c,r as p}from"./app.6fc8b7f7.js";const u={},r=s("h1",{id:"home-page",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#home-page","aria-hidden":"true"},"#"),n(" Home Page")],-1),d=s("code",null,"layout: home",-1),m=s("a",{href:"./frontmatter"},"frontmatter",-1),v=c(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> home
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, this option alone wouldn&#39;t do much. You can add several different pre templated &quot;sections&quot; to the homepage by setting additional other options such as <code>hero</code> and <code>features</code>.</p><h2 id="hero-section" tabindex="-1"><a class="header-anchor" href="#hero-section" aria-hidden="true">#</a> Hero Section</h2><p>The Hero section comes at the top of the homepage. Here&#39;s how you can configure the Hero section.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> home

<span class="token key atrule">hero</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> VuePress
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Vite &amp; Vue powered static site generator.
  <span class="token key atrule">tagline</span><span class="token punctuation">:</span> Lorem ipsum<span class="token punctuation">...</span>
  <span class="token key atrule">actions</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">theme</span><span class="token punctuation">:</span> brand
      <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started
      <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/what<span class="token punctuation">-</span>is<span class="token punctuation">-</span>vitepress
    <span class="token punctuation">-</span> <span class="token key atrule">theme</span><span class="token punctuation">:</span> alt
      <span class="token key atrule">text</span><span class="token punctuation">:</span> View on GitHub
      <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/vuejs/vitepress
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
  <span class="token comment">// The string shown top of \`text\`. Comes with brand color</span>
  <span class="token comment">// and expected to be short, such as product name.</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// The main text for the hero section. This will be defined</span>
  <span class="token comment">// as \`h1\` tag.</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// Tagline displayed below \`text\`.</span>
  tagline<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// Action buttons to display in home hero section.</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> HeroAction<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">HeroAction</span> <span class="token punctuation">{</span>
  <span class="token comment">// Color theme of the button. Defaults to \`brand\`.</span>
  theme<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;brand&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;alt&#39;</span>

  <span class="token comment">// Label of the button.</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// Destination link of the button.</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customizing-the-name-color" tabindex="-1"><a class="header-anchor" href="#customizing-the-name-color" aria-hidden="true">#</a> Customizing the name color</h3><p>VitePress uses the brand color (<code>--vp-c-brand</code>) for the <code>name</code>. However, you may customize this color by overriding <code>--vp-home-hero-name-color</code> variable.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--vp-home-hero-name-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also you may customize it further by combining <code>--vp-home-hero-name-background</code> to give the <code>name</code> gradient color.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--vp-home-hero-name-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">--vp-home-hero-name-background</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>120deg<span class="token punctuation">,</span> #bd34fe<span class="token punctuation">,</span> #41d1ff<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="features-section" tabindex="-1"><a class="header-anchor" href="#features-section" aria-hidden="true">#</a> Features Section</h2><p>In Features section, you can list any number of features you would like to show right after the Hero section. To configure it, pass <code>features</code> option to the frontmatter.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> home

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> ⚡️
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Vite<span class="token punctuation">,</span> The DX that can&#39;t be beat
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Lorem ipsum<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> 🖖
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Power of Vue meets Markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Lorem ipsum<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> 🛠️
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Simple and minimal<span class="token punctuation">,</span> always
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Lorem ipsum<span class="token punctuation">...</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Feature</span> <span class="token punctuation">{</span>
  <span class="token comment">// Show icon on each feature box. Currently, only emojis</span>
  <span class="token comment">// are supported.</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// Title of the feature.</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// Details of the feature.</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function k(b,h){const a=p("RouterLink");return t(),i("div",null,[r,s("p",null,[n("VitePress default theme provides a homepage layout, which you can also see used on "),o(a,{to:"/"},{default:l(()=>[n("the homepage of this site")]),_:1}),n(". You may use it on any of your pages by specifying "),d,n(" in the "),m,n(".")]),v])}const f=e(u,[["render",k],["__file","theme-home-page.html.vue"]]);export{f as default};
