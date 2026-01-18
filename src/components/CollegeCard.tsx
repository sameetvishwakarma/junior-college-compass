import { MapPin } from "lucide-react";
import { College, StreamData } from "@/data/colleges";
import { Badge } from "@/components/ui/badge";
import StreamCard from "@/components/StreamCard";

interface CollegeCardProps {
  college: College;
  selectedCategory: string;
  filteredStreams: StreamData[];
}

const CollegeCard = ({ college, selectedCategory, filteredStreams }: CollegeCardProps) => {
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
      {/* College Header */}
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
          <Badge className={`${getTypeBadgeClass(college.type)} font-medium text-xs shrink-0`}>
            {college.type}
          </Badge>
        </div>
      </div>

      {/* Stream Cards */}
      <div className="p-5">
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Available Streams ({filteredStreams.length})
        </p>
        <div className="grid gap-4">
          {filteredStreams.map((streamData) => (
            <StreamCard
              key={streamData.stream}
              streamData={streamData}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
