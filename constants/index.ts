export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Aadhaar Card",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhaar Card",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Birth Certificate",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Udith PU | Neurologist | Fee :- ₹ 1001",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Nandhini | Dermatologist | Fee :- ₹ 1000",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Siva Guti | Oncologist | Fee :- ₹ 1000",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Raj Pandey | Psychiatrist | Fee :- ₹ 101",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Shivami Sapkal | Nephrologist | Fee :- ₹ 99",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Sanjog Singh | Pediatricians | Fee :- ₹ 1000",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee | Anesthesiology | Fee :- ₹ 1000",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz | Hematologist | Fee :- ₹ 1000",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma | Radiologist | Fee :- ₹ 1000",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
