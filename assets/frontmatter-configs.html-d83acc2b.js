import{_ as n,W as a,X as s,a0 as e}from"./framework-0d6dbdc9.js";const t={},i=e(`<h1 id="frontmatter-configs" tabindex="-1"><a class="header-anchor" href="#frontmatter-configs" aria-hidden="true">#</a> Frontmatter Configs</h1><p>Frontmatter enables page based configuration. On every markdown, you’re free to add Any settings to override any global app or theme configs. Also, there are configs which you can only define in Frontmatter.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> Docs with VitePress
<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may access frontmatter by <code>$frontmatter</code> helper inside any markdown file.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>{{ $frontmatter.title }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Type: <code>string</code></li></ul><p>Title for the page. It&#39;s same as <a href="../config/app-configs#title">config.title</a>, and it overrides the app config.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> VitePress
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="titletemplate" tabindex="-1"><a class="header-anchor" href="#titletemplate" aria-hidden="true">#</a> titleTemplate</h2><ul><li>Type: <code>string | boolean</code></li></ul><p>The suffix for the title. It&#39;s same as <a href="../config/app-configs#titleTemplate">config.titleTemplate</a>, and it overrides the app config.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> VitePress<span class="token punctuation">,</span>
<span class="token key atrule">titleTemplate</span><span class="token punctuation">:</span> Vite &amp; Vue powered static site generator.
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2><ul><li>Type: <code>string</code></li></ul><p>Title for the page. It&#39;s same as <a href="../config/app-configs#description">config.description</a>, and it overrides the app config.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> VitePress
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h3><ul><li>Type: <code>Head[]</code></li></ul><p>Specify extra head tags to be injected:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> description
      <span class="token key atrule">content</span><span class="token punctuation">:</span> hello
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords
      <span class="token key atrule">content</span><span class="token punctuation">:</span> super duper SEO
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Head</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">]</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a> lastUpdated</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to display <a href="../guide/theme-last-updated">Last Updated</a> text in the current page.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">lastUpdated</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li>Type: <code>doc | home | page</code></li><li>Default: <code>doc</code></li></ul><p>Determines the layout of the page.</p><ul><li><code>doc</code> - It applies default documentation styles to the markdown content.</li><li><code>home</code> - Special layout for &quot;Home Page&quot;. You may add extra options such as <code>hero</code> and <code>features</code> to rappidly create beautiful landing page.</li><li><code>page</code> - Behave similar to <code>doc</code> but it applies no styles to the content. Useful when you want to create a fully custom page.</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> doc
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hero" tabindex="-1"><a class="header-anchor" href="#hero" aria-hidden="true">#</a> hero</h2><ul><li>Type: <code>Hero</code></li></ul><p>This option only takes effect when <code>layout</code> is set to <code>home</code>.</p><p>It defines contents of home hero section.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h2><ul><li>Type: <code>Feature[]</code></li></ul><p>This option only takes effect when <code>layout</code> is set to <code>home</code>.</p><p>It defines items to display in features section.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aside" tabindex="-1"><a class="header-anchor" href="#aside" aria-hidden="true">#</a> aside</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>If you want the right aside component in <code>doc</code> layout not to be shown, set this option to <code>false</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">aside</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),l=[i];function o(p,c){return a(),s("div",null,l)}const u=n(t,[["render",o],["__file","frontmatter-configs.html.vue"]]);export{u as default};
