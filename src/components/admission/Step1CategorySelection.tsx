import { Info } from "lucide-react";
import { casteCategories, collegeCategories, CasteCategory, CollegeCategory } from "@/data/admissionData";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Step1Props {
  casteCategory: CasteCategory | "";
  collegeCategory: CollegeCategory | "";
  onCasteChange: (category: CasteCategory) => void;
  onCollegeChange: (category: CollegeCategory) => void;
}

const Step1CategorySelection = ({
  casteCategory,
  collegeCategory,
  onCasteChange,
  onCollegeChange,
}: Step1Props) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Caste Category Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">Caste Category</h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Info className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                Caste category may provide fee concession based on government norms
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {casteCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCasteChange(category.value)}
              className={cn(
                "relative p-4 rounded-xl border-2 transition-all duration-200 text-left",
                casteCategory === category.value
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50 bg-card"
              )}
            >
              <span className="font-medium text-foreground">{category.label}</span>
              {category.concessionPercent > 0 && (
                <span className="block text-xs text-success mt-1">
                  {category.concessionPercent}% concession
                </span>
              )}
              {casteCategory === category.value && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* College Category Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">College Type</h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Info className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                College type affects the base fee structure
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {collegeCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCollegeChange(category.value)}
              className={cn(
                "relative p-5 rounded-xl border-2 transition-all duration-200 text-left",
                collegeCategory === category.value
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50 bg-card"
              )}
            >
              <span className="font-semibold text-foreground text-lg">{category.label}</span>
              <span className="block text-sm text-muted-foreground mt-1">
                Base Fee: ₹{category.baseFee.toLocaleString()}
              </span>
              {collegeCategory === category.value && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1CategorySelection;
