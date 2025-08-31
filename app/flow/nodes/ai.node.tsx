"use client";
import { Handle, NodeProps, Position } from "reactflow";

export default function AINode({ data }: NodeProps) {
  return (
    <div className="rounded-xl bg-white shadow-md p-3 border border-gray-200">
      <h3 className="font-semibold">AI Provider</h3>
      <select
        value={data.model || ""}
        onChange={(e) => (data.model = e.target.value)}
        className="border rounded px-2 py-1 w-full mt-2"
      >
        <option value="gpt-4">OpenAI GPT-4</option>
        <option value="claude">Anthropic Claude</option>
        <option value="llama">LLaMA</option>
      </select>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
