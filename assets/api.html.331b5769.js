import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as o,a as n,d as p,b as s,e as i,r as l}from"./app.8cef77d0.js";const c={},r=n("h1",{id:"api-reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api-reference","aria-hidden":"true"},"#"),s(" API Reference")],-1),d=n("p",null,"VitePress offers several built in API to let you access app data. VitePress also comes with few built-in component that can be used globally.",-1),u=n("p",null,[s("The helper methods are globally importable from "),n("code",null,"vitepress"),s(" and are typically used in custom theme Vue components. However, they are also usable inside "),n("code",null,".md"),s(" pages because markdown files are compiled into Vue single-file components.")],-1),k=s("Methods that start with "),h=n("code",null,"use*",-1),g=s(" indicates that it is a "),m={href:"https://vuejs.org/guide/introduction.html#composition-api",target:"_blank",rel:"noopener noreferrer"},v=s("Vue 3 Composition API"),b=s(" function that can only be used inside "),f=n("code",null,"setup()",-1),y=s(" or "),_=n("code",null,"<script setup>",-1),w=s("."),x=i(`<h2 id="usedata" tabindex="-1"><a class="header-anchor" href="#usedata" aria-hidden="true">#</a> <code>useData</code></h2><p>Returns page-specific data. The returned object has the following type:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VitePressData</span> <span class="token punctuation">{</span>
  site<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>SiteData<span class="token operator">&gt;</span>
  page<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>PageData<span class="token operator">&gt;</span>
  theme<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token comment">// themeConfig from .vitepress/config.js</span>
  frontmatter<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>PageData<span class="token punctuation">[</span><span class="token string">&#39;frontmatter&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
  lang<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
  title<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
  description<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
  localePath<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> theme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ theme.footer.copyright }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useroute" tabindex="-1"><a class="header-anchor" href="#useroute" aria-hidden="true">#</a> <code>useRoute</code></h2><p>Returns the current route object with the following type:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span>
  data<span class="token operator">:</span> PageData
  component<span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userouter" tabindex="-1"><a class="header-anchor" href="#userouter" aria-hidden="true">#</a> <code>useRouter</code></h2><p>Returns the VitePress router instance so you can programmatically navigate to another page.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Router</span> <span class="token punctuation">{</span>
  route<span class="token operator">:</span> Route
  <span class="token function-variable function">go</span><span class="token operator">:</span> <span class="token punctuation">(</span>href<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withbase" tabindex="-1"><a class="header-anchor" href="#withbase" aria-hidden="true">#</a> <code>withBase</code></h2><ul><li><strong>Type</strong>: <code>(path: string) =&gt; string</code></li></ul><p>Appends the configured <a href="../config/app-configs#base"><code>base</code></a> to a given URL path. Also see <a href="./asset-handling#base-url">Base URL</a>.</p><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> <code>&lt;Content /&gt;</code></h2><p>The <code>&lt;Content /&gt;</code> component displays the rendered markdown contents. Useful <a href="./theme-introduction">when creating your own theme</a>.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Custom Layout!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clientonly" tabindex="-1"><a class="header-anchor" href="#clientonly" aria-hidden="true">#</a> <code>&lt;ClientOnly /&gt;</code></h2><p>The <code>&lt;ClientOnly /&gt;</code> component renders its slot only at client side.</p><p>Because VitePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the universal code requirements. In short, make sure to only access Browser / DOM APIs in beforeMount or mounted hooks.</p><p>If you are using or demoing components that are not SSR-friendly (for example, contain custom directives), you can wrap them inside the <code>ClientOnly</code> component.</p><div class="language-vue-html ext-vue-html line-numbers-mode"><pre class="language-vue-html"><code>&lt;ClientOnly&gt;
  &lt;NonSSRFriendlyComponent /&gt;
&lt;/ClientOnly&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function R(C,P){const a=l("ExternalLinkIcon");return t(),o("div",null,[r,d,u,n("p",null,[k,h,g,n("a",m,[v,p(a)]),b,f,y,_,w]),x])}var I=e(c,[["render",R],["__file","api.html.vue"]]);export{I as default};
