
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

interface FormData {
  srv_count: number;
  dst_host_count: number;
  diff_srv_rate: number;
  dst_host_serror_rate: number;
  model: string;
}

const ThreatPrediction = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | {
    prediction: string;
    confidence: number;
    threatLevel: 'low' | 'medium' | 'high';
    details: string;
  }>(null);
  
  const [formData, setFormData] = useState<FormData>({
    srv_count: 5,
    dst_host_count: 100,
    diff_srv_rate: 0.05,
    dst_host_serror_rate: 0.01,
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
      [name]: name.includes("rate") ? parseFloat(value) : parseInt(value, 10) 
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, model: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate ML model processing
    setTimeout(() => {
      // This would be a real ML prediction in a production app
      const threatScore = Math.random();
      let threatLevel: 'low' | 'medium' | 'high';
      let prediction: string;
      
      if (threatScore < 0.3) {
        threatLevel = 'low';
        prediction = "Normal Traffic";
      } else if (threatScore < 0.7) {
        threatLevel = 'medium';
        prediction = "Suspicious Activity";
      } else {
        threatLevel = 'high';
        prediction = "Potential Attack";
      }
      
      setResult({
        prediction,
        confidence: Math.round(threatScore * 100),
        threatLevel,
        details: `Based on the ${formData.model.replace('_', ' ')} model, the analysis indicates a ${prediction.toLowerCase()} pattern.`
      });
      
      toast({
        title: "Analysis Complete",
        description: "Threat prediction has been generated.",
      });
      
      setIsLoading(false);
    }, 1500);
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Threat Prediction</h1>
            <p className="text-muted-foreground">
              Predict potential security threats using machine learning algorithms and network traffic data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Parameters</CardTitle>
                  <CardDescription>
                    Enter network connection parameters to analyze threat potential
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form id="predictionForm" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">



                      <div className="space-y-2">
                        <Label htmlFor="srv_count">
                          {/* Services Count */} Static Priority
                          <span className="ml-1 text-xs text-muted-foreground">(1-100)</span>
                        </Label>
                        <Input 
                          id="srv_count"
                          name="srv_count"
                          type="number"
                          value={formData.srv_count}
                          onChange={handleChange}
                          min="1"
                          max="100"
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          {/* Number of connections to the same service */}
                          The basic priority of a process , unaffected by dynamci scheduling
                        </p>
                      </div>




                      
                      <div className="space-y-2">
                        <Label htmlFor="dst_host_count">
                          {/* Destination Host Count */}
                          VM truncate Count
                          <span className="ml-1 text-xs text-muted-foreground">(1-500)</span>
                        </Label>
                        <Input 
                          id="dst_host_count"
                          name="dst_host_count"
                          type="number"
                          value={formData.dst_host_count}
                          onChange={handleChange}
                          min="1"
                          max="500"
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          {/* Number of connections to the same destination host */}

                          The number of truncation operations performed on the virtual memory area 
                        </p>
                      </div>
                      



                      
                      <div className="space-y-2">
                        <Label htmlFor="dst_host_count">
                          {/* Destination Host Count */}
                          Shared Virtual Memory
                          <span className="ml-1 text-xs text-muted-foreground">(1-500)</span>
                        </Label>
                        <Input 
                          id="dst_host_count"
                          name="dst_host_count"
                          type="number"
                          value={formData.dst_host_count}
                          onChange={handleChange}
                          min="1"
                          max="500"
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          {/* Number of connections to the same destination host */}

                         The size of the Memory shared among the processes in the system
                        </p>
                      </div>



                      <div className="space-y-2">
                        <Label htmlFor="diff_srv_rate">
                          Different Services Rate
                          <span className="ml-1 text-xs text-muted-foreground">(0-1)</span>
                        </Label>
                        <Input 
                          id="diff_srv_rate"
                          name="diff_srv_rate"
                          type="number"
                          step="0.01"
                          value={formData.diff_srv_rate}
                          onChange={handleChange}
                          min="0"
                          max="1"
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          Percentage of connections to different services
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dst_host_serror_rate">
                          Destination Host S.Error Rate
                          <span className="ml-1 text-xs text-muted-foreground">(0-1)</span>
                        </Label>
                        <Input 
                          id="dst_host_serror_rate"
                          name="dst_host_serror_rate"
                          type="number"
                          step="0.01"
                          value={formData.dst_host_serror_rate}
                          onChange={handleChange}
                          min="0"
                          max="1"
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          Percentage of connections with SYN errors
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
                          <SelectItem value="decision_tree">Decision Tree</SelectItem>
                          <SelectItem value="random_forest">Random Forest</SelectItem>
                          <SelectItem value="logistic_regression">Logistic Regression</SelectItem>
                          <SelectItem value="neural_network">Neural Network</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        Different models may provide varying results based on their algorithms
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
                        <div className={`inline-flex items-center justify-center rounded-full p-4 mb-2
                          ${result.threatLevel === 'low' ? 'bg-green-500/20 text-green-500' :
                            result.threatLevel === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                            'bg-red-500/20 text-red-500'}`}
                        >
                          {result.threatLevel === 'low' ? (
                            <ShieldAlert className="w-8 h-8" />
                          ) : result.threatLevel === 'medium' ? (
                            <Info className="w-8 h-8" />
                          ) : (
                            <TrendingUp className="w-8 h-8" />
                          )}
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{result.prediction}</h3>
                        <p className="text-muted-foreground">
                          Confidence: {result.confidence}%
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium mb-1">Threat Level</div>
                          <div className="w-full bg-secondary/30 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                result.threatLevel === 'low' ? 'bg-green-500' :
                                result.threatLevel === 'medium' ? 'bg-yellow-500' :
                                'bg-red-500'
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
                        
                        <div className="p-4 bg-secondary/30 rounded-lg text-sm">
                          <p>{result.details}</p>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          <p>Analysis performed using {formData.model.replace('_', ' ')} algorithm</p>
                          <p>Timestamp: {new Date().toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      <ServerCog className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Enter parameters and click "Analyze Traffic" to generate a prediction</p>
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
