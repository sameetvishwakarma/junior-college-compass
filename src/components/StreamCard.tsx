import { Beaker, Briefcase, Palette, IndianRupee, Tag, TrendingDown } from "lucide-react";
import { StreamData, College } from "@/data/colleges";
import { Button } from "@/components/ui/button";
import { calculateFinalFee, getConcessionLabel, hasFeeConcession } from "@/lib/feeCalculator";

interface StreamCardProps {
  streamData: StreamData;
  selectedCategory: string;
  collegeType: College["type"];
}

const StreamCard = ({ streamData, selectedCategory, collegeType }: StreamCardProps) => {
  const getCategoryKey = (cat: string): keyof StreamData["cutoffs"] => {
    switch (cat) {
      case "obc": return "obc";
      case "sc": return "sc";
      case "st": return "st";
      case "vjnt": return "vjnt";
      case "ews": return "ews";
      default: return "open";
    }
  };

  const categoryKey = getCategoryKey(selectedCategory);
  const cutoff = streamData.cutoffs[categoryKey];
  
  // Base fee depends on whether it's open category or reserved
  const baseFee = selectedCategory === "open" || selectedCategory === "all"
    ? streamData.fees.open
    : streamData.fees.reserved;

  // Calculate final fee with concession
  const { finalFee, concessionAmount, concessionPercent } = calculateFinalFee(
    baseFee,
    selectedCategory === "all" ? "open" : selectedCategory
  );

  const showConcession = hasFeeConcession(selectedCategory) && selectedCategory !== "all";
  const concessionLabel = getConcessionLabel(selectedCategory);

  const getStreamIcon = (stream: string) => {
    switch (stream) {
      case "Science": return <Beaker className="h-4 w-4" />;
      case "Commerce": return <Briefcase className="h-4 w-4" />;
      case "Arts": return <Palette className="h-4 w-4" />;
      default: return null;
    }
  };

  const getStreamColor = (stream: string) => {
    switch (stream) {
      case "Science": return "bg-blue-500/10 text-blue-600 border-blue-200";
      case "Commerce": return "bg-emerald-500/10 text-emerald-600 border-emerald-200";
      case "Arts": return "bg-purple-500/10 text-purple-600 border-purple-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className={`rounded-lg border p-4 ${getStreamColor(streamData.stream)}`}>
      {/* Stream Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-md bg-background/80">
          {getStreamIcon(streamData.stream)}
        </div>
        <h4 className="font-semibold text-sm">{streamData.stream}</h4>
      </div>

      {/* Subjects as chips */}
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2">Subjects Available</p>
        <div className="flex flex-wrap gap-1.5">
          {streamData.subjects.map((subject) => (
            <span
              key={subject}
              className="inline-flex items-center px-2 py-0.5 rounded-md bg-background/80 text-xs font-medium"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Eligibility Info */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-background/80 rounded-md p-2">
          <p className="text-xs text-muted-foreground mb-0.5">
            Cut-off ({selectedCategory === "all" ? "Open" : selectedCategory.toUpperCase()})
          </p>
          <p className="text-lg font-bold text-primary">{cutoff}%</p>
        </div>
        
        {/* Fee Display with Concession */}
        <div className="bg-background/80 rounded-md p-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-0.5">
            <IndianRupee className="h-3 w-3" />
            <span>{showConcession ? "Final Fee" : "Approx. Fees"}</span>
          </div>
          
          {showConcession ? (
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-success">
                  {finalFee === 0 ? "FREE" : `₹${finalFee.toLocaleString()}`}
                </p>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs line-through text-muted-foreground">
                  ₹{baseFee.toLocaleString()}
                </span>
                <span className="inline-flex items-center gap-0.5 text-xs text-success font-medium">
                  <TrendingDown className="h-3 w-3" />
                  {concessionLabel}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-lg font-bold text-foreground">₹{baseFee.toLocaleString()}</p>
          )}
        </div>
      </div>

      {/* Concession Breakdown (when applicable) */}
      {showConcession && concessionAmount > 0 && (
        <div className="bg-success/10 border border-success/20 rounded-md p-2 mb-3">
          <div className="flex items-center gap-1.5 text-success">
            <Tag className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">
              You save ₹{concessionAmount.toLocaleString()} ({concessionPercent}% {selectedCategory.toUpperCase()} concession)
            </span>
          </div>
        </div>
      )}

      {/* All Category Cutoffs (if no category selected) */}
      {selectedCategory === "all" && (
        <div className="bg-background/60 rounded-md p-2 mb-3">
          <p className="text-xs font-medium text-muted-foreground mb-1.5">Category-wise Cut-offs</p>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            <div><span className="text-muted-foreground">OBC:</span> <span className="font-medium">{streamData.cutoffs.obc}%</span></div>
            <div><span className="text-muted-foreground">SC:</span> <span className="font-medium">{streamData.cutoffs.sc}%</span></div>
            <div><span className="text-muted-foreground">ST:</span> <span className="font-medium">{streamData.cutoffs.st}%</span></div>
            <div><span className="text-muted-foreground">VJ/NT:</span> <span className="font-medium">{streamData.cutoffs.vjnt}%</span></div>
            <div><span className="text-muted-foreground">EWS:</span> <span className="font-medium">{streamData.cutoffs.ews}%</span></div>
          </div>
        </div>
      )}

      {/* CTA Button */}
      <Button variant="outline" size="sm" className="w-full bg-background/80 hover:bg-background">
        Check Eligibility
      </Button>
    </div>
  );
};

export default StreamCard;
