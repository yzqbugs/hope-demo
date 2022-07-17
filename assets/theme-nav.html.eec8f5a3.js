import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,d as o,w as i,b as s,e as l,r as c}from"./app.8cef77d0.js";const r={},u=n("h1",{id:"nav",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nav","aria-hidden":"true"},"#"),s(" Nav")],-1),d=n("p",null,"The Nav is the navigation bar displayed on top of the page. It contains the site title, global menu links, etc.",-1),k=n("h2",{id:"site-title-and-logo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#site-title-and-logo","aria-hidden":"true"},"#"),s(" Site Title and Logo")],-1),v=s("By default, nav shows the title of the site refferencing "),m=n("code",null,"config.title",-1),y=s(" value. If you would like to change what's displayed on nav, you may define custom text in "),b=n("code",null,"themeConfig.siteTitle",-1),g=s(" option."),h=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">siteTitle</span><span class="token operator">:</span> <span class="token string">&#39;My Custom Title&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you have a logo for your site, you can display it by passing in the path to the image. You should place the logo within <code>public</code> directly, and define the absolute path to it.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/my-logo.svg&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When adding a logo, it gets displayed along with the site title. If your logo is all you need and if you would like to hide the site title text, set <code>false</code> to the <code>siteTitle</code> option.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/my-logo.svg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">siteTitle</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navigation-links" tabindex="-1"><a class="header-anchor" href="#navigation-links" aria-hidden="true">#</a> Navigation Links</h2><p>You may define <code>themeConfig.nav</code> option to add links to your nav.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Configs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/configs&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Changelog&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/...&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>text</code> is the actual text displayed in nav, and the <code>link</code> is the link that will be navigated to when the text is clicked. For the link, set path to the actual file without <code>.md</code> prefix, and always start with <code>/</code>.</p><p>Nav links can also be dropdown menus. To do this, set <code>items</code> key on link option.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Dropdown Menu&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Item A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/item-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Item B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/item-2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Item C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/item-3&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that dropdown menu title (<code>Dropdown Menu</code> in the above example) can not have <code>link</code> property since it becomes a button to open dropdown dialog.</p><p>You may further add &quot;sections&quot; to the dropdown menu items as well by passing in more nested items.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Dropdown Menu&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// Title for the section.</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Section A Title&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Section A Item A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Section B Item B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Dropdown Menu&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// You may also omit the title.</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Section A Item A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Section B Item B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customize-link-s-active-state" tabindex="-1"><a class="header-anchor" href="#customize-link-s-active-state" aria-hidden="true">#</a> Customize link&#39;s &quot;active&quot; state</h3><p>Nav menu items will be highlighted when the current page is under the matching path. if you would like to customize the path to be matched, define <code>activeMatch</code> property and regex as a string value.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// This link gets active state when the user is</span>
      <span class="token comment">// on \`/config/\` path.</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">&#39;/config/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p><code>activeMatch</code> is expected to be a regex string, but you must define it as a string. We can&#39;t use actual RegExp object here because it isn&#39;t serializable during the build time.</p></div><h2 id="social-links" tabindex="-1"><a class="header-anchor" href="#social-links" aria-hidden="true">#</a> Social Links</h2><p>You may define <code>socialLinks</code> option to show your social account links with icons.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">socialLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuejs/vitepress&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;twitter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;discord&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The list of supported icons are shown below.</p><ul><li><code>discord</code></li><li><code>facebook</code></li><li><code>github</code></li><li><code>instagram</code></li><li><code>linkedin</code></li><li><code>slack</code></li><li><code>twitter</code></li><li><code>youtube</code></li></ul>`,23);function f(x,w){const a=c("RouterLink");return t(),p("div",null,[u,d,k,n("p",null,[v,o(a,{to:"/config/app-configs.html#title"},{default:i(()=>[m]),_:1}),y,b,g]),h])}var C=e(r,[["render",f],["__file","theme-nav.html.vue"]]);export{C as default};