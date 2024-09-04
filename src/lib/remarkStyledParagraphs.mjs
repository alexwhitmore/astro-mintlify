import { visit } from 'unist-util-visit'

export default function remarkStyledElements() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'heading' && node.depth === 2) {
        node.data = node.data || {}
        node.data.hProperties = node.data.hProperties || {}
        node.data.hProperties.className =
          'scroll-m-36 text-3xl font-extrabold tracking-tight lg:text-4xl mt-6 mb-2'
        // Generate an id from the heading text
        node.data.hProperties.id = node.children[0].value
          .toLowerCase()
          .replace(/\s+/g, '-')
      } else if (node.type === 'paragraph') {
        node.data = node.data || {}
        node.data.hProperties = node.data.hProperties || {}
        node.data.hProperties.className = 'font-base text-muted-foreground'
      }
    })
  }
}
