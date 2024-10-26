import { SelectedWorkTabsApi } from "@/apis/HomepageApi";
import SelectedWorkTabsComponent from "@/Components/ClientSideComponents/HomePageComponents/SelectedWorkTabsComponent";
import React from "react";

type Props = {};

const SelectedWorkComponent = async () => {
  const tabsResponse = await SelectedWorkTabsApi();
  return (
    <div className="w-full">
      <SelectedWorkTabsComponent tabsResponse={tabsResponse} />
    </div>
  );
};

export default SelectedWorkComponent;
