import { College } from "@/data/colleges";

// Caste-based concession percentages
export const concessionRates: Record<string, number> = {
  sc: 100, // 100% concession (fully govt-paid)
  st: 100,
  obc: 50,
  vjnt: 50,
  ews: 25,
  open: 0,
};

// Get concession label for display
export const getConcessionLabel = (category: string): string => {
  switch (category) {
    case "sc":
    case "st":
      return "Govt. Paid";
    case "obc":
    case "vjnt":
      return "50% Concession";
    case "ews":
      return "25% Concession";
    default:
      return "";
  }
};

// Calculate final fee after applying concession
export const calculateFinalFee = (
  baseFee: number,
  category: string
): { finalFee: number; concessionAmount: number; concessionPercent: number } => {
  const concessionPercent = concessionRates[category] || 0;
  const concessionAmount = Math.round(baseFee * (concessionPercent / 100));
  const finalFee = baseFee - concessionAmount;

  return {
    finalFee,
    concessionAmount,
    concessionPercent,
  };
};

// Check if category has any fee concession
export const hasFeeConcession = (category: string): boolean => {
  return (concessionRates[category] || 0) > 0;
};
