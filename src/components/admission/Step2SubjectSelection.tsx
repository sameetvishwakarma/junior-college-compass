import { Check, AlertCircle } from "lucide-react";
import { languages, optionalSubjects, Language, OptionalSubject } from "@/data/admissionData";
import { cn } from "@/lib/utils";

interface Step2Props {
  selectedLanguages: Language[];
  optionalSubject: OptionalSubject | "";
  onToggleLanguage: (language: Language) => void;
  onOptionalSubjectChange: (subject: OptionalSubject) => void;
}

const Step2SubjectSelection = ({
  selectedLanguages,
  optionalSubject,
  onToggleLanguage,
  onOptionalSubjectChange,
}: Step2Props) => {
  const maxLanguagesReached = selectedLanguages.length >= 2;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Language Selection */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Language Selection</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Choose up to 2 languages for your curriculum
            </p>
          </div>
          <div
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              maxLanguagesReached
                ? "bg-success/10 text-success"
                : "bg-muted text-muted-foreground"
            )}
          >
            {selectedLanguages.length}/2 selected
          </div>
        </div>

        {maxLanguagesReached && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-info/10 text-info text-sm">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>You can select only two languages as per academic rules.</span>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((language) => {
            const isSelected = selectedLanguages.includes(language.value);
            const isDisabled = !isSelected && maxLanguagesReached;

            return (
              <button
                key={language.value}
                onClick={() => !isDisabled && onToggleLanguage(language.value)}
                disabled={isDisabled}
                className={cn(
                  "relative p-4 rounded-xl border-2 transition-all duration-200 text-left",
                  isSelected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : isDisabled
                    ? "border-border bg-muted/50 opacity-50 cursor-not-allowed"
                    : "border-border hover:border-primary/50 bg-card"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{language.label}</span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional Subject Selection (PCM) */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Optional Subject (PCM Stream)</h3>
          <p className="text-sm text-muted-foreground mt-1">
            PCM students can choose only one optional subject based on college availability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {optionalSubjects.map((subject) => {
            const isSelected = optionalSubject === subject.value;

            return (
              <button
                key={subject.value}
                onClick={() => onOptionalSubjectChange(subject.value)}
                className={cn(
                  "relative p-5 rounded-xl border-2 transition-all duration-200 text-left",
                  isSelected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50 bg-card"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-semibold text-foreground">{subject.label}</span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      {subject.description}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step2SubjectSelection;
