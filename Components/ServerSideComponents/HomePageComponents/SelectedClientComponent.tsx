import { OurPartnarsApi } from "@/apis/HomepageApi";
import React from "react";
import SelectiveClientsCart from "./SelectedClientCart";

const SelectiveClients = async () => {

    const response = await OurPartnarsApi()
    if (response?.hasOwnProperty("error")) {
        console.log("error in Partners API");
    }
    return (
        <div className="max-w-7xl mx-auto text-center py-8">
            <h2 className="text-4xl font-bold mb-4">{response?.heading?.title}</h2>
            <p className="mb-10 text-xl max-w-5xl mx-auto">
                {response?.heading?.description}
            </p>
            <SelectiveClientsCart response={response} />
        </div>
    );
};

export default SelectiveClients;
