import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as i,a as s,d as o,w as l,b as n,e as c,r as p}from"./app.0b1d8d51.js";const u={},r=s("h1",{id:"home-page",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#home-page","aria-hidden":"true"},"#"),n(" Home Page")],-1),d=n("VitePress default theme provides a homepage layout, which you can also see used on "),m=n("the homepage of this site"),v=n(". You may use it on any of your pages by specifying "),k=s("code",null,"layout: home",-1),b=n(" in the "),h=s("a",{href:"./frontmatter"},"frontmatter",-1),g=n("."),y=c(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> home
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, this option alone wouldn&#39;t do much. You can add several different pre templated &quot;sections&quot; to the homepage by setting additional other options such as <code>hero</code> and <code>features</code>.</p><h2 id="hero-section" tabindex="-1"><a class="header-anchor" href="#hero-section" aria-hidden="true">#</a> Hero Section</h2><p>The Hero section comes at the top of the homepage. Here&#39;s how you can configure the Hero section.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customizing-the-name-color" tabindex="-1"><a class="header-anchor" href="#customizing-the-name-color" aria-hidden="true">#</a> Customizing the name color</h3><p>VitePress uses the brand color (<code>--vp-c-brand</code>) for the <code>name</code>. However, you may customize this color by overriding <code>--vp-home-hero-name-color</code> variable.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--vp-home-hero-name-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also you may customize it further by combining <code>--vp-home-hero-name-background</code> to give the <code>name</code> gradient color.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--vp-home-hero-name-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">--vp-home-hero-name-background</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>120deg<span class="token punctuation">,</span> #bd34fe<span class="token punctuation">,</span> #41d1ff<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="features-section" tabindex="-1"><a class="header-anchor" href="#features-section" aria-hidden="true">#</a> Features Section</h2><p>In Features section, you can list any number of features you would like to show right after the Hero section. To configure it, pass <code>features</code> option to the frontmatter.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> home

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> \u26A1\uFE0F
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Vite<span class="token punctuation">,</span> The DX that can&#39;t be beat
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Lorem ipsum<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> \u{1F596}
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Power of Vue meets Markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Lorem ipsum<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> \u{1F6E0}\uFE0F
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Simple and minimal<span class="token punctuation">,</span> always
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Lorem ipsum<span class="token punctuation">...</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Feature</span> <span class="token punctuation">{</span>
  <span class="token comment">// Show icon on each feature box. Currently, only emojis</span>
  <span class="token comment">// are supported.</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// Title of the feature.</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// Details of the feature.</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function f(_,x){const a=p("RouterLink");return t(),i("div",null,[r,s("p",null,[d,o(a,{to:"/"},{default:l(()=>[m]),_:1}),v,k,b,h,g]),y])}var V=e(u,[["render",f],["__file","theme-home-page.html.vue"]]);export{V as default};