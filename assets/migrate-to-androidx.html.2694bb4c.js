import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as r,b as a,e,d as o,a as t,r as i}from"./app.93012e65.js";const p={},c=a("h1",{id:"androidx\u8FC1\u79FB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#androidx\u8FC1\u79FB","aria-hidden":"true"},"#"),o(" androidx\u8FC1\u79FB")],-1),l=o("\u8FC1\u79FB\u6587\u6863: "),u={href:"https://developer.android.google.cn/jetpack/androidx/migrate",target:"_blank",rel:"noopener noreferrer"},m=o("\u8C37\u6B4C\u5F00\u53D1\u8005\u8FC1\u79FB\u6587\u6863"),g=o(" Google 2018 IO \u5927\u4F1A\u63A8\u51FA\u4E86 Android\u65B0\u7684\u6269\u5C55\u5E93 AndroidX\uFF0C\u7528\u4E8E\u66FF\u6362\u539F\u6765\u7684 Android\u6269\u5C55\u5E93\uFF0C\u5C06\u539F\u6765\u7684"),h=a("code",null,"android.*",-1),_=o("\u66FF\u6362\u6210"),v=a("code",null,"androidx.*",-1),b=o("\uFF1B\u53EA\u6709\u5305\u540D\u548CMaven\u5DE5\u4EF6\u540D\u53D7\u5230\u5F71\u54CD\uFF0C\u539F\u6765\u7684\u7C7B\u540D\uFF0C\u65B9\u6CD5\u540D\u548C\u5B57\u6BB5\u540D\u4E0D\u4F1A\u66F4\u6539\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u770B\u770B\u4F7F\u7528 AndroidX\u7684\u6269\u5C55\u5E93\u9700\u8981\u54EA\u4E9B\u914D\u7F6E\u3002"),k=t('<h5 id="_1-androidx\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_1-androidx\u53D8\u5316" aria-hidden="true">#</a> 1. AndroidX\u53D8\u5316</h5><p><strong>1\uFF09\u5E38\u7528\u4F9D\u8D56\u5E93\u5BF9\u6BD4\uFF1A</strong></p><table><thead><tr><th>Old \xA0build artifact</th><th>AndroidX \xA0build artifact</th></tr></thead><tbody><tr><td><code>com.android.support:appcompat-v7:28.0.2</code></td><td><code>androidx.appcompat:appcompat:1.0.0</code></td></tr><tr><td><code>com.android.support:design:28.0.2</code></td><td><code>com.google.android.material:material:1.0.0</code></td></tr><tr><td><code>com.android.support:support-v4:28.0.2</code></td><td><code>androidx.legacy:legacy-support-v4:1.0.0</code></td></tr><tr><td><code>com.android.support:recyclerview-v7:28.0.2</code></td><td><code>androidx.recyclerview:recyclerview:1.0.0</code></td></tr><tr><td><code>com.android.support.constraint:constraint-layout:1.1.2</code></td><td><code>androidx.constraintlayout:constraintlayout:1.1.2</code></td></tr></tbody></table>',3),x=o("\u66F4\u591A\u8BE6\u7EC6\u53D8\u5316\u5185\u5BB9\uFF0C\u53EF\u4EE5"),A={href:"https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.android.google.cn%2Ftopic%2Flibraries%2Fsupport-library%2Fdownloads%2Fandroidx-artifact-mapping.csv",target:"_blank",rel:"noopener noreferrer"},y=o("\u4E0B\u8F7DCSV\u683C\u5F0F"),f=o("\u6620\u5C04\u6587\u4EF6\uFF1B"),w=t("<p><strong>2\uFF09\u5E38\u7528\u652F\u6301\u5E93\u7C7B\u5BF9\u6BD4\uFF1A</strong></p><table><thead><tr><th>Support Library class</th><th>AndroidX class</th></tr></thead><tbody><tr><td><code>android.support.v4.app.Fragment</code></td><td><code>androidx.fragment.app.Fragment</code></td></tr><tr><td><code>android.support.v4.app.FragmentActivity</code></td><td><code>androidx.fragment.app.FragmentActivity</code></td></tr><tr><td><code>android.support.v7.app.AppCompatActivity</code></td><td><code>androidx.appcompat.app.AppCompatActivity</code></td></tr><tr><td><code>android.support.v7.app.ActionBar</code></td><td><code>androidx.appcompat.app.ActionBar</code></td></tr><tr><td><code>android.support.v7.widget.RecyclerView</code></td><td><code>androidx.recyclerview.widget.RecyclerView</code></td></tr></tbody></table>",2),X=o("\u66F4\u591A\u8BE6\u7EC6\u53D8\u5316\u5185\u5BB9\uFF0C\u53EF\u4EE5"),F={href:"https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.android.google.cn%2Ftopic%2Flibraries%2Fsupport-library%2Fdownloads%2Fandroidx-class-mapping.csv",target:"_blank",rel:"noopener noreferrer"},j=o("\u4E0B\u8F7DCSV\u683C\u5F0F"),S=o("\u6620\u5C04\u6587\u4EF6\u3002"),V=t(`<h5 id="_2-androidx\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-androidx\u914D\u7F6E" aria-hidden="true">#</a> 2. AndroidX\u914D\u7F6E</h5><p><strong>1\uFF09\u66F4\u65B0\u5347\u7EA7\u63D2\u4EF6</strong></p><ul><li>\u5C06AS\u66F4\u65B0\u81F3 <strong>AS 3.2</strong>\u53CA\u4EE5\u4E0A\uFF1B</li><li>Gradle \u63D2\u4EF6\u7248\u672C\u6539\u4E3A <strong>4.6</strong>\u53CA\u4EE5\u4E0A\uFF1B \u9879\u76EE\u4E0B <code>gradle/wrapper/gradle-wrapper.propertie</code> \u6587\u4EF6\u4E2D\u7684<code>distributionUrl</code>\u6539\u4E3A\uFF1A</li></ul><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>distributionUrl<span class="token operator">=</span>https\\<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>services<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>org<span class="token operator">/</span>distributions<span class="token operator">/</span>gradle<span class="token operator">-</span><span class="token number">4.6</span><span class="token operator">-</span>all<span class="token punctuation">.</span>zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>compileSdkVersion \u7248\u672C\u5347\u7EA7\u5230 <strong>28</strong>\u53CA\u4EE5\u4E0A\uFF1B</li><li>buildToolsVersion \u7248\u672C\u6539\u4E3A <strong>28.0.2</strong>\u53CA\u4EE5\u4E0A\u3002</li></ul><p><img src="https:////upload-images.jianshu.io/upload_images/4625401-92ed6de990f27533.png?imageMogr2/auto-orient/strip|imageView2/2/w/546/format/webp#align=left&amp;display=inline&amp;height=261&amp;id=Kdgqq&amp;margin=[object Object]&amp;originHeight=261&amp;originWidth=546&amp;status=done&amp;style=none&amp;width=546" alt=""></p><p>\u63D2\u4EF6\u66F4\u65B0\u63D0\u793A</p><p><strong>2\uFF09\u5F00\u542F\u8FC1\u79FBAndroidX</strong> \u5728\u9879\u76EE\u7684<code>gradle.properties</code>\u6587\u4EF6\u91CC\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>android.useAndroidX<span class="token operator">=</span>true
android.enableJetifier<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8868\u793A\u9879\u76EE\u542F\u7528 AndroidX \u5E76\u8FC1\u79FB\u5230 AndroidX\u3002</p><p><strong>3\uFF09\u66FF\u6362\u4F9D\u8D56\u5E93</strong> \u4FEE\u6539\u9879\u76EEapp\u76EE\u5F55\u4E0B\u7684<code>build.gradle</code>\u4F9D\u8D56\u5E93\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>implementation <span class="token string">&#39;com.android.support:appcompat-v7:28.0.2&#39;</span> \u2192 implementation <span class="token string">&#39;androidx.appcompat:appcompat:1.0.0&#39;</span>
implementation <span class="token string">&#39;com.android.support:design:28.0.2&#39;</span>  \u2192 implementation <span class="token string">&#39;com.google.android.material:material:1.0.0&#39;</span>
implementation <span class="token string">&#39;com.android.support.constraint:constraint-layout:1.1.2&#39;</span> \u2192 implementation <span class="token string">&#39;androidx.constraintlayout:constraintlayout:1.1.2&#39;</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4\uFF09\u4FEE\u6539\u652F\u6301\u5E93\u7C7B</strong> \u5C06\u539F\u6765<code>import</code>\u7684<code>android.**</code>\u5305\u5220\u9664\uFF0C\u91CD\u65B0<code>import</code>\u65B0\u7684<code>androidx.**</code>\u5305\uFF1B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>support<span class="token punctuation">.</span>v7<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">AppCompatActivity</span></span><span class="token punctuation">;</span> \u2192 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">androidx<span class="token punctuation">.</span>appcompat<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">AppCompatActivity</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5\uFF09\u4E00\u952E\u8FC1\u79FBAndroidX\u5E93</strong> AS 3.2 \u53CA\u4EE5\u4E0A\u7248\u672C\u63D0\u4F9B\u4E86\u66F4\u52A0\u65B9\u4FBF\u5FEB\u6377\u7684\u65B9\u6CD5\u4E00\u952E\u8FC1\u79FB\u5230 AndroidX\u3002\u9009\u62E9\u83DC\u5355\u4E0A\u7684<strong>ReFactor \u2014\u2014 Migrate to AndroidX...</strong> \u5373\u53EF\u3002\uFF08\u5982\u679C\u8FC1\u79FB\u5931\u8D25\uFF0C\u5C31\u9700\u8981\u91CD\u590D\u4E0A\u97621\uFF0C2\uFF0C3\uFF0C4\u6B65\u624B\u52A8\u53BB\u4FEE\u6539\u8FC1\u79FB\uFF09</p><p><img src="https:////upload-images.jianshu.io/upload_images/4625401-b9524e8fa789d620.png?imageMogr2/auto-orient/strip|imageView2/2/w/316/format/webp#align=left&amp;display=inline&amp;height=423&amp;id=yiTs2&amp;margin=[object Object]&amp;originHeight=423&amp;originWidth=316&amp;status=done&amp;style=none&amp;width=316" alt=""></p><p>AndroidX \u8FC1\u79FB</p><p>**\u6CE8\u610F\uFF1A**\u5982\u679C\u4F60\u7684\u9879\u76EEcompileSdkVersion \u4F4E\u4E8E28\uFF0C\u70B9\u51FBRefactor to AndroidX...\u4F1A\u63D0\u793A\uFF1A</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>You need to have at least have compileSdk <span class="token number">28</span> set in your <span class="token keyword">module</span> <span class="token module">build<span class="token punctuation">.</span>gradle</span> to refactor to androidx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63D0\u793A\u8BA9\u4F60\u4F7F\u7528\u4E0D\u4F4E\u4E8E28\u7684sdk\uFF0C\u5347\u7EA7\u6700\u65B0\u5230SDK\uFF0C\u7136\u540E\u70B9\u51FB <strong>Migrate to AndroidX...</strong>\uFF0CAS\u5C31\u4F1A\u81EA\u52A8\u5C06\u9879\u76EE\u91CD\u6784\u5E76\u4F7F\u7528AndroidX\u5E93\u3002</p><h5 id="_3-androidx\u8FC1\u79FB\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-androidx\u8FC1\u79FB\u95EE\u9898" aria-hidden="true">#</a> 3. AndroidX\u8FC1\u79FB\u95EE\u9898</h5>`,21),C={href:"https://www.jianshu.com/p/7507c25fd986",target:"_blank",rel:"noopener noreferrer"},B=o("\u300AAndroid Support\u5E93\u548CAndroidX\u51B2\u7A81\u95EE\u9898\u300B"),M=a("h5",{id:"_4-androidx\u5F71\u54CD",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-androidx\u5F71\u54CD","aria-hidden":"true"},"#"),o(" 4. AndroidX\u5F71\u54CD")],-1),N=a("p",null,"\u867D\u7136\u8BF4\u76EE\u524D\u5BF9\u6211\u4EEC\u6CA1\u6709\u591A\u5927\u5F71\u54CD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E0D\u4F7F\u7528\u4ECD\u7136\u4F7F\u7528\u65E7\u7248\u672C\u7684\u652F\u6301\u5E93\uFF0C\u6BD5\u7ADF\u6CA1\u6709\u5F3A\u5236\uFF0C\u4F46\u957F\u8FDC\u6765\u770B\u8FD8\u662F\u6709\u597D\u5904\u7684\u3002AndroidX\u91CD\u65B0\u8BBE\u8BA1\u4E86\u5305\u7ED3\u6784\uFF0C\u65E8\u5728\u9F13\u52B1\u5E93\u7684\u5C0F\u578B\u5316\uFF0C\u652F\u6301\u5E93\u548C\u67B6\u6784\u7EC4\u4EF6\u5305\u7684\u540D\u5B57\u4E5F\u90FD\u7B80\u5316\u4E86\uFF1B\u800C\u4E14\u4E5F\u662F\u51CF\u8F7BAndroid\u751F\u6001\u7CFB\u7EDF\u788E\u7247\u5316\u7684\u6709\u6548\u65B9\u5F0F\u3002",-1);function O(R,T){const n=i("ExternalLinkIcon");return s(),r("div",null,[c,a("p",null,[l,a("a",u,[m,e(n)]),g,h,_,v,b]),k,a("p",null,[x,a("a",A,[y,e(n)]),f]),w,a("p",null,[X,a("a",F,[j,e(n)]),S]),V,a("p",null,[a("a",C,[B,e(n)])]),M,N])}var L=d(p,[["render",O],["__file","migrate-to-androidx.html.vue"]]);export{L as default};
