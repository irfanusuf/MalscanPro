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

// Decision Tree-based Simulation
export const analyzeThreatUsingDecisionTree = (
  data: FormData
): ThreatAnalysisResult => {
  let score = 0;
  const breakdown: ThreatAnalysisResult["breakdown"] = [];

  // Simulated decision rules
  if (data.static_prio < 30) {
    score += 0.1;
    breakdown.push({ field: "static_prio", value: data.static_prio, weight: 0.1 });
  } else if (data.static_prio < 80) {
    score += 0.05;
    breakdown.push({ field: "static_prio", value: data.static_prio, weight: 0.05 });
  }

  if (data.utime > 800) {
    score += 0.1;
    breakdown.push({ field: "utime", value: data.utime, weight: 0.1 });
  } else if (data.utime > 400) {
    score += 0.05;
    breakdown.push({ field: "utime", value: data.utime, weight: 0.05 });
  }

  if (data.free_area_cache < 500) {
    score += 0.1;
    breakdown.push({ field: "free_area_cache", value: data.free_area_cache, weight: 0.1 });
  } else if (data.free_area_cache < 2000) {
    score += 0.05;
    breakdown.push({ field: "free_area_cache", value: data.free_area_cache, weight: 0.05 });
  }

  if (data.nvcsw > 300) {
    score += 0.1;
    breakdown.push({ field: "nvcsw", value: data.nvcsw, weight: 0.1 });
  } else if (data.nvcsw > 100) {
    score += 0.05;
    breakdown.push({ field: "nvcsw", value: data.nvcsw, weight: 0.05 });
  }

  if (data.vm_truncate_count > 30) {
    score += 0.1;
    breakdown.push({ field: "vm_truncate_count", value: data.vm_truncate_count, weight: 0.1 });
  } else if (data.vm_truncate_count > 10) {
    score += 0.05;
    breakdown.push({ field: "vm_truncate_count", value: data.vm_truncate_count, weight: 0.05 });
  }

  if (data.maj_flt > 20) {
    score += 0.1;
    breakdown.push({ field: "maj_flt", value: data.maj_flt, weight: 0.1 });
  } else if (data.maj_flt > 5) {
    score += 0.05;
    breakdown.push({ field: "maj_flt", value: data.maj_flt, weight: 0.05 });
  }

  return {
    score: Math.min(1, score),
    breakdown,
  };
};
