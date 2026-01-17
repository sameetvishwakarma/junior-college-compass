export interface College {
  id: string;
  name: string;
  type: "Aided" | "Unaided" | "Self-Financed";
  subjects: string[];
  cutoffs: {
    open: number;
    obc: number;
    sc: number;
    st: number;
    vjnt: number;
    ews: number;
  };
  fees: {
    open: number;
    reserved: number;
  };
  area: string;
}

export const colleges: College[] = [
  {
    id: "1",
    name: "R.J. College of Arts, Science & Commerce",
    type: "Aided",
    subjects: ["Science", "Commerce", "Arts", "Computer Science"],
    cutoffs: { open: 85, obc: 80, sc: 70, st: 65, vjnt: 72, ews: 82 },
    fees: { open: 8500, reserved: 4500 },
    area: "Ghatkopar",
  },
  {
    id: "2",
    name: "Vidyavihar Junior College",
    type: "Aided",
    subjects: ["Science", "Commerce", "Bifocal - IT", "Hindi", "Marathi"],
    cutoffs: { open: 78, obc: 73, sc: 63, st: 58, vjnt: 65, ews: 75 },
    fees: { open: 6500, reserved: 3500 },
    area: "Vidyavihar",
  },
  {
    id: "3",
    name: "Kurla Junior College of Science",
    type: "Unaided",
    subjects: ["Science", "Computer Science", "Electronics", "Bifocal - Mechanical"],
    cutoffs: { open: 72, obc: 67, sc: 57, st: 52, vjnt: 60, ews: 69 },
    fees: { open: 15000, reserved: 12000 },
    area: "Kurla",
  },
  {
    id: "4",
    name: "Ghatkopar Education Society Junior College",
    type: "Self-Financed",
    subjects: ["Commerce", "Arts", "French", "German"],
    cutoffs: { open: 65, obc: 60, sc: 50, st: 45, vjnt: 52, ews: 62 },
    fees: { open: 22000, reserved: 18000 },
    area: "Ghatkopar",
  },
  {
    id: "5",
    name: "S.K. Somaiya Vidyavihar",
    type: "Aided",
    subjects: ["Science", "Commerce", "Arts", "Computer Science", "Hindi"],
    cutoffs: { open: 90, obc: 85, sc: 75, st: 70, vjnt: 78, ews: 87 },
    fees: { open: 9500, reserved: 5000 },
    area: "Vidyavihar",
  },
  {
    id: "6",
    name: "Model Junior College Kurla",
    type: "Unaided",
    subjects: ["Science", "Bifocal - IT", "Bifocal - Electronics"],
    cutoffs: { open: 68, obc: 63, sc: 53, st: 48, vjnt: 55, ews: 65 },
    fees: { open: 18000, reserved: 15000 },
    area: "Kurla",
  },
  {
    id: "7",
    name: "Pragati Junior College",
    type: "Self-Financed",
    subjects: ["Commerce", "Arts", "Marathi", "Hindi"],
    cutoffs: { open: 55, obc: 50, sc: 40, st: 35, vjnt: 42, ews: 52 },
    fees: { open: 25000, reserved: 22000 },
    area: "Ghatkopar",
  },
  {
    id: "8",
    name: "Vidyavihar Science & Commerce College",
    type: "Aided",
    subjects: ["Science", "Commerce", "Computer Science", "Electronics"],
    cutoffs: { open: 82, obc: 77, sc: 67, st: 62, vjnt: 69, ews: 79 },
    fees: { open: 7500, reserved: 4000 },
    area: "Vidyavihar",
  },
  {
    id: "9",
    name: "Kurla Central Junior College",
    type: "Unaided",
    subjects: ["Science", "Commerce", "Arts", "Bifocal - Mechanical", "German"],
    cutoffs: { open: 70, obc: 65, sc: 55, st: 50, vjnt: 57, ews: 67 },
    fees: { open: 16500, reserved: 13500 },
    area: "Kurla",
  },
  {
    id: "10",
    name: "New Era Junior College",
    type: "Self-Financed",
    subjects: ["Commerce", "Arts", "French", "Hindi", "Marathi"],
    cutoffs: { open: 60, obc: 55, sc: 45, st: 40, vjnt: 47, ews: 57 },
    fees: { open: 28000, reserved: 25000 },
    area: "Ghatkopar",
  },
];

export const percentageRanges = [
  "40% – 45%",
  "45% – 50%",
  "50% – 55%",
  "55% – 60%",
  "60% – 65%",
  "65% – 70%",
  "70% – 75%",
  "75% – 80%",
  "80% – 85%",
  "85% – 90%",
  "90% – 95%",
  "95% – 100%",
];

export const categories = [
  { value: "open", label: "Open" },
  { value: "obc", label: "OBC" },
  { value: "sc", label: "SC" },
  { value: "st", label: "ST" },
  { value: "vjnt", label: "VJ / NT" },
  { value: "ews", label: "EWS" },
];

export const feeRanges = [
  { value: "below-5000", label: "Below ₹5,000", max: 5000 },
  { value: "5000-10000", label: "₹5,000 – ₹10,000", min: 5000, max: 10000 },
  { value: "10000-20000", label: "₹10,000 – ₹20,000", min: 10000, max: 20000 },
  { value: "above-20000", label: "Above ₹20,000", min: 20000 },
];

export const subjects = [
  "Science",
  "Commerce",
  "Arts",
  "Computer Science",
  "Electronics",
  "Bifocal - IT",
  "Bifocal - Electronics",
  "Bifocal - Mechanical",
  "Hindi",
  "Marathi",
  "French",
  "German",
];
