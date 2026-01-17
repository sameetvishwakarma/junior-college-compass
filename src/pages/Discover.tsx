import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollegeFilters from "@/components/CollegeFilters";
import CollegeCard from "@/components/CollegeCard";
import { colleges, feeRanges } from "@/data/colleges";
import { School, Filter } from "lucide-react";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [percentageRange, setPercentageRange] = useState("all");
  const [category, setCategory] = useState("all");
  const [feeRange, setFeeRange] = useState("all");
  const [subject, setSubject] = useState("all");

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      // Search filter
      if (searchQuery && !college.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Percentage range filter
      if (percentageRange !== "all") {
        const [minStr, maxStr] = percentageRange.split(" – ");
        const min = parseInt(minStr);
        const max = parseInt(maxStr);
        
        const categoryKey = category === "all" ? "open" : category;
        const cutoff = college.cutoffs[categoryKey as keyof typeof college.cutoffs];
        
        // Student's percentage should be >= cutoff
        // If min percentage is less than cutoff, student is not eligible
        if (min < cutoff) {
          return false;
        }
      }

      // Fee range filter
      if (feeRange !== "all") {
        const selectedFeeRange = feeRanges.find((f) => f.value === feeRange);
        if (selectedFeeRange) {
          const collegeFee = category === "all" || category === "open" 
            ? college.fees.open 
            : college.fees.reserved;
          
          if (selectedFeeRange.max && collegeFee > selectedFeeRange.max) {
            return false;
          }
          if (selectedFeeRange.min && collegeFee < selectedFeeRange.min) {
            return false;
          }
        }
      }

      // Subject filter
      if (subject !== "all" && !college.subjects.includes(subject)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, percentageRange, category, feeRange, subject]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        {/* Page Header */}
        <div className="bg-card border-b border-border">
          <div className="container py-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <School className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Discover Colleges
              </h1>
            </div>
            <p className="text-muted-foreground">
              Filter and find junior colleges based on your eligibility and preferences.
            </p>
          </div>
        </div>

        {/* Filters & Results */}
        <div className="container py-8">
          <CollegeFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            percentageRange={percentageRange}
            setPercentageRange={setPercentageRange}
            category={category}
            setCategory={setCategory}
            feeRange={feeRange}
            setFeeRange={setFeeRange}
            subject={subject}
            setSubject={setSubject}
          />

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredColleges.length}</span> colleges
              </span>
            </div>
          </div>

          {/* College Grid */}
          {filteredColleges.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredColleges.map((college, index) => (
                <div
                  key={college.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CollegeCard college={college} selectedCategory={category} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <School className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No colleges found
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your filters. You might need to expand your percentage range or select a different category.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
