import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e}from"./app.8cef77d0.js";const t={},i=e(`<h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1><h2 id="gradle-build-task-app-databindinggenbaseclassesshopdevdebug-failed\u914D\u7F6Edatabinding\u65F6\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#gradle-build-task-app-databindinggenbaseclassesshopdevdebug-failed\u914D\u7F6Edatabinding\u65F6\u9519\u8BEF" aria-hidden="true">#</a> Gradle Build Task :app:dataBindingGenBaseClassesShopDevDebug Failed\u914D\u7F6EDataBinding\u65F6\u9519\u8BEF</h2><p>1\u3001\u5F00\u542FDataBind\u5982\u679C\u7248\u672C\u8DB3\u591F\u9AD8\u7684\u8BDD\uFF0C\u4E0D\u7528\u542C\u8FC7\u65F6\u7684\u6559\u7A0B\uFF0C\u8FD9\u91CC\u52A0\u51E0\u884C\u4EE3\u7801\uFF0C\u90A3\u91CC\u52A0\u51E0\u884C\u4EE3\u7801\u7684\u3002 \u53EA\u9700\u8981\u5728build-grade\uFF08\u6709android\u7684\u90A3\u4E2A\uFF09\u4E2D\u7684android\u5185\u6DFB\u52A0</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    buildFeatures{
        dataBinding = true
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u7136\u540E\u5237\u65B0\u4E0B\uFF0C\u4F60\u5C31\u9047\u5230\u4E86\u6807\u9898\u90A3\u6837\u7684\u9519\u8BEF\uFF0C\u6216\u8005\u76F4\u63A5\u62A5\u51FA\u8FD9\u4E2A\u9519\u8BEF not a valid name:\uFF1F \u6211\u653E\u4E2A\u4F8B\u5B50</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Com.System.Bean.User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>variable</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u5982\u4F60\u50CF\u8FD9\u4E2A\u4E00\u6837\uFF0C\u5F15\u7528\u7684\u5305\u540D\u662F\u5927\u5199\u7684\uFF0C\u5C31\u4F1A\u65E0\u6CD5\u89E3\u6790\u62A5\u9519\uFF0C\u6240\u4EE5\u8981\u6CE8\u610F\u4EE3\u7801\u89C4\u8303\u3002\u5728\u8FD9\u4E2A\u4EE3\u7801\u4E2D\u9664\u4E86User\u7C7B\u4EE5\u5916\u90FD\u8981\u5C0F\u5199\uFF0C\u8981\u6539\u6210\u8FD9\u6837</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.system.bean.User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>variable</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u662F\u56E0\u4E3A\u8FD9\u4E2ABean\u662F\u81EA\u5DF1\u5EFA\u7684\u6240\u4EE5\u4F1A\u81EA\u52A8\u5927\u5199\uFF0C\u8FDB\u800C\u62A5\u9519\uFF0C\u68C0\u67E5\u4E0B\u4F60\u4EEC\u7684\u4EE3\u7801\u3002 \u200B</p><h1 id="databinding\u4E0B\u9762\u6709\u9519\u4F46\u662F\u53EF\u4EE5\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#databinding\u4E0B\u9762\u6709\u9519\u4F46\u662F\u53EF\u4EE5\u8FD0\u884C" aria-hidden="true">#</a> databinding\u4E0B\u9762\u6709\u9519\u4F46\u662F\u53EF\u4EE5\u8FD0\u884C</h1><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>import com<span class="token punctuation">.</span>yzq<span class="token punctuation">.</span>tutor<span class="token punctuation">.</span>databinding<span class="token punctuation">.</span>FragmentFirstBinding
\u4E0B\u9762\u6709\u6CE2\u6D6A\u7EBF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u9700\u8981\u5728app\u7684build.gradle\u91CC\u9762\u628Asdk\u7248\u672C\u6539\u4E3A1.8\u5C31\u884C</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code> compileOptions <span class="token punctuation">{</span>
        sourceCompatibility JavaVersion<span class="token punctuation">.</span>VERSION_1_8
        targetCompatibility JavaVersion<span class="token punctuation">.</span>VERSION_1_8
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4ECE4-0-\u5347\u7EA7\u5230\u4E86\u6700\u65B0\u72484-1\u7684android-studio-\u7136\u540E\u4EE3\u7801\u5C31\u5168\u90FD\u53D8\u6210\u4E86\u767D\u8272" tabindex="-1"><a class="header-anchor" href="#\u4ECE4-0-\u5347\u7EA7\u5230\u4E86\u6700\u65B0\u72484-1\u7684android-studio-\u7136\u540E\u4EE3\u7801\u5C31\u5168\u90FD\u53D8\u6210\u4E86\u767D\u8272" aria-hidden="true">#</a> \u4ECE4.0 \u5347\u7EA7\u5230\u4E86\u6700\u65B0\u72484.1\u7684Android studio \u7136\u540E\u4EE3\u7801\u5C31\u5168\u90FD\u53D8\u6210\u4E86\u767D\u8272</h2><p>\u548C\u60EF\u4F8B\u7684 \u4F4E\u7535\u91CF\u6A21\u5F0F\u3001\u4EE3\u7801\u6837\u5F0F\u90FD\u6CA1\u6709\u5173\u7CFB\xA0\u200B \xA0 \xA0\u901A\u8FC7\u62A5\u9519</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>com<span class="token punctuation">.</span>intellij<span class="token punctuation">.</span>diagnostic<span class="token punctuation">.</span>PluginException<span class="token punctuation">:</span> While loading <span class="token keyword">class</span> <span class="token class-name">com<span class="token punctuation">.</span>avast<span class="token punctuation">.</span>android<span class="token punctuation">.</span>butterknifezelezny<span class="token punctuation">.</span>InjectAction</span><span class="token punctuation">:</span> com<span class="token interpolation-string"><span class="token string">/intellij/</span></span>codeInsight<span class="token interpolation-string"><span class="token string">/generation/</span></span>actions<span class="token operator">/</span>BaseGenerateAction <span class="token punctuation">[</span>Plugin<span class="token punctuation">:</span> eu<span class="token punctuation">.</span>inmite<span class="token punctuation">.</span>android<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span>butterknifezelezny<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u663E\u793A\u662Fbutterknife zelezny \u7248\u672C\u95EE\u9898,\u7981\u7528\u6216\u8005\u5378\u8F7D\u5C31\u53EF\u4EE5</p><h2 id="\u5DF2\u89E3\u51B3-could-not-create-task-app-minifydebugwithr8-cannot-query-the-value-of-this-provider" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u89E3\u51B3-could-not-create-task-app-minifydebugwithr8-cannot-query-the-value-of-this-provider" aria-hidden="true">#</a> \u5DF2\u89E3\u51B3\uFF1ACould not create task \u2018:app:minifyDebugWithR8\u2018.. Cannot query the value of this provider</h2><p>\u89E3\u51B3\u529E\u6CD5\uFF1A1.\u6253\u5F00\u4F60\u9879\u76EE\u7684build.gradle\u6587\u4EF6\uFF0C\u67E5\u770Bdependencies\u4E2D\u7684\u7248\u672C\u53F7\uFF1B \u200B</p><p>2.\u5728Android studio\u4E2D\u53CC\u51FBshift\uFF0C\u5728\u5F39\u6846\u4E2D\u8F93\u5165sdk manager\uFF0C\u56DE\u8F66\uFF1B \u200B</p><ol start="3"><li>\u4E0B\u8F7D\u548C\u4F60\u7684build.gradle\u4E2D\u7684\u7248\u672C\u53F7\u76F8\u540C\u7684sdk\uFF1B \u200B</li></ol><p>4.\u91CD\u65B0build\u9879\u76EE\uFF0C\u5373\u53EF\u901A\u8FC7\uFF01</p>`,22),p=[i];function o(l,c){return n(),s("div",null,p)}var r=a(t,[["render",o],["__file","faqs.html.vue"]]);export{r as default};