import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as r,a as s,d as e,b as n,e as p,r as i}from"./app.8cef77d0.js";const c={},l=s("h1",{id:"carbon-ads",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#carbon-ads","aria-hidden":"true"},"#"),n(" Carbon Ads")],-1),d=n("VitePress has built in native support for "),u={href:"https://www.carbonads.net/",target:"_blank",rel:"noopener noreferrer"},b=n("Carbon Ads"),k=n(". By defining the Carbon Ads credentials in config, VitePress will display ads on the page."),m=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">carbonAds</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;your-carbon-code&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">placement</span><span class="token operator">:</span> <span class="token string">&#39;your-carbon-placement&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These values are used to call carbon CDN script as shown below.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">//cdn.carbonads.com/carbon.js?serve=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;placement=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>placement<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),v=n("To learn more about Carbon Ads configuration, please visit "),_={href:"https://www.carbonads.net/",target:"_blank",rel:"noopener noreferrer"},h=n("Carbon Ads website"),g=n(".");function f(y,w){const a=i("ExternalLinkIcon");return o(),r("div",null,[l,s("p",null,[d,s("a",u,[b,e(a)]),k]),m,s("p",null,[v,s("a",_,[h,e(a)]),g])])}var j=t(c,[["render",f],["__file","theme-carbon-ads.html.vue"]]);export{j as default};