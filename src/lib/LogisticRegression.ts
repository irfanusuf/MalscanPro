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

export const analyzeThreatUsingLogisticRegression = (
  data: FormData
): ThreatAnalysisResult => {
  let z = 0;
  const breakdown: ThreatAnalysisResult["breakdown"] = [];

  const scale = (value: number, min: number, max: number): number => {
    const clamped = Math.max(min, Math.min(value, max));
    return (clamped - min) / (max - min);
  };

  const add = (
    field: keyof FormData,
    value: number,
    min: number,
    max: number,
    weight: number,
    invert = false
  ) => {
    let normalized = scale(value, min, max);
    if (invert) normalized = 1 - normalized;
    const contribution = normalized * weight;
    breakdown.push({ field, value, weight: contribution });
    z += contribution;
  };

  // ⚖️ Much Softer Feature Weights
  add("static_prio", data.static_prio, 0, 140, 0.6, true);
  add("utime", data.utime, 0, 1000, 0.4);
  add("free_area_cache", data.free_area_cache, 0, 5000, 0.3, true);
  add("nvcsw", data.nvcsw, 0, 1000, 0.6);
  add("vm_truncate_count", data.vm_truncate_count, 0, 100, 0.5);
  add("maj_flt", data.maj_flt, 0, 50, 0.4);

  // 🧘 Softer Bias
  const bias = -1;
  z += bias;

  const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x));
  const probability = sigmoid(z);

  return {
    score: Math.min(1, probability),
    breakdown,
  };
};
