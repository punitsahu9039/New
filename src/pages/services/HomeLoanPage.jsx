import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  "Loan amount up to ₹10 Crore",
  "Interest rates starting from 8.5%* p.a.",
  "Tenure up to 30 years",
  "Quick processing and disbursement",
  "Minimal documentation",
  "No hidden charges"
];

const eligibility = [
  "Salaried individuals with minimum 2 years of work experience",
  "Self-employed professionals with 3 years of practice",
  "Business owners with 3 years of business stability",
  "Age between 21 to 65 years at loan maturity",
  "Minimum monthly income of ₹25,000"
];

const documents = [
  "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
  "Address Proof (Aadhaar, Passport, Utility Bills)",
  "Income Proof (Salary Slips, Form 16, ITR)",
  "Property Documents (Sale Deed, Title Deed)",
  "Bank Statements for the last 6 months",
  "Photographs (Passport Size)"
];

const HomeLoanPage = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate("/apply/home-loan");
  };

  const handleCalculateEMIClick = () => {
    navigate("/calculators/emi");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:gap-0 gap-8">
          {/* Left Content */}
          <div className="md:w-[50%] w-full flex flex-col items-start text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loan</h1>
            <p className="mb-7 text-lg md:text-xl font-medium">
              Make your dream home a reality with our flexible home loan options with interest rates starting from 8.5%* p.a.
            </p>
            <div className="flex gap-4 mb-2">
              <Button
                variant="outline"
                onClick={handleApplyNowClick}
                className="px-6 py-2 text-base font-semibold border-blue-600 text-blue-600 hover:bg-blue-100"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                onClick={handleCalculateEMIClick}
                className="px-6 py-2 text-base font-semibold border-blue-600 text-blue-600 hover:bg-blue-100"
              >
                Calculate EMI
              </Button>
            </div>
          </div>
          {/* Right Image */}
          <div className="md:w-[50%] w-full flex justify-center md:justify-end">
            <div className="w-[650px] h-[450px] relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Home Loan"
                className="rounded-lg shadow-lg w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features, Eligibility, Documents */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Features */}
        <div className="bg-white rounded-xl shadow p-7 border border-gray-200 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Key Features
          </h2>
          <ul className="space-y-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-800 text-base">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 font-bold">
                  {String.fromCharCode(10003)}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Eligibility */}
        <div className="bg-white rounded-xl shadow p-7 border border-gray-200 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Eligibility
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-gray-800 text-base pl-2">
            {eligibility.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ol>
        </div>
        {/* Documents */}
        <div className="bg-white rounded-xl shadow p-7 border border-gray-200 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Required Documents
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-800 text-base pl-2">
            {documents.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTA with line above */}
      <div className="container mx-auto text-center mt-12 mb-12">
        <div className="mb-3 text-base md:text-lg text-gray-700 font-medium">
          Ready to take the next step towards your financial goals?
        </div>
        <Button
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 text-lg rounded shadow font-semibold border-0 hover:opacity-90 transition"
          onClick={handleApplyNowClick}
        >
          Apply for Home Loan Now
        </Button>
      </div>
    </Layout>
  );
};

export default HomeLoanPage;