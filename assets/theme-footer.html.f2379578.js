import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,e as a}from"./app.6fc8b7f7.js";const t={},o=a(`<h1 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> Footer</h1><p>When the <a href="./theme-layout">page layout</a> is set to either <code>home</code> or <code>page</code>, VitePress will display global footer at the bottom of the page. Set <code>themeConfig.footer</code> to configure footer content.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    footer<span class="token operator">:</span> <span class="token punctuation">{</span>
      message<span class="token operator">:</span> <span class="token string">&#39;Released under the MIT License.&#39;</span><span class="token punctuation">,</span>
      copyright<span class="token operator">:</span> <span class="token string">&#39;Copyright © 2019-present Evan You&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Footer</span> <span class="token punctuation">{</span>
  <span class="token comment">// The message shown rigth before copyright.</span>
  message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// The actual copyright text.</span>
  copyright<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that footer will not be displayed when the page layout is set to <code>doc</code>.</p>`,5),i=[o];function p(c,r){return s(),n("div",null,i)}const u=e(t,[["render",p],["__file","theme-footer.html.vue"]]);export{u as default};
