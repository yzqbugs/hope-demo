import{_ as e,Y as a,Z as t,a2 as o}from"./framework-9a6634be.js";const n={},s=o(`<h1 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h1><p>You may choose the page layout by setting <code>layout</code> option to the page <a href="./frontmatter">frontmatter</a>. There are 3 layout options, <code>doc</code>, <code>page</code>, and <code>home</code>. If nothing is specified, then the page is treated as <code>doc</code> page.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> doc
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="doc-layout" tabindex="-1"><a class="header-anchor" href="#doc-layout" aria-hidden="true">#</a> Doc Layout</h2><p>Option <code>doc</code> is the default layout and it styles the whole Markdown content into &quot;documentation&quot; look. It works by wrapping whole content within <code>vp-doc</code> css class, and applying styles to elements underneath it.</p><p>Almost all generic elements such as <code>p</code>, or <code>h2</code> get special styling. Therefore, keep in mind that if you add any custom HTML inside a Markdown content, those will get affected by those styles as well.</p><p>It also provides documentation specific features listed below. These features are only enabled in this layout.</p><ul><li>Edit Link</li><li>Prev Next Link</li><li>Outline</li><li><a href="./theme-carbon-ads">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1"><a class="header-anchor" href="#page-layout" aria-hidden="true">#</a> Page Layout</h2><p>Option <code>page</code> is treated as &quot;blank page&quot;. The Markdown will still be parsed, and all of the <a href="./markdown">Markdown Extensions</a> work as same as <code>doc</code> layout, but it wouldn&#39;t get any default stylings.</p><p>The page layout will let you style everything by you without VitePress theme affecting the markup. This is useful when you want to create your own custom page.</p><p>Note that even in this layout, sidebar will still show up if the page has a matching sidebar config.</p><h2 id="home-layout" tabindex="-1"><a class="header-anchor" href="#home-layout" aria-hidden="true">#</a> Home Layout</h2><p>Option <code>home</code> will generate templated &quot;Homepage&quot;. In this layout, you can set extra options such as <code>hero</code> and <code>features</code> to customize the content further. Please visit <a href="./theme-home-page">Theme: Home Page</a> for more details.</p>`,14),i=[s];function d(l,c){return a(),t("div",null,i)}const h=e(n,[["render",d],["__file","theme-layout.html.vue"]]);export{h as default};