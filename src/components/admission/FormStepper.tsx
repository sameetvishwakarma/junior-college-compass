import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormStepperProps {
  currentStep: number;
  canProceedToStep: (step: number) => boolean;
  onStepClick: (step: number) => void;
}

const steps = [
  { number: 1, title: "Category", description: "Select categories" },
  { number: 2, title: "Subjects", description: "Choose subjects" },
  { number: 3, title: "Fee Summary", description: "Review fees" },
  { number: 4, title: "Confirm", description: "Final review" },
];

const FormStepper = ({ currentStep, canProceedToStep, onStepClick }: FormStepperProps) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isClickable = canProceedToStep(step.number);

          return (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step circle and content */}
              <div
                className={cn(
                  "flex flex-col items-center cursor-pointer transition-all",
                  isClickable ? "opacity-100" : "opacity-50 cursor-not-allowed"
                )}
                onClick={() => isClickable && onStepClick(step.number)}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                    isCompleted && "bg-success text-success-foreground",
                    isCurrent && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : step.number}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isCurrent ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 sm:mx-4">
                  <div
                    className={cn(
                      "h-full transition-all duration-300",
                      currentStep > step.number ? "bg-success" : "bg-muted"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormStepper;
