const ALLOWED = new Set(['center'])

export function remarkDirectiveClasses() {
  return (tree) => {
    const walk = (node) => {
      if (
        (node.type === 'containerDirective' || node.type === 'leafDirective') &&
        ALLOWED.has(node.name)
      ) {
        const data = node.data || (node.data = {})
        const width = node.attributes?.width
        data.hName = 'div'
        data.hProperties = width
          ? { class: `${node.name} sized`, style: `--w: ${width}` }
          : { class: node.name }
      }
      node.children?.forEach(walk)
    }
    walk(tree)
  }
}
