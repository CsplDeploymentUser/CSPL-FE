"use client";
import React, { useState } from "react";
import { MoveUp, MoveDown } from "lucide-react";
import SelectedWorkTabImages from "@/Components/ServerSideComponents/HomePageComponents/SelectedWorkTabImages";

type Props = { tabsResponse: any };

const SelectedWorkTabsComponent = ({ tabsResponse }: Props) => {
  const [activeTab, setActiveTab] = useState<string | string>(
    tabsResponse?.selectedworktabs?.[0]?.id || 0
  );
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const handleUpClick = () => {
    const currentIndex = tabsResponse?.selectedworktabs.findIndex(
      (tab: any) => tab?.id === activeTab
    );
    if (currentIndex > 0) {
      setActiveTab(tabsResponse?.selectedworktabs[currentIndex - 1]?.id);
    }
  };

  const handleDownClick = () => {
    const currentIndex = tabsResponse?.selectedworktabs.findIndex(
      (tab: any) => tab?.id === activeTab
    );
    if (currentIndex < tabsResponse?.selectedworktabs.length - 1) {
      setActiveTab(tabsResponse?.selectedworktabs[currentIndex + 1]?.id);
    }
  };

  // Set loading state when changing tabs
  const handleTabClick = (tabId: string) => {
    setIsLoading(true);
    setActiveTab(tabId);

    // Simulate delay to test loading state
    setTimeout(() => setIsLoading(false), 500); // Adjust timing based on the actual load time
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {tabsResponse?.heading.title && (
        <div className="flex justify-center items-end gap-2 mb-12">
          <div className="border-b-[1px] w-[100px] border-black lg:block hidden"></div>
          <h2 className="lg:text-4xl text-3xl font-bold text-center">
            {tabsResponse?.heading.title}
          </h2>
          <div className="border-b-[1px] w-[100px] border-black lg:block hidden"></div>
        </div>
      )}
      <div className="flex lg:flex-row flex-col w-full">
        <div className="lg:w-1/5 w-full px-4">
          <div className="flex lg:flex-col flex-row lg:w-full overflow-x-auto max-w-3xl lg:gap-20 gap-10 border-r-gray-900 border-r md:mb-0 mb-7">
            {tabsResponse?.selectedworktabs.map((tab: any) => (
              <div key={tab?.id} className="w-full">
                <div
                  className={`w-auto text-lg flex lg:flex-row flex-col gap-3 ${
                    activeTab === tab?.id
                      ? "text-black border-r-4 border-black"
                      : "text-black  lg:border-none border-r-1 border-gray-400"
                  } hover:text-black`}
                  onClick={() => handleTabClick(tab?.id)}>
                  {activeTab === tab?.id && (
                    <div className="lg:w-[5%] w-full bg-gray-500 lg:rounded-r-lg"></div>
                  )}
                  <p className="w-full px-2 md:text-2xl text-center">{tab?.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:flex justify-between mt-6 items-end gap-4 hidden">
            <button
              className="text-base font-normal text-secondary bg-black h-12 rounded-md hover:bg-black w-full text-center"
              onClick={() => handleTabClick("All")}
            >
              All Categories
            </button>
            <div className="flex flex-col gap-10">
              <button
                onClick={handleUpClick}
                className="bg-black text-white p-1 rounded-full hover:bg-black"
              >
                <MoveUp className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={handleDownClick}
                className="bg-black p-1 rounded-full hover:bg-black"
              >
                <MoveDown className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 w-full p-0">
          {/* Loading indicator */}
          {isLoading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <SelectedWorkTabImages ActiveTabId={activeTab} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedWorkTabsComponent;
