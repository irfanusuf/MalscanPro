import { analyzeThreatUsingDecisionTree } from "./DecisionTree";
import { analyzeThreatUsingLogisticRegression } from "./LogisticRegression";
import { analyzeThreatUsingNeuralNetwok } from "./NeuralNetwork";
import { analyzeThreatUsingRandomForest } from "./RandomForest";



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
  


export const analyzeThreatAndGetAverage = (data: FormData): ThreatAnalysisResult => {
    const results = [
      analyzeThreatUsingRandomForest(data),
      analyzeThreatUsingLogisticRegression(data),
      analyzeThreatUsingNeuralNetwok(data),
      analyzeThreatUsingDecisionTree(data),
    ];
  
    const totalScore = results.reduce((sum, result) => sum + result.score, 0);
    const averageScore = totalScore / results.length;
  
    const combinedBreakdown: ThreatAnalysisResult["breakdown"] = [];
  
    results.forEach((result, index) => {
      result.breakdown.forEach(entry => {
        combinedBreakdown.push({
          field: `${entry.field} (Model ${index + 1})`,
          value: entry.value,
          weight: entry.weight,
        });
      });
    });
  
    return {
      score: Math.min(1, averageScore),
      breakdown: combinedBreakdown,
    };
  };
  