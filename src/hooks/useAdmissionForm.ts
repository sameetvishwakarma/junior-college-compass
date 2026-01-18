import { useState, useMemo } from "react";
import {
  AdmissionFormData,
  CasteCategory,
  CollegeCategory,
  Language,
  OptionalSubject,
  calculateFees,
} from "@/data/admissionData";

export const useAdmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AdmissionFormData>({
    casteCategory: "",
    collegeCategory: "",
    selectedLanguages: [],
    optionalSubject: "",
  });

  const feeBreakdown = useMemo(() => {
    return calculateFees(formData.collegeCategory, formData.casteCategory);
  }, [formData.collegeCategory, formData.casteCategory]);

  const updateCasteCategory = (category: CasteCategory) => {
    setFormData((prev) => ({ ...prev, casteCategory: category }));
  };

  const updateCollegeCategory = (category: CollegeCategory) => {
    setFormData((prev) => ({ ...prev, collegeCategory: category }));
  };

  const toggleLanguage = (language: Language) => {
    setFormData((prev) => {
      const isSelected = prev.selectedLanguages.includes(language);
      if (isSelected) {
        return {
          ...prev,
          selectedLanguages: prev.selectedLanguages.filter((l) => l !== language),
        };
      }
      // Max 2 languages
      if (prev.selectedLanguages.length >= 2) {
        return prev;
      }
      return {
        ...prev,
        selectedLanguages: [...prev.selectedLanguages, language],
      };
    });
  };

  const updateOptionalSubject = (subject: OptionalSubject) => {
    setFormData((prev) => ({ ...prev, optionalSubject: subject }));
  };

  const isStep1Valid = formData.casteCategory !== "" && formData.collegeCategory !== "";
  const isStep2Valid = formData.selectedLanguages.length > 0 && formData.optionalSubject !== "";
  const isStep3Valid = isStep1Valid && isStep2Valid;
  const isFormValid = isStep1Valid && isStep2Valid;

  const canProceedToStep = (step: number): boolean => {
    switch (step) {
      case 2:
        return isStep1Valid;
      case 3:
        return isStep1Valid && isStep2Valid;
      case 4:
        return isStep1Valid && isStep2Valid;
      default:
        return true;
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 4 && canProceedToStep(step)) {
      setCurrentStep(step);
    }
  };

  const nextStep = () => {
    if (currentStep < 4 && canProceedToStep(currentStep + 1)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetForm = () => {
    setFormData({
      casteCategory: "",
      collegeCategory: "",
      selectedLanguages: [],
      optionalSubject: "",
    });
    setCurrentStep(1);
  };

  return {
    currentStep,
    formData,
    feeBreakdown,
    updateCasteCategory,
    updateCollegeCategory,
    toggleLanguage,
    updateOptionalSubject,
    isStep1Valid,
    isStep2Valid,
    isStep3Valid,
    isFormValid,
    canProceedToStep,
    goToStep,
    nextStep,
    prevStep,
    resetForm,
  };
};
