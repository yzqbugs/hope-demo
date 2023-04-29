import{_ as t,Y as p,Z as i,$ as s,a0 as n,a1 as o,a2 as a,E as l}from"./framework-9a6634be.js";const r={},c=a(`<h1 id="theme-configs" tabindex="-1"><a class="header-anchor" href="#theme-configs" aria-hidden="true">#</a> Theme Configs</h1><p>Theme configs let you customize your theme. You can define theme configs by adding <code>themeConfig</code> key to the config file.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&#39;VitePress&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;Vite &amp; Vue powered static site generator.&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// Theme related configurations.</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;/logo.svg&#39;</span><span class="token punctuation">,</span>
    nav<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here it describes the settings for the VitePress default theme. If you&#39;re using a custom theme created by others, these settings may not have any effect, or might behave differently.</p><h2 id="logo" tabindex="-1"><a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo</h2><ul><li>Type: <code>string</code></li></ul><p>Logo file to display in nav bar, right before the site title.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;/logo.svg&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sitetitle" tabindex="-1"><a class="header-anchor" href="#sitetitle" aria-hidden="true">#</a> siteTitle</h2><ul><li>Type: <code>string | false</code></li></ul><p>You can customize this item to replace the default site title (<code>title</code> in app config) in nav. When set to <code>false</code>, title in nav will be disabled. Useful when you have <code>logo</code> that already contains the site title text.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    siteTitle<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nav" tabindex="-1"><a class="header-anchor" href="#nav" aria-hidden="true">#</a> nav</h2><ul><li>Type: <code>NavItem</code></li></ul><p>The configuration for the nav menu item. You may learn more details at <a href="../guide/theme-nav#navigation-links">Theme: Nav</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">NavItem</span> <span class="token operator">=</span> NavItemWithLink <span class="token operator">|</span> NavItemWithChildren

<span class="token keyword">type</span> <span class="token class-name">NavItemWithLink</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NavItemWithChildren</span> <span class="token punctuation">{</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  items<span class="token operator">:</span> NavItemWithLink<span class="token punctuation">[</span><span class="token punctuation">]</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h2><ul><li>Type: <code>Sidebar</code></li></ul><p>The configuration for the sidebar menu item. You may learn more details at <a href="../guide/theme-sidebar">Theme: Nav</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Introduction&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/introduction&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Getting Started&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/getting-started&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token operator">...</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Sidebar</span> <span class="token operator">=</span> SidebarGroup<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> SidebarMulti

<span class="token keyword">interface</span> <span class="token class-name">SidebarMulti</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> SidebarGroup<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarGroup</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  items<span class="token operator">:</span> SidebarItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  collapsed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarItem</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="outlinetitle" tabindex="-1"><a class="header-anchor" href="#outlinetitle" aria-hidden="true">#</a> outlineTitle</h2><ul><li>Type: <code>string</code></li><li>Default: <code>On this page</code></li></ul><p>Can be used to customize the title of the right sidebar (on the top of outline links). This is useful when writing documentation in another language.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">outlineTitle</span><span class="token operator">:</span> <span class="token string">&#39;In hac pagina&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sociallinks" tabindex="-1"><a class="header-anchor" href="#sociallinks" aria-hidden="true">#</a> socialLinks</h2><ul><li>Type: <code>SocialLink</code></li></ul><p>You may define this option to show your social account links with icons in nav.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">socialLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuejs/vitepress&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;twitter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;discord&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SocialLink</span> <span class="token punctuation">{</span>
  icon<span class="token operator">:</span> SocialLinkIcon
  link<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SocialLinkIcon</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;discord&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;facebook&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;github&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;instagram&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;linkedin&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;slack&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;twitter&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;youtube&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h2><ul><li>Type: <code>Footer</code></li></ul><p>Footer configuration. You can add a message and copyright. The footer will displayed only when the page doesn&#39;t contain sidebar due to design reason.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    footer<span class="token operator">:</span> <span class="token punctuation">{</span>
      message<span class="token operator">:</span> <span class="token string">&#39;Released under the MIT License.&#39;</span><span class="token punctuation">,</span>
      copyright<span class="token operator">:</span> <span class="token string">&#39;Copyright © 2019-present Evan You&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Footer</span> <span class="token punctuation">{</span>
  message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  copyright<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h2><ul><li>Type: <code>EditLink</code></li></ul><p>Edit Link lets you display a link to edit the page on Git management services such as GitHub, or GitLab. See <a href="../guide/theme-edit-link">Theme: Edit Link</a> for more details.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">editLink</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Edit this page on GitHub&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">EditLink</span> <span class="token punctuation">{</span>
  pattern<span class="token operator">:</span> <span class="token builtin">string</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lastupdatedtext" tabindex="-1"><a class="header-anchor" href="#lastupdatedtext" aria-hidden="true">#</a> lastUpdatedText</h2><ul><li>Type: <code>string</code></li><li>Default: <code>Last updated</code></li></ul><p>The prefix text showing right before the last updated time.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    lastUpdatedText<span class="token operator">:</span> <span class="token string">&#39;Updated Date&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="carbonads" tabindex="-1"><a class="header-anchor" href="#carbonads" aria-hidden="true">#</a> carbonAds</h2><ul><li>Type: <code>CarbonAds</code></li></ul>`,47),d={href:"https://www.carbonads.net/",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    carbonAds<span class="token operator">:</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token string">&#39;your-carbon-code&#39;</span><span class="token punctuation">,</span>
      placement<span class="token operator">:</span> <span class="token string">&#39;your-carbon-placement&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CarbonAds</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">string</span>
  placement<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Learn more in <a href="../guide/theme-carbon-ads">Theme: Carbon Ads</a></p><h2 id="docfooter" tabindex="-1"><a class="header-anchor" href="#docfooter" aria-hidden="true">#</a> docFooter</h2><ul><li>Type: <code>DocFooter</code></li></ul><p>Can be used to customize text appearing above previous and next links. Helpful if not writing docs in English.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">docFooter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">prev</span><span class="token operator">:</span> <span class="token string">&#39;Pagina prior&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token string">&#39;Proxima pagina&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DocFooter</span> <span class="token punctuation">{</span>
  prev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  next<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function k(v,m){const e=l("ExternalLinkIcon");return p(),i("div",null,[c,s("p",null,[n("A option to display "),s("a",d,[n("Carbon Ads"),o(e)]),n(".")]),u])}const g=t(r,[["render",k],["__file","theme-configs.html.vue"]]);export{g as default};
