import type { MarkdownHeading } from 'astro'

export interface TocItem extends MarkdownHeading {
  children: TocItem[]
}

interface TocOpts {
  maxHeadingLevel?: number | undefined
  minHeadingLevel?: number | undefined
}

/** Inject a ToC entry as deep in the tree as its `depth` property requires. */
function injectChild(items: TocItem[], item: TocItem): void {
  const lastItem = items.at(-1)
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item)
  } else {
    injectChild(lastItem.children, item)
  }
}

export function generateToc(
  headings: ReadonlyArray<MarkdownHeading>,
  { maxHeadingLevel = 4, minHeadingLevel = 2 }: TocOpts = {}
): TocItem[] {
  const bodyHeadings = headings.filter(
    ({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel
  )
  const toc: TocItem[] = []

  for (const heading of bodyHeadings) {
    injectChild(toc, { ...heading, children: [] })
  }

  return toc
}
