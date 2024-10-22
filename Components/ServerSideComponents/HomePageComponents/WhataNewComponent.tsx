import React from 'react';

const newsData = [
    {
        id: 1,
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022",
        imageUrl: "/signup.png",
    },
    {
        id: 2,
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022",
        imageUrl: "/signup.png",
    },
    {
        id: 3,
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022",
        imageUrl: "/signup.png",
    },
    {
        id: 4,
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022",
        imageUrl: "/signup.png",
    },
];

function WhatsNewSection() {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-2">
                <div className="border-b-[1px] w-[100px] h-9 border-black"></div>
                <h2 className="text-4xl font-bold text-center mb-8">WHAT'S NEW</h2>
                <div className="border-b-[1px] w-[100px] h-9 border-black"></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:px-0 px-4">
                {newsData.map((news) => (
                    <div className="flex md:flex-col flex-row bg-white rounded-lg border-[1px] cartshadow  md:p-0 p-2">
                        <img
                            src={news?.imageUrl}
                            alt={news?.title}
                            className="md:w-full w-[180px] md:h-54 h-25 object-cover rounded-md"
                        />
                        <div className="md:p-4 px-3">
                            <span className="text-blue-600 text-[15px] inline-block bg-gray-100 px-2 py-1 rounded-md">
                                {news?.category}
                            </span>
                            <h2 className="md:text-xl text-md md:font-semibold text-gray-800 py-3">
                                {news?.title}
                            </h2>
                            <p className="text-gray-500 text-sm ">{news?.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhatsNewSection;
