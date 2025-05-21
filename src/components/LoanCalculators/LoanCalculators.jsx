import EmiCalculator from "../../pages/calculators/EMICalculatorPage";
import EligibilityCalculator from "../../pages/calculators/EligibilityCalculatorPage";
import ForeclosureCalculator from "../../pages/calculators/ForecloseCalculatorPage";
import BalanceTransferCalculator from "../../pages/calculators/BalanceTransferCalculatorPage";
import PrepaymentCalculator from "../../pages/calculators/PrePaymentCalculatorPage";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState("emi");

  return (
    <div className="w-full sm:w-[80%] mx-auto">
      <Tabs defaultValue="emi" className="w-full" onValueChange={setActiveTab}>
        <div className="relative mb-4">
          {/* Gradient overlays to hint scroll on edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent z-10 sm:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent z-10 sm:hidden" />

          <TabsList
            className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 sm:gap-4 px-1"
            // px-1 for some side padding so gradient visible properly
          >
            <TabsTrigger
              value="emi"
              className="text-sm px-3 py-1 text-[#0074d9] border border-[#0074d9] rounded-md min-w-[110px] text-center whitespace-nowrap"
            >
              EMI
            </TabsTrigger>
            <TabsTrigger
              value="eligibility"
              className="text-sm px-3 py-1 text-[#0074d9] border border-[#0074d9] rounded-md min-w-[110px] text-center whitespace-nowrap"
            >
              Eligibility
            </TabsTrigger>
            <TabsTrigger
              value="foreclose"
              className="text-sm px-3 py-1 text-[#0074d9] border border-[#0074d9] rounded-md min-w-[110px] text-center whitespace-nowrap"
            >
              ForeClose
            </TabsTrigger>
            <TabsTrigger
              value="balance"
              className="text-sm px-3 py-1 text-[#0074d9] border border-[#0074d9] rounded-md min-w-[110px] text-center whitespace-nowrap"
            >
              Balance-Transfer
            </TabsTrigger>
            <TabsTrigger
              value="prepayment"
              className="text-sm px-3 py-1 text-[#0074d9] border border-[#0074d9] rounded-md min-w-[110px] text-center whitespace-nowrap"
            >
              Pre-Payment
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="emi">
          <EmiCalculator />
        </TabsContent>
        <TabsContent value="eligibility">
          <EligibilityCalculator />
        </TabsContent>
        <TabsContent value="foreclose">
          <ForeclosureCalculator />
        </TabsContent>
        <TabsContent value="balance">
          <BalanceTransferCalculator />
        </TabsContent>
        <TabsContent value="prepayment">
          <PrepaymentCalculator />
        </TabsContent>
      </Tabs>

      {/* Scrollbar hide CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Calculator;
