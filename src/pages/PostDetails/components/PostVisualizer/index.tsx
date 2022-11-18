import { PostViewerContainer } from './styles'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostViewerProps {
  markdown: string
}

export function PostViewer({ markdown }: PostViewerProps) {
  return (
    <PostViewerContainer>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, title, children }) {
            return (
              <a href={href} title={title} target="_blank" rel="noreferrer">
                {children}
              </a>
            )
          },
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
    </PostViewerContainer>
  )
}
