import { Flow } from "./types";

export async function runFlow(flow: Flow) {
  const outputs: Record<string, any> = {};

  for (const node of flow.nodes) {
    switch (node.type) {
      case "source":
        outputs[node.id] = node.data.text || "Hello AI";
        break;

      case "ai":
        outputs[node.id] = `AI(${node.data.model}): ${
          outputs[node.data.input] || ""
        }`;
        break;

      case "transform":
        const input = outputs[node.data.input];
        if (node.data.mode === "lowercase") {
          outputs[node.id] = input.toLowerCase();
        } else if (node.data.mode === "uppercase") {
          outputs[node.id] = input.toUpperCase();
        } else {
          outputs[node.id] = input;
        }
        break;

      case "output":
        outputs[node.id] = outputs[node.data.input];
        break;
    }
  }

  return outputs;
}
