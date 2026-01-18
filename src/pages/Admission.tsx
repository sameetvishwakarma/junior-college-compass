import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FormStepper from "@/components/admission/FormStepper";
import Step1CategorySelection from "@/components/admission/Step1CategorySelection";
import Step2SubjectSelection from "@/components/admission/Step2SubjectSelection";
import Step3FeeBreakdown from "@/components/admission/Step3FeeBreakdown";
import Step4Review from "@/components/admission/Step4Review";
import FeeSummaryCard from "@/components/admission/FeeSummaryCard";
import { useAdmissionForm } from "@/hooks/useAdmissionForm";

const Admission = () => {
  const {
    currentStep,
    formData,
    feeBreakdown,
    updateCasteCategory,
    updateCollegeCategory,
    toggleLanguage,
    updateOptionalSubject,
    isStep1Valid,
    isStep2Valid,
    isFormValid,
    canProceedToStep,
    goToStep,
    nextStep,
    prevStep,
    resetForm,
  } = useAdmissionForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (isFormValid) {
      setIsSubmitted(true);
      toast.success("Application submitted successfully!", {
        description: "You will receive a confirmation email shortly.",
      });
    }
  };

  const handleStartNew = () => {
    resetForm();
    setIsSubmitted(false);
  };

  const canProceed = currentStep === 1 ? isStep1Valid : currentStep === 2 ? isStep2Valid : true;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1CategorySelection
            casteCategory={formData.casteCategory}
            collegeCategory={formData.collegeCategory}
            onCasteChange={updateCasteCategory}
            onCollegeChange={updateCollegeCategory}
          />
        );
      case 2:
        return (
          <Step2SubjectSelection
            selectedLanguages={formData.selectedLanguages}
            optionalSubject={formData.optionalSubject}
            onToggleLanguage={toggleLanguage}
            onOptionalSubjectChange={updateOptionalSubject}
          />
        );
      case 3:
        return (
          <Step3FeeBreakdown
            casteCategory={formData.casteCategory}
            collegeCategory={formData.collegeCategory}
            feeBreakdown={feeBreakdown}
          />
        );
      case 4:
        return (
          <Step4Review
            formData={formData}
            feeBreakdown={feeBreakdown}
            onEditStep={goToStep}
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
          />
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto">
              <svg
                className="w-10 h-10 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Application Submitted!</h1>
            <p className="text-muted-foreground">
              Your admission application has been submitted successfully. You will receive a
              confirmation email with further instructions.
            </p>
            <div className="bg-card rounded-xl border border-border p-4 text-left">
              <p className="text-sm text-muted-foreground mb-2">Final Fee Amount</p>
              <p className="text-3xl font-bold text-primary">
                ₹{feeBreakdown.finalFee.toLocaleString()}
              </p>
            </div>
            <Button onClick={handleStartNew} variant="outline" className="w-full">
              Start New Application
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-8 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Student Admission Form
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete your admission application in a few simple steps. 
              Don't worry — fees are calculated automatically 😊
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_300px] gap-8">
              {/* Main Form */}
              <div className="space-y-8">
                {/* Stepper */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <FormStepper
                    currentStep={currentStep}
                    canProceedToStep={canProceedToStep}
                    onStepClick={goToStep}
                  />
                </div>

                {/* Step Content */}
                <div className="bg-card rounded-xl border border-border p-6 min-h-[400px]">
                  {renderStep()}
                </div>

                {/* Navigation Buttons */}
                {currentStep < 4 && (
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!canProceed}
                      className="gap-2"
                      variant="hero"
                    >
                      Next Step
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Sticky Fee Summary (Desktop) */}
              <div className="hidden lg:block">
                <FeeSummaryCard
                  baseFee={feeBreakdown.baseFee}
                  concession={feeBreakdown.concession}
                  finalFee={feeBreakdown.finalFee}
                  isCalculated={formData.casteCategory !== "" && formData.collegeCategory !== ""}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admission;
