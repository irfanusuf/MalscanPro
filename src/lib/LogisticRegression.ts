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

// Logistic Regression-style threat analysis
export const analyzeThreatUsingLogisticRegression = (
  data: FormData
): ThreatAnalysisResult => {
  let z = 0;
  const breakdown: ThreatAnalysisResult["breakdown"] = [];

  const scale = (value: number, min: number, max: number): number => {
    const clamped = Math.max(min, Math.min(value, max));
    return (clamped - min) / (max - min); // scale to [0, 1]
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

  // Feature weights (mimicking a trained logistic regression model)
  add("static_prio", data.static_prio, 0, 140, 2.0, true);      // lower = worse
  add("utime", data.utime, 0, 1000, 1.0);                       // more = worse
  add("free_area_cache", data.free_area_cache, 0, 5000, 1.0, true); // less = worse
  add("nvcsw", data.nvcsw, 0, 1000, 2.0);                       // more = worse
  add("vm_truncate_count", data.vm_truncate_count, 0, 100, 1.5);    // more = worse
  add("maj_flt", data.maj_flt, 0, 50, 1.5);                     // more = worse

  // Bias term
  const bias = -3; // Adjust this to shift overall threat level
  z += bias;

  // Sigmoid function to get probability
  const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x));
  const probability = sigmoid(z);

  return {
    score: Math.min(1, probability),
    breakdown,
  };
};
