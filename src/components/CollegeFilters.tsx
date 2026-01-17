import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { percentageRanges, categories, feeRanges, subjects } from "@/data/colleges";

interface CollegeFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  percentageRange: string;
  setPercentageRange: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  feeRange: string;
  setFeeRange: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
}

const CollegeFilters = ({
  searchQuery,
  setSearchQuery,
  percentageRange,
  setPercentageRange,
  category,
  setCategory,
  feeRange,
  setFeeRange,
  subject,
  setSubject,
}: CollegeFiltersProps) => {
  return (
    <div className="filter-card mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-4">Find Your College</h2>
      
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by college name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Percentage Range */}
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Percentage Range
          </label>
          <Select value={percentageRange} onValueChange={setPercentageRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="all">All Percentages</SelectItem>
              {percentageRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Category
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Fee Range */}
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Fee Range
          </label>
          <Select value={feeRange} onValueChange={setFeeRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select fees" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="all">All Fee Ranges</SelectItem>
              {feeRanges.map((fee) => (
                <SelectItem key={fee.value} value={fee.value}>
                  {fee.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Subject */}
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Subject / Stream
          </label>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map((subj) => (
                <SelectItem key={subj} value={subj}>
                  {subj}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CollegeFilters;
