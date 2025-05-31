import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ShieldAlert, Info, TrendingUp, ServerCog } from "lucide-react";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { analyzeThreatUsingLogisticRegression } from "@/lib/LogisticRegression";
import { analyzeThreatUsingNeuralNetwok } from "@/lib/NeuralNetwork";
import { analyzeThreatUsingDecisionTree } from "@/lib/DecisionTree";
import { analyzeThreatUsingRandomForest } from "@/lib/RandomForest";
import { analyzeThreatAndGetAverage } from "@/lib/All";
import { generateDetails, generateRemedy } from "@/lib/utils";

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

const ThreatPrediction = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [result, setResult] = useState<null | {
    prediction: string;
    category: string;
    confidence: number;
    threatLevel: "low" | "medium" | "high";
    details: string;
    model: string;
    time: string;
    remedy: string;
    breakdown: { field: string; value: number | string; weight: number }[];
  }>(null);

  const [formData, setFormData] = useState<FormData>({
    static_prio: 10,
    utime: 400,
    free_area_cache: 1000,
    nvcsw: 300,
    vm_truncate_count: 100,
    maj_flt: 10,
    // end_data: 0x08000000,
    // shared_vm: 500,
    // exec_vm: 600,
    // mm_users: 1,
    // reserved_vm: 150,
    // map_count: 30,
    // last_interval: 10,
    // total_vm: 2000,
    // nivcsw: 5,
    model: "random_forest",
  });

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access the threat prediction tool.",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes("rate") ? parseFloat(value) : parseInt(value, 10),
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, model: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      let score: number;
      let breakdown: any;
      let model: string;
      let threatLevel: "low" | "medium" | "high";
      let prediction: string;
      let category: string;

      setTimeout(() => {
        if (formData.model === "random_forest") {
          ({ score, breakdown } = analyzeThreatUsingRandomForest(formData));
          model = "Random Forest";
        } else if (formData.model === "logistic_regression") {
          ({ score, breakdown } =
            analyzeThreatUsingLogisticRegression(formData));
          model = "Logistic Regression";
        } else if (formData.model === "neural_network") {
          ({ score, breakdown } = analyzeThreatUsingNeuralNetwok(formData));
          model = "Neural Network";
        } else if (formData.model === "decision_tree") {
          ({ score, breakdown } = analyzeThreatUsingDecisionTree(formData));
          model = "Decision Tree";
        } else if (formData.model === "all") {
          ({ score, breakdown } = analyzeThreatAndGetAverage(formData));
          model = "All models";
        }

        if (score < 0.3) {
          threatLevel = "low";
          prediction = "Normal Traffic";
          category = "No Malware";
        } else if (score < 0.7) {
          threatLevel = "medium";
          prediction = "Suspicious Activity";
          threatLevel = "medium";

          // Further breakdown within the malware range
          if (score < 0.4) {
            category = "Adware";
          } else if (score < 0.5) {
            category = "Spyware";
          } else if (score < 0.6) {
            category = "Worm";
          } else {
            category = "Trojan Downloader";
          }
        } else {
          threatLevel = "high";
          prediction = "Potential Attack";

          // Further breakdown within the high threat range
          if (score < 0.75) {
            category = "Trojan Horse";
          } else if (score < 0.8) {
            category = "Worm";
          } else if (score < 0.85) {
            category = "Ransomware";
          } else if (score < 0.9) {
            category = "Rootkit";
          } else {
            category = "Advanced Persistent Threat (APT)";
          }
        }

        setResult({
          prediction,
          category,
          confidence: Math.round(score * 100),
          threatLevel,
          model,
          details: generateDetails(prediction, category, formData.model),
          remedy: generateRemedy(prediction, category),
          breakdown, // ← Add this
          time: new Date().toLocaleString(),
        });

        toast({
          title: "Analysis Complete",
          description: "Threat prediction has been generated.",
        });

        setIsLoading(false);
      }, 3000); // Optional: keep a small delay for UX
    } catch (error) {
      console.error(error);
    } 
    // finally {
    //   setTimeout(() => {
    //     setResult(null);
    //   }, 20000);
    // }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />

      <div className="flex-1 py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 text-sm mb-2">
              <ShieldAlert className="w-4 h-4 text-primary" />
              <span>Advanced Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Threat Prediction
            </h1>
            <p className="text-muted-foreground">
              Predict potential security threats using machine learning
              algorithms and network traffic data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Parameters</CardTitle>
                  <CardDescription>
                    Enter network connection parameters to analyze threat
                    potential
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form
                    id="predictionForm"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="static_prio">
                          Static Priority
                          <span className="ml-1 text-xs text-muted-foreground">
                            (0–139)
                          </span>
                        </Label>
                        <Input
                          id="static_prio"
                          name="static_prio"
                          type="number"
                          value={formData.static_prio}
                          onChange={handleChange}
                          min="0"
                          max="139"
                          required
                          placeholder=" e.g  10"
                        />
                        <p className="text-xs text-muted-foreground">
                          The base priority of a process. Lower values have
                          higher priority.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="utime">
                          User Time
                          <span className="ml-1 text-xs text-muted-foreground">
                            (0–1,000,000 clock ticks)
                          </span>
                        </Label>
                        <Input
                          id="utime"
                          name="utime"
                          type="number"
                          value={formData.utime}
                          onChange={handleChange}
                          min="0"
                          max="1000000"
                          required
                          placeholder=" e.g  1000 clock ticks (without unit) "
                        />
                        <p className="text-xs text-muted-foreground">
                          Time the process has executed in user mode.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="free_area_cache">
                          Free Area Cache
                          <span className="ml-1 text-xs text-muted-foreground">
                            (0–1,000,000 KB)
                          </span>
                        </Label>
                        <Input
                          id="free_area_cache"
                          name="free_area_cache"
                          type="number"
                          value={formData.free_area_cache}
                          onChange={handleChange}
                          min="0"
                          max="1000000"
                          required
                          placeholder=" e.g  10000 kb (without unit)"
                        />
                        <p className="text-xs text-muted-foreground">
                          Amount of free memory available in the system cache.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nvcsw">
                          Voluntary Context Switches
                          <span className="ml-1 text-xs text-muted-foreground">
                            (0–100,000)
                          </span>
                        </Label>
                        <Input
                          id="nvcsw"
                          name="nvcsw"
                          type="number"
                          value={formData.nvcsw}
                          onChange={handleChange}
                          min="0"
                          max="100000"
                          required
                          placeholder=" e.g  10000 "
                        />
                        <p className="text-xs text-muted-foreground">
                          Times the process voluntarily yielded the CPU.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vm_truncate_count">
                          VM Truncate Count
                          <span className="ml-1 text-xs text-muted-foreground">
                            (0–10,000)
                          </span>
                        </Label>
                        <Input
                          id="vm_truncate_count"
                          name="vm_truncate_count"
                          type="number"
                          value={formData.vm_truncate_count}
                          onChange={handleChange}
                          min="0"
                          max="10000"
                          required
                          placeholder=" e.g  5"
                        />
                        <p className="text-xs text-muted-foreground">
                          Number of truncation operations on the virtual memory
                          area.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="maj_flt">
                          Major Page Faults
                          <span className="ml-1 text-xs text-muted-foreground">
                            (0–10,000)
                          </span>
                        </Label>
                        <Input
                          id="maj_flt"
                          name="maj_flt"
                          type="number"
                          value={formData.maj_flt}
                          onChange={handleChange}
                          min="0"
                          max="10000"
                          required
                          placeholder=" e.g  10"
                        />
                        <p className="text-xs text-muted-foreground">
                          Number of page faults requiring disk access.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model">Machine Learning Model</Label>
                      <Select
                        value={formData.model}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="decision_tree">
                            Decision Tree
                          </SelectItem>
                          <SelectItem value="random_forest">
                            Random Forest
                          </SelectItem>
                          <SelectItem value="logistic_regression">
                            Logistic Regression
                          </SelectItem>
                          <SelectItem value="neural_network">
                            Neural Network
                          </SelectItem>
                          <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        Different models may provide varying results based on
                        their algorithms
                      </p>
                    </div>
                  </form>
                </CardContent>

                <CardFooter>
                  <Button
                    form="predictionForm"
                    type="submit"
                    className="gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <ServerCog className="w-4 h-4" />
                        Analyze Traffic
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Analysis Results</CardTitle>
                  <CardDescription>
                    Threat prediction based on input parameters
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {result ? (
                    <div className="space-y-6">
                      <div className="text-center py-3">
                        <div
                          className={`inline-flex items-center justify-center rounded-full p-4 mb-2
                        ${
                          result.threatLevel === "low"
                            ? "bg-green-500/20 text-green-500"
                            : result.threatLevel === "medium"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-red-500/20 text-red-500"
                        }`}
                        >
                          {result.threatLevel === "low" ? (
                            <ShieldAlert className="w-8 h-8" />
                          ) : result.threatLevel === "medium" ? (
                            <Info className="w-8 h-8" />
                          ) : (
                            <TrendingUp className="w-8 h-8" />
                          )}
                        </div>

                        <h3 className="text-2xl font-bold mb-1">
                          {result.model}
                        </h3>

                        <h3 className="text-2xl font-bold mb-1">
                          {result.prediction}
                        </h3>

                        <p className="text-muted-foreground">
                          Confidence: {result.confidence}%
                        </p>
                      </div>

                      <div className="space-y-3">
                        {/* Threat Level Meter */}
                        <div>
                          <div className="text-sm font-medium mb-1">
                            Threat Level
                          </div>
                          <div className="w-full bg-secondary/30 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${
                                result.threatLevel === "low"
                                  ? "bg-green-500"
                                  : result.threatLevel === "medium"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${result.confidence}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Low</span>
                            <span>Medium</span>
                            <span>High</span>
                          </div>
                        </div>

                        {/* // Score Breakdown */}
                        {result.breakdown?.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">
                              Score Breakdown
                            </h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {[...result.breakdown]
                                .sort((a, b) => b.weight - a.weight)
                                .map((item, index) => (
                                  <li
                                    key={index}
                                    className="flex justify-between"
                                  >
                                    <span>
                                      {item.field.replace(/_/g, " ")}:{" "}
                                      <strong>{item.value}</strong>
                                    </span>
                                    <span className="text-right">
                                      +{item.weight.toFixed(2)}
                                    </span>
                                  </li>
                                ))}
                              <li className="flex justify-between border-t pt-1 font-medium text-foreground">
                                <span>Total</span>
                                <span>
                                  {result.breakdown
                                    .reduce((sum, item) => sum + item.weight, 0)
                                    .toFixed(2)}
                                </span>
                              </li>
                            </ul>
                          </div>
                        )}  

                        {/* Result Details */}
                        <div className="p-4 bg-secondary/30 rounded-lg text-sm">
                         <p className="pb-1 "> <b> Details and Category  </b>  </p> 
                         <p> {result.details} </p> 
                        </div>

                        {/* remedy Details */}
                        <div className="p-4 bg-secondary/30 rounded-lg text-sm">
                           <p className="pb-1">  <b>Remedy   </b> </p> 
                          <p>  {result.remedy}</p>
                        </div>

                        {/* Footer Info */}
                        <div className="text-xs text-muted-foreground">
                          <p>
                            Analysis performed using{" "}
                            {result.model.replace("_", " ")} algorithm
                          </p>
                          <p>Timestamp: {result.time}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      <ServerCog className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      {!isLoading ? (
                        <p>
                          Enter parameters and click "Analyze Traffic" to
                          generate a prediction
                        </p>
                      ) : (
                        <p>Analyzing...</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThreatPrediction;
