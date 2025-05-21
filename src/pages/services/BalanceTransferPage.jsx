import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const features = [
  "Lower interest rates than your current loan",
  "Save up to ₹8 Lakhs* on your total interest payment",
  "Option to top-up your loan for additional funds",
  "Simplified documentation process",
  "No foreclosure charges after 6 months",
  "Zero hidden charges"
];

const eligibility = [
  "Existing loan with any bank or financial institution",
  "Consistent repayment track record",
  "Minimum 12 EMIs paid for the existing loan",
  "Age between 21 to 65 years at loan maturity",
  "Property with clear title documents (for secured loans)"
];

const documents = [
  "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
  "Address Proof (Aadhaar, Passport, Utility Bills)",
  "Income Proof (Salary Slips, Form 16, ITR)",
  "Existing Loan Account Statement",
  "Foreclosure Letter from current lender",
  "Original Property Documents (for secured loans)"
];

const BalanceTransferPage = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate("/apply/balance-transfer");
  };

  const handleCalculateEMIClick = () => {
    navigate("/calculators/emi");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-400 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:gap-0 gap-8">
          {/* Left Content */}
          <div className="md:w-[50%] w-full flex flex-col items-start text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Balance Transfer</h1>
            <p className="mb-7 text-lg md:text-xl font-medium">
              Transfer your existing loan to Hously Finserv and enjoy lower interest rates and better terms, saving up to ₹8 Lakhs* on your total interest payment.
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Balance Transfer"
                className="rounded-lg shadow-lg w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Key Features */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-7 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Key Features
          </h2>
          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800 text-base">
                <span className="mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Eligibility */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-7 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Eligibility
          </h2>
          <ol className="space-y-4 list-decimal list-inside text-gray-800 text-base pl-2">
            {eligibility.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
        {/* Required Documents */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-7 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Required Documents
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-800 text-base pl-2">
            {documents.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto text-center mt-12 mb-12">
        <div className="mb-3 text-base md:text-lg text-gray-700 font-medium">
          Ready to take the next step towards your financial goals?
        </div>
        <Button
          className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-8 py-3 text-lg rounded shadow font-semibold border-0 hover:opacity-90 transition"
          onClick={handleApplyNowClick}
        >
          Apply for Balance Transfer Now
        </Button>
      </div>
    </Layout>
  );
};

export default BalanceTransferPage;