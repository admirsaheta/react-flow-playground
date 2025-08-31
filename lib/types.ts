export type NodeType = "source" | "ai" | "transform" | "output";

export type Flow = {
  id: string;
  nodes: Array<{
    id: string;
    type: NodeType;
    position: { x: number; y: number };
    data: Record<string, any>;
  }>;
  edges: Array<{
    id: string;
    source: string;
    target: string;
  }>;
};
