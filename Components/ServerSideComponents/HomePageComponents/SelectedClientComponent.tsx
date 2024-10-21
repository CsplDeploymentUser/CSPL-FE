import React from "react";

const SelectiveClients = () => {
    // Array of logo URLs (replace with actual image paths)
    const logos = [
        "/path/to/logo1.png",
        "/path/to/logo2.png",
        "/path/to/logo3.png",
        "/path/to/logo4.png",
        "/path/to/logo5.png",
        "/path/to/logo6.png",
        "/path/to/logo7.png",
        "/path/to/logo8.png",
    ];

    return (
        <div className="max-w-7xl mx-auto text-center py-16">
            <h2 className="text-3xl font-bold mb-4">SELECTIVE CLIENTS</h2>
            <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
                We are proud to partner with a diverse range of clients across various industries. Our commitment to delivering
                innovative solutions and exceptional service has allowed us to build lasting relationships with all these organizations.
            </p>
            <div className="border-t w-20 mx-auto mb-10"></div>
            <div className="flex flex-wrap justify-center gap-8">
                {logos.map((logo, index) => (
                    <div key={index} className="w-40 h-20 flex items-center justify-center">
                        <img src={logo} alt={`Client logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectiveClients;
