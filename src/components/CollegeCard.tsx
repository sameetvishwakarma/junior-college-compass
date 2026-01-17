import { MapPin, IndianRupee, GraduationCap, ChevronRight } from "lucide-react";
import { College } from "@/data/colleges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CollegeCardProps {
  college: College;
  selectedCategory: string;
}

const CollegeCard = ({ college, selectedCategory }: CollegeCardProps) => {
  const getCategoryKey = (cat: string): keyof College["cutoffs"] => {
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
  const cutoff = college.cutoffs[categoryKey];
  const fee = selectedCategory === "open" || selectedCategory === "all" 
    ? college.fees.open 
    : college.fees.reserved;

  const getTypeBadgeClass = (type: College["type"]) => {
    switch (type) {
      case "Aided": return "badge-aided";
      case "Unaided": return "badge-unaided";
      case "Self-Financed": return "badge-self-financed";
      default: return "";
    }
  };

  return (
    <div className="college-card overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-foreground text-lg leading-tight mb-2">
              {college.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{college.area}</span>
            </div>
          </div>
          <Badge className={`${getTypeBadgeClass(college.type)} font-medium text-xs`}>
            {college.type}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Subjects */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <GraduationCap className="h-4 w-4" />
            <span className="font-medium">Subjects Available</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {college.subjects.slice(0, 4).map((subject) => (
              <span
                key={subject}
                className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs"
              >
                {subject}
              </span>
            ))}
            {college.subjects.length > 4 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">
                +{college.subjects.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-accent/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">
              Cut-off ({selectedCategory === "all" ? "Open" : selectedCategory.toUpperCase()})
            </p>
            <p className="text-xl font-bold text-primary">{cutoff}%</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <IndianRupee className="h-3 w-3" />
              <span>Approx. Fees</span>
            </div>
            <p className="text-xl font-bold text-foreground">₹{fee.toLocaleString()}</p>
          </div>
        </div>

        {/* All Category Cutoffs (if no category selected) */}
        {selectedCategory === "all" && (
          <div className="mb-4 p-3 bg-muted/30 rounded-lg">
            <p className="text-xs font-medium text-muted-foreground mb-2">Category-wise Cut-offs</p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div><span className="text-muted-foreground">OBC:</span> <span className="font-medium">{college.cutoffs.obc}%</span></div>
              <div><span className="text-muted-foreground">SC:</span> <span className="font-medium">{college.cutoffs.sc}%</span></div>
              <div><span className="text-muted-foreground">ST:</span> <span className="font-medium">{college.cutoffs.st}%</span></div>
              <div><span className="text-muted-foreground">VJ/NT:</span> <span className="font-medium">{college.cutoffs.vjnt}%</span></div>
              <div><span className="text-muted-foreground">EWS:</span> <span className="font-medium">{college.cutoffs.ews}%</span></div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button variant="outline" className="w-full group">
          View Details
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CollegeCard;
