import { Edit2, User, School, BookOpen, IndianRupee } from "lucide-react";
import { AdmissionFormData, casteCategories, collegeCategories, languages, optionalSubjects } from "@/data/admissionData";
import { Button } from "@/components/ui/button";

interface Step4Props {
  formData: AdmissionFormData;
  feeBreakdown: {
    baseFee: number;
    concession: number;
    finalFee: number;
  };
  onEditStep: (step: number) => void;
  onSubmit: () => void;
  isFormValid: boolean;
}

const Step4Review = ({ formData, feeBreakdown, onEditStep, onSubmit, isFormValid }: Step4Props) => {
  const casteLabel = casteCategories.find((c) => c.value === formData.casteCategory)?.label || "";
  const collegeLabel = collegeCategories.find((c) => c.value === formData.collegeCategory)?.label || "";
  const languageLabels = formData.selectedLanguages
    .map((l) => languages.find((lang) => lang.value === l)?.label)
    .filter(Boolean)
    .join(", ");
  const optionalLabel = optionalSubjects.find((s) => s.value === formData.optionalSubject)?.label || "";

  const sections = [
    {
      title: "Category Details",
      icon: User,
      step: 1,
      items: [
        { label: "Caste Category", value: casteLabel },
        { label: "College Type", value: collegeLabel },
      ],
    },
    {
      title: "Subject Selection",
      icon: BookOpen,
      step: 2,
      items: [
        { label: "Languages", value: languageLabels || "Not selected" },
        { label: "Optional Subject", value: optionalLabel || "Not selected" },
      ],
    },
    {
      title: "Fee Summary",
      icon: IndianRupee,
      step: 3,
      items: [
        { label: "Base Fee", value: `₹${feeBreakdown.baseFee.toLocaleString()}` },
        { label: "Concession", value: feeBreakdown.concession > 0 ? `-₹${feeBreakdown.concession.toLocaleString()}` : "None", highlight: feeBreakdown.concession > 0 },
        { label: "Final Amount", value: `₹${feeBreakdown.finalFee.toLocaleString()}`, bold: true },
      ],
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <School className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground">Review Your Application</h3>
        <p className="text-muted-foreground mt-1">
          Please verify all details before submitting
        </p>
      </div>

      {/* Review Cards */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <section.icon className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">{section.title}</h4>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEditStep(section.step)}
                className="text-primary hover:text-primary/80"
              >
                <Edit2 className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>
            <div className="p-4 space-y-3">
              {section.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span
                    className={`text-sm ${
                      item.bold
                        ? "font-bold text-primary"
                        : item.highlight
                        ? "text-success font-medium"
                        : "font-medium text-foreground"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          onClick={onSubmit}
          disabled={!isFormValid}
          className="w-full h-12 text-base font-semibold"
          variant="hero"
        >
          Submit Application
        </Button>
        {!isFormValid && (
          <p className="text-sm text-destructive text-center mt-2">
            Please complete all required fields before submitting
          </p>
        )}
      </div>
    </div>
  );
};

export default Step4Review;
