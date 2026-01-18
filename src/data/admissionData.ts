// Admission form data constants

export const casteCategories = [
  { value: "general", label: "General", concessionPercent: 0 },
  { value: "obc", label: "OBC", concessionPercent: 25 },
  { value: "sc", label: "SC", concessionPercent: 50 },
  { value: "st", label: "ST", concessionPercent: 50 },
  { value: "ews", label: "EWS", concessionPercent: 30 },
] as const;

export const collegeCategories = [
  { value: "aided", label: "Aided", baseFee: 15000 },
  { value: "unaided", label: "Unaided", baseFee: 35000 },
  { value: "self-financed", label: "Self-Financed", baseFee: 55000 },
] as const;

export const languages = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "marathi", label: "Marathi" },
  { value: "sanskrit", label: "Sanskrit" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
] as const;

export const optionalSubjects = [
  { value: "biology", label: "Biology", description: "For students interested in medical sciences" },
  { value: "computer-science", label: "Computer Science", description: "Programming and computational thinking" },
  { value: "information-technology", label: "Information Technology", description: "IT infrastructure and applications" },
  { value: "electronics", label: "Electronics", description: "Electronic systems and circuits" },
] as const;

export type CasteCategory = typeof casteCategories[number]["value"];
export type CollegeCategory = typeof collegeCategories[number]["value"];
export type Language = typeof languages[number]["value"];
export type OptionalSubject = typeof optionalSubjects[number]["value"];

export interface AdmissionFormData {
  casteCategory: CasteCategory | "";
  collegeCategory: CollegeCategory | "";
  selectedLanguages: Language[];
  optionalSubject: OptionalSubject | "";
}

export const calculateFees = (
  collegeCategory: CollegeCategory | "",
  casteCategory: CasteCategory | ""
): { baseFee: number; concession: number; finalFee: number } => {
  if (!collegeCategory || !casteCategory) {
    return { baseFee: 0, concession: 0, finalFee: 0 };
  }

  const college = collegeCategories.find((c) => c.value === collegeCategory);
  const caste = casteCategories.find((c) => c.value === casteCategory);

  if (!college || !caste) {
    return { baseFee: 0, concession: 0, finalFee: 0 };
  }

  const baseFee = college.baseFee;
  const concession = Math.round((baseFee * caste.concessionPercent) / 100);
  const finalFee = baseFee - concession;

  return { baseFee, concession, finalFee };
};
