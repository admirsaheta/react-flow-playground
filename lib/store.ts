import { create } from "zustand";
import { Flow } from "./types";

interface FlowState {
  flow: Flow;
  setFlow: (flow: Flow) => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  flow: { id: "sahi", nodes: [], edges: [] },
  setFlow: (flow) => set({ flow }),
}));
