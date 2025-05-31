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
  breakdown: { field: string; value: number | string; tree: number; weight: number }[];
}

export const analyzeThreatUsingRandomForest = (data: FormData): ThreatAnalysisResult => {
  let score = 0;
  const breakdown: ThreatAnalysisResult["breakdown"] = [];

  const trees = [
    // Tree 1: High Priority Risk Tree
    () => {
      let weight = 0;
      if (data.static_prio < 50) weight += 0.1;
      if (data.maj_flt > 10) weight += 0.1;
      breakdown.push({ field: "High Priority Risk Tree", value: "match", tree: 1, weight });
      return weight;
    },

    // Tree 2: Memory Pressure Tree
    () => {
      let weight = 0;
      if (data.free_area_cache < 1000) weight += 0.1;
      if (data.utime > 500) weight += 0.05;
      breakdown.push({ field: "Memory Pressure Tree", value: "match", tree: 2, weight });
      return weight;
    },

    // Tree 3: High Context Switch Activity Tree
    () => {
      let weight = 0;
      if (data.vm_truncate_count > 20 && data.nvcsw > 100) weight += 0.15;
      breakdown.push({ field: "High Context Switch Tree", value: "match", tree: 3, weight });
      return weight;
    },

    // Tree 4: Low Fault but Low Priority Tree (Weak Learner)
    () => {
      let weight = 0;
      if (data.static_prio > 100 && data.maj_flt < 3) weight += 0.03;
      breakdown.push({ field: "Low Fault Low Priority Tree", value: "match", tree: 4, weight });
      return weight;
    },

    // Tree 5: Low Switch & Truncate Activity Tree (Edge Case)
    () => {
      let weight = 0;
      if (data.nvcsw < 20 && data.vm_truncate_count < 5) weight += 0.07;
      breakdown.push({ field: "Low Activity Edge Case Tree", value: "match", tree: 5, weight });
      return weight;
    },

    // Tree 6: Multi-Metric Threat Pattern Tree
    () => {
      let weight = 0;
      if (
        data.free_area_cache < 3000 &&
        data.utime > 300 &&
        data.static_prio < 30
      ) {
        weight += 0.12;
      }
      breakdown.push({ field: "Multi-Metric Threat Tree", value: "match", tree: 6, weight });
      return weight;
    },
  ];

  for (const tree of trees) {
    score += tree();
  }

  return {
    score: Math.min(1, score),
    breakdown,
  };
};
