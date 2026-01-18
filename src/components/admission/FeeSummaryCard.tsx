import { IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeeSummaryCardProps {
  baseFee: number;
  concession: number;
  finalFee: number;
  isCalculated: boolean;
}

const FeeSummaryCard = ({ baseFee, concession, finalFee, isCalculated }: FeeSummaryCardProps) => {
  return (
    <div className="sticky top-4 bg-card rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="p-4 border-b border-border bg-primary/5">
        <div className="flex items-center gap-2">
          <IndianRupee className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Fee Summary</h3>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {isCalculated ? (
          <>
            {/* Base Fee */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Base Fee</span>
              <span className="font-medium text-foreground">
                ₹{baseFee.toLocaleString()}
              </span>
            </div>

            {/* Concession */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Concession</span>
              <span
                className={cn(
                  "font-medium",
                  concession > 0 ? "text-success" : "text-muted-foreground"
                )}
              >
                {concession > 0 ? `-₹${concession.toLocaleString()}` : "—"}
              </span>
            </div>

            <div className="h-px bg-border" />

            {/* Final Fee */}
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Final Amount</span>
              <span className="text-xl font-bold text-primary">
                ₹{finalFee.toLocaleString()}
              </span>
            </div>

            {concession > 0 && (
              <div className="p-3 rounded-lg bg-success/10 text-center">
                <p className="text-sm text-success font-medium">
                  You save ₹{concession.toLocaleString()} 🎉
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="space-y-2">
              <div className="h-4 w-24 mx-auto rounded bg-muted animate-pulse" />
              <div className="h-6 w-32 mx-auto rounded bg-muted animate-pulse" />
              <div className="h-4 w-20 mx-auto rounded bg-muted animate-pulse" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Select categories to see fee breakdown
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeeSummaryCard;
