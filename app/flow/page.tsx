import FlowCanvas from "./canvas";

export default function FlowPage() {
  return (
    <div className="h-screen flex flex-col">
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Flow Builder</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Run Flow
        </button>
      </header>
      <FlowCanvas />
    </div>
  );
}
