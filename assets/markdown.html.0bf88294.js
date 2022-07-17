import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c,a as n,d as e,w as t,e as l,b as s,r as o}from"./app.8cef77d0.js";const p={},u=l(`<h1 id="markdown-extensions" tabindex="-1"><a class="header-anchor" href="#markdown-extensions" aria-hidden="true">#</a> Markdown Extensions</h1><p>VitePress comes with built in Markdown Extensions.</p><h2 id="header-anchors" tabindex="-1"><a class="header-anchor" href="#header-anchors" aria-hidden="true">#</a> Header Anchors</h2><p>Headers automatically get anchor links applied. Rendering of anchors can be configured using the <code>markdown.anchor</code> option.</p><h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h2><p>Both internal and external links gets special treatments.</p><h3 id="internal-links" tabindex="-1"><a class="header-anchor" href="#internal-links" aria-hidden="true">#</a> Internal Links</h3><p>Internal links are converted to router link for SPA navigation. Also, every <code>index.md</code> contained in each sub-directory will automatically be converted to <code>index.html</code>, with corresponding URL <code>/</code>.</p><p>For example, given the following directory structure:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500 index.md
\u251C\u2500 foo
\u2502  \u251C\u2500 index.md
\u2502  \u251C\u2500 one.md
\u2502  \u2514\u2500 two.md
\u2514\u2500 bar
   \u251C\u2500 index.md
   \u251C\u2500 three.md
   \u2514\u2500 four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And providing you are in <code>foo/one.md</code>:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- sends the user to the root index.md --&gt;</span>
<span class="token url">[<span class="token content">foo</span>](<span class="token url">/foo/</span>)</span> <span class="token comment">&lt;!-- sends the user to index.html of directory foo --&gt;</span>
<span class="token url">[<span class="token content">foo heading</span>](<span class="token url">./#heading</span>)</span> <span class="token comment">&lt;!-- anchors user to a heading in the foo index file --&gt;</span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three</span>)</span> <span class="token comment">&lt;!-- you can omit extention --&gt;</span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three.md</span>)</span> <span class="token comment">&lt;!-- you can append .md --&gt;</span>
<span class="token url">[<span class="token content">bar - four</span>](<span class="token url">../bar/four.html</span>)</span> <span class="token comment">&lt;!-- or you can append .html --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="page-suffix" tabindex="-1"><a class="header-anchor" href="#page-suffix" aria-hidden="true">#</a> Page Suffix</h3><p>Pages and internal links get generated with the <code>.html</code> suffix by default.</p><h3 id="external-links" tabindex="-1"><a class="header-anchor" href="#external-links" aria-hidden="true">#</a> External Links</h3><p>Outbound links automatically get <code>target=&quot;_blank&quot; rel=&quot;noreferrer&quot;</code>:</p>`,16),v={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},m=s("vuejs.org"),h={href:"https://github.com/vuejs/vitepress",target:"_blank",rel:"noopener noreferrer"},g=s("VitePress on GitHub"),b=n("h2",{id:"frontmatter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),s(" Frontmatter")],-1),k={href:"https://jekyllrb.com/docs/front-matter/",target:"_blank",rel:"noopener noreferrer"},f=s("YAML frontmatter"),_=s(" is supported out of the box:"),x=l(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> Blogging Like a Hacker
<span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This data will be available to the rest of the page, along with all custom and theming components.</p><p>For more details, see <a href="./frontmatter">Frontmatter</a>.</p><h2 id="github-style-tables" tabindex="-1"><a class="header-anchor" href="#github-style-tables" aria-hidden="true">#</a> GitHub-Style Tables</h2><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji \u{1F389}</h2><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:tada: :100:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p>\u{1F389} \u{1F4AF}</p>`,13),y=s("A "),w={href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"},j=s("list of all emojis"),C=s(" is available."),T=l(`<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of Contents</h2><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,4),I={class:"table-of-contents"},H=s("Header Anchors"),S=s("Links"),q=s("Internal Links"),L=s("Page Suffix"),P=s("External Links"),A=s("Frontmatter"),O=s("GitHub-Style Tables"),V=s("Emoji \u{1F389}"),B=s("Table of Contents"),E=s("Custom Containers"),M=s("Default Title"),N=s("Custom Title"),Y=s("Syntax Highlighting in Code Blocks"),D=s("Line Highlighting in Code Blocks"),F=s("Line Numbers"),z=s("Import Code Snippets"),$=s("Markdown File Inclusion"),G=s("Advanced Configuration"),R=l(`<p>Rendering of the TOC can be configured using the <code>markdown.toc</code> option.</p><h2 id="custom-containers" tabindex="-1"><a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a> Custom Containers</h2><p>Custom containers can be defined by their types, titles, and contents.</p><h3 id="default-title" tabindex="-1"><a class="header-anchor" href="#default-title" aria-hidden="true">#</a> Default Title</h3><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container info"><p class="custom-container-title">Info</p><p>This is an info box.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>This is a tip.</p></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This is a dangerous warning.</p></div><div class="custom-container danger"><p class="custom-container-title">Warning</p><p>This is a dangerous warning.</p></div><details class="custom-container details"><summary>Details</summary><p>This is a details block.</p></details><h3 id="custom-title" tabindex="-1"><a class="header-anchor" href="#custom-title" aria-hidden="true">#</a> Custom Title</h3><p>You may set custom title by appending the text right after the &quot;type&quot; of the container.</p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VitePress!&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="custom-container details"><summary>Click me to view the code</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VitePress!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="syntax-highlighting-in-code-blocks" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting-in-code-blocks" aria-hidden="true">#</a> Syntax Highlighting in Code Blocks</h2>`,20),U=s("VitePress uses "),W={href:"https://shiki.matsu.io/",target:"_blank",rel:"noopener noreferrer"},J=s("Shiki"),K=s(" to highlight language syntax in Markdown code blocks, using coloured text. Shiki supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:"),Q=l(`<p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\`js
export default {
  name: &#39;MyComponent&#39;,
  // ...
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\`html
&lt;ul&gt;
  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;
    {{ todo.text }}
  &lt;/li&gt;
&lt;/ul&gt;
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MyComponent&#39;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),X=s("A "),Z={href:"https://github.com/shikijs/shiki/blob/main/docs/languages.md",target:"_blank",rel:"noopener noreferrer"},nn=s("list of valid languages"),sn=s(" is available on Shiki\u2019s repository."),en=l(`<p>You may also customize syntax highlight theme in app config. Please see <a href="../config/app-configs#markdown"><code>markdown</code> options</a> for more details.</p><h2 id="line-highlighting-in-code-blocks" tabindex="-1"><a class="header-anchor" href="#line-highlighting-in-code-blocks" aria-hidden="true">#</a> Line Highlighting in Code Blocks</h2><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\`js{4}
export default {
  data () {
    return {
      msg: &#39;Highlighted!&#39;
    }
  }
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition to a single line, you can also specify multiple single lines, ranges, or both:</p><ul><li>Line ranges: for example <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li>Multiple single lines: for example <code>{4,7,9}</code></li><li>Line ranges and single lines: for example <code>{4,7-13,16,23-27,40}</code></li></ul><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\`js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: \`Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.\`,
      motd: &#39;VitePress is awesome&#39;,
      lorem: &#39;ipsum&#39;
    }
  }
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">&#39;VitePress is awesome&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">&#39;ipsum&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="line-numbers" tabindex="-1"><a class="header-anchor" href="#line-numbers" aria-hidden="true">#</a> Line Numbers</h2><p>You can enable line numbers for each code blocks via config:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please see <a href="../config/app-configs#markdown"><code>markdown</code> options</a> for more details.</p><h2 id="import-code-snippets" tabindex="-1"><a class="header-anchor" href="#import-code-snippets" aria-hidden="true">#</a> Import Code Snippets</h2><p>You can import code snippets from existing files via following syntax:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>&lt;&lt;&lt; @/filepath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It also supports <a href="#line-highlighting-in-code-blocks">line highlighting</a>:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>&lt;&lt;&lt; @/filepath{highlightLines}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>&lt;&lt;&lt; @/snippets/snippet.js{2}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Code file</strong></p><p>&lt;&lt;&lt; @/snippets/snippet.js</p><p><strong>Output</strong></p><p>&lt;&lt;&lt; @/snippets/snippet.js{2}</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The value of <code>@</code> corresponds to the source root. By default it&#39;s the VitePress project root, unless <code>srcDir</code> is configured.</p></div>`,28),an=s("You can also use a "),tn={href:"https://code.visualstudio.com/docs/editor/codebasics#_folding",target:"_blank",rel:"noopener noreferrer"},ln=s("VS Code region"),on=s(" to only include the corresponding part of the code file. You can provide a custom region name after a "),dn=n("code",null,"#",-1),rn=s(" following the filepath:"),cn=l(`<p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>&lt;&lt;&lt; @/snippets/snippet-with-region.js#snippet{1}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Code file</strong></p><p>&lt;&lt;&lt; @/snippets/snippet-with-region.js</p><p><strong>Output</strong></p><p>&lt;&lt;&lt; @/snippets/snippet-with-region.js#snippet{1}</p><h2 id="markdown-file-inclusion" tabindex="-1"><a class="header-anchor" href="#markdown-file-inclusion" aria-hidden="true">#</a> Markdown File Inclusion</h2><p>You can include a markdown file in another markdown file like this:</p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Docs</span>

<span class="token title important"><span class="token punctuation">##</span> Basics</span>

<span class="token comment">&lt;!--@include: ./parts/basics.md--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Part file</strong> (<code>parts/basics.md</code>)</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Some getting started stuff.

<span class="token title important"><span class="token punctuation">###</span> Configuration</span>

Can be created using <span class="token code-snippet code keyword">\`.foorc.json\`</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Equivalent code</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Docs</span>

<span class="token title important"><span class="token punctuation">##</span> Basics</span>

Some getting started stuff.

<span class="token title important"><span class="token punctuation">###</span> Configuration</span>

Can be created using <span class="token code-snippet code keyword">\`.foorc.json\`</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Note that this does not throw errors if your file is not present. Hence, when using this feature make sure that the contents are being rendered as expected.</p></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a> Advanced Configuration</h2>`,16),pn=s("VitePress uses "),un={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},vn=s("markdown-it"),mn=s(" as the Markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the "),hn=n("code",null,"markdown-it",-1),gn=s(" instance using the "),bn=n("code",null,"markdown",-1),kn=s(" option in "),fn=n("code",null,".vitepress/config.js",-1),_n=s(":"),xn=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> anchor <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-anchor&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// options for markdown-it-anchor</span>
    <span class="token comment">// https://github.com/valeriangalliat/markdown-it-anchor#permalinks</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">permalink</span><span class="token operator">:</span> anchor<span class="token punctuation">.</span>permalink<span class="token punctuation">.</span><span class="token function">headerLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// options for markdown-it-toc-done-right</span>
    <span class="token literal-property property">toc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// use more markdown-it plugins!</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See full list of configurable properties in <a href="../config/app-configs#markdown">Configs: App Configs</a>.</p>`,2);function yn(wn,jn){const i=o("ExternalLinkIcon"),a=o("router-link");return r(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",v,[m,e(i)])]),n("li",null,[n("a",h,[g,e(i)])])]),b,n("p",null,[n("a",k,[f,e(i)]),_]),x,n("p",null,[y,n("a",w,[j,e(i)]),C]),T,n("nav",I,[n("ul",null,[n("li",null,[e(a,{to:"#header-anchors"},{default:t(()=>[H]),_:1})]),n("li",null,[e(a,{to:"#links"},{default:t(()=>[S]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#internal-links"},{default:t(()=>[q]),_:1})]),n("li",null,[e(a,{to:"#page-suffix"},{default:t(()=>[L]),_:1})]),n("li",null,[e(a,{to:"#external-links"},{default:t(()=>[P]),_:1})])])]),n("li",null,[e(a,{to:"#frontmatter"},{default:t(()=>[A]),_:1})]),n("li",null,[e(a,{to:"#github-style-tables"},{default:t(()=>[O]),_:1})]),n("li",null,[e(a,{to:"#emoji"},{default:t(()=>[V]),_:1})]),n("li",null,[e(a,{to:"#table-of-contents"},{default:t(()=>[B]),_:1})]),n("li",null,[e(a,{to:"#custom-containers"},{default:t(()=>[E]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#default-title"},{default:t(()=>[M]),_:1})]),n("li",null,[e(a,{to:"#custom-title"},{default:t(()=>[N]),_:1})])])]),n("li",null,[e(a,{to:"#syntax-highlighting-in-code-blocks"},{default:t(()=>[Y]),_:1})]),n("li",null,[e(a,{to:"#line-highlighting-in-code-blocks"},{default:t(()=>[D]),_:1})]),n("li",null,[e(a,{to:"#line-numbers"},{default:t(()=>[F]),_:1})]),n("li",null,[e(a,{to:"#import-code-snippets"},{default:t(()=>[z]),_:1})]),n("li",null,[e(a,{to:"#markdown-file-inclusion"},{default:t(()=>[$]),_:1})]),n("li",null,[e(a,{to:"#advanced-configuration"},{default:t(()=>[G]),_:1})])])]),R,n("p",null,[U,n("a",W,[J,e(i)]),K]),Q,n("p",null,[X,n("a",Z,[nn,e(i)]),sn]),en,n("p",null,[an,n("a",tn,[ln,e(i)]),on,dn,rn]),cn,n("p",null,[pn,n("a",un,[vn,e(i)]),mn,hn,gn,bn,kn,fn,_n]),xn])}var In=d(p,[["render",yn],["__file","markdown.html.vue"]]);export{In as default};
