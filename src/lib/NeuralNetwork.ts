// Interfaces
interface FormData {
  static_prio: number;
  utime: number;
  free_area_cache: number;
  nvcsw: number;
  vm_truncate_count: number;
  maj_flt: number;
  model: string;
}

interface ThreatAnalysisResult {
  score: number;
  breakdown: { field: string; value: number | string; weight: number }[];
}

// Activation Functions
const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x));
const relu = (x: number): number => Math.max(0, x);

// Input scaling
const scale = (value: number, min: number, max: number): number => {
  const clamped = Math.max(min, Math.min(value, max));
  return (clamped - min) / (max - min);
};

// Simulated Neural Network
export const analyzeThreatUsingNeuralNetwok = (
  data: FormData
): ThreatAnalysisResult => {
  const breakdown: ThreatAnalysisResult["breakdown"] = [];

  // Step 1: Normalize inputs
  const inputs = {
    static_prio: scale(data.static_prio, 0, 140),
    utime: scale(data.utime, 0, 1000),
    free_area_cache: 1 - scale(data.free_area_cache, 0, 5000), // invert
    nvcsw: scale(data.nvcsw, 0, 1000),
    vm_truncate_count: scale(data.vm_truncate_count, 0, 100),
    maj_flt: scale(data.maj_flt, 0, 50),
  };

  // Step 2: Simulate hidden layer
  const hiddenNeuron1 =
    inputs.static_prio * 0.4 +
    inputs.utime * 0.2 +
    inputs.free_area_cache * 0.3;
  const hiddenNeuron2 =
    inputs.nvcsw * 0.3 +
    inputs.vm_truncate_count * 0.3 +
    inputs.maj_flt * 0.4;

  const hiddenOutputs = [relu(hiddenNeuron1), relu(hiddenNeuron2)];

  // Step 3: Output layer (single score neuron)
  const output =
    hiddenOutputs[0] * 0.5 + hiddenOutputs[1] * 0.5; // Equal weighting
  const score = sigmoid(output); // Final threat score between 0–1

  // Step 4: Build breakdown for explanation
  breakdown.push(
    { field: "static_prio", value: data.static_prio, weight: inputs.static_prio * 0.4 },
    { field: "utime", value: data.utime, weight: inputs.utime * 0.2 },
    { field: "free_area_cache", value: data.free_area_cache, weight: inputs.free_area_cache * 0.3 },
    { field: "nvcsw", value: data.nvcsw, weight: inputs.nvcsw * 0.3 },
    { field: "vm_truncate_count", value: data.vm_truncate_count, weight: inputs.vm_truncate_count * 0.3 },
    { field: "maj_flt", value: data.maj_flt, weight: inputs.maj_flt * 0.4 }
  );

  return {
    score: Math.min(1, score),
    breakdown,
  };
};
