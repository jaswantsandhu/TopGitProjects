interface NodeType {
  node: any; // Replace 'any' with actual type if known
}

export const flattenNode = (nodes: NodeType[]): any[] => nodes.map(item => item.node);
