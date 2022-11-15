import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faComment,
  faCalendar,
  faArrowUpRightFromSquare,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { PostContainer, PostHeader, PostInfo } from './styles'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from 'react-markdown'

const markdown = `# A demo of \`react-markdown\`
\`react-markdown\` is a markdown component for React.
👉 Changes are re-rendered as you type.
# Opa
👈 Try writing some markdown on the left.
## Overview
* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
1. Lets you define your own components (to render \`MyHeading\` instead of \`h1\`)
2. Has a lot of plugins
## Table of contents
Here is an example of a plugin in action
([\`remark-toc\`](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.
## Syntax highlighting
Here is an example of a plugin to highlight code:
[\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).
\`\`\`js
  var x = new List<int>() {1, 2, 3};
\`\`\`
Pretty neat, eh?
## GitHub flavored markdown (GFM)
For GFM, you can *also* use a plugin:
[\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.
These features **do not work by default**.
👆 Use the toggle above to add the plugin.
| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |
~~strikethrough~~
* [ ] task list
* [x] checked item
https://example.com
## HTML in markdown
⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [\`rehype-raw\`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[\`rehype-sanitize\`](https://github.com/rehypejs/rehype-sanitize).
<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>
## Components
You can pass components to change things:

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'
ReactDOM.render(
  <ReactMarkdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
    # Your markdown here
  </ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`

## More info?
Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!
***
***
***
A component by [Espen Hovlandsdal](https://espen.codes/)`

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faAngleLeft} /> Voltar
          </Link>
          <a
            href="https://github.com/kevinguedes"
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <PostInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            kevinguedes
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </PostInfo>
      </PostHeader>
      <section>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={nord as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </section>
    </PostContainer>
  )
}
