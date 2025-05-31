

interface FormData {
    static_prio: number;
    utime: number;
    free_area_cache: number;
    nvcsw: number;
    vm_truncate_count: number;
    maj_flt: number;
    // end_data: number;
    // shared_vm: number;
    // exec_vm: number;
    // mm_users: number;
    // reserved_vm: number;
    // map_count: number;
    // last_interval: number;
    // total_vm: number;
    // nivcsw: number;
    model: string;
  }


interface ThreatAnalysisResult {
    score: number;
    breakdown: { field: string; value: number | string; weight: number }[];
  }
  
  interface FormData {
    static_prio: number;
    utime: number;
    free_area_cache: number;
    nvcsw: number;
    vm_truncate_count: number;
    maj_flt: number;
  }
  
  export  const analyzeThreat= (data: FormData): ThreatAnalysisResult => {
    let score = 0;
    const breakdown: ThreatAnalysisResult["breakdown"] = [];
  
    const scale = (value: number, min: number, max: number): number => {
      const clamped = Math.max(min, Math.min(value, max));
      return (clamped - min) / (max - min); // 0 to 1
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
      if (invert) normalized = 1 - normalized; // for inverse correlation
      const weightedScore = normalized * weight;
      breakdown.push({ field, value, weight: weightedScore });
      score += weightedScore;
    };
  
    // Field contributions (range-based)
    add("static_prio", data.static_prio, 0, 140, 0.1, true); // lower prio = worse
    add("utime", data.utime, 0, 1000, 0.05);                 // more user time = worse
    add("free_area_cache", data.free_area_cache, 0, 5000, 0.05, true); // lower cache = worse
    add("nvcsw", data.nvcsw, 0, 1000, 0.1);                  // high context switch = worse
    add("vm_truncate_count", data.vm_truncate_count, 0, 100, 0.1);     // high = worse
    add("maj_flt", data.maj_flt, 0, 50, 0.1);                // more page faults = worse
  
    return {
      score: Math.min(1, score),
      breakdown,
    };
  };
  