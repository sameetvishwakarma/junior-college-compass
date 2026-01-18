import { IndianRupee, TrendingDown, Sparkles } from "lucide-react";
import { casteCategories, collegeCategories } from "@/data/admissionData";
import { cn } from "@/lib/utils";

interface Step3Props {
  casteCategory: string;
  collegeCategory: string;
  feeBreakdown: {
    baseFee: number;
    concession: number;
    finalFee: number;
  };
}

const Step3FeeBreakdown = ({ casteCategory, collegeCategory, feeBreakdown }: Step3Props) => {
  const casteLabel = casteCategories.find((c) => c.value === casteCategory)?.label || "";
  const collegeLabel = collegeCategories.find((c) => c.value === collegeCategory)?.label || "";
  const hasConcession = feeBreakdown.concession > 0;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
          <Sparkles className="h-4 w-4" />
          Fees calculated automatically
        </div>
        <h3 className="text-xl font-semibold text-foreground">Fee Breakdown Summary</h3>
        <p className="text-muted-foreground mt-1">
          Based on your selections: {collegeLabel} College, {casteLabel} Category
        </p>
      </div>

      {/* Fee Card */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        {/* Base Fee */}
        <div className="p-5 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <IndianRupee className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Base Fee</p>
                <p className="text-sm text-muted-foreground">{collegeLabel} College</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              ₹{feeBreakdown.baseFee.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Concession */}
        {hasConcession && (
          <div className="p-5 border-b border-border bg-success/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-medium text-success">Category Concession</p>
                  <p className="text-sm text-success/80">{casteLabel} Reservation Benefit</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-success">
                - ₹{feeBreakdown.concession.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        {/* Final Fee */}
        <div className="p-6 bg-primary/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Final Payable Amount</p>
              <p className="text-3xl font-bold text-primary">
                ₹{feeBreakdown.finalFee.toLocaleString()}
              </p>
            </div>
            {hasConcession && (
              <div className="text-right">
                <p className="text-sm text-success font-medium">You Save</p>
                <p className="text-xl font-bold text-success">
                  ₹{feeBreakdown.concession.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Note */}
      <div className="p-4 rounded-xl bg-info/10 border border-info/20">
        <p className="text-sm text-info">
          💡 <strong>Note:</strong> This is an approximate fee calculation. Actual fees may vary based on 
          specific college policies, additional charges, and government regulations.
        </p>
      </div>
    </div>
  );
};

export default Step3FeeBreakdown;
