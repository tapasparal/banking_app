// import React from "react";
// import TopInfoBar from "../components/TopInfoBar";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function About() {
//     return (
//         <>
//             <TopInfoBar />
//             <Header />
//             <Navbar />
//             <div className="w-full bg-gray-100 py-10">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

//                     {/* LEFT CONTENT */}
//                     <div className="md:col-span-2">
//                         <h1 className="text-3xl font-semibold text-blue-900 mb-6">Overview</h1>

//                         <p className="text-gray-700 leading-relaxed mb-10 text-justify">
//                             The Murshidabad District is a river oriented land. It is surrounded by
//                             River Padma, Bhagirathi, Jalangi, Dwarka, Maurahi etc. There are no
//                             renowned industries in the Murshidabad District, so Agriculture and
//                             allied-agriculture are the backbone of the Economy of this District.
//                             Socio Structure of this District has been changed different times,
//                             like Ganga Bhanga, Padma Bhangan etc. At present there are 26 (Twenty
//                             Six) Blocks under area of operation of MURSHIDABAD DISTRICT CENTRAL
//                             CO-OPERATIVE BANK LTD.
//                         </p>

//                         <h1 className="text-3xl font-semibold text-blue-900 mb-6">Our Vision</h1>

//                         <p className="text-gray-700 leading-relaxed text-justify">
//                             About 72-76% of the populations are dependent directly or indirectly
//                             on agriculture & its allied activities and obviously majority of the
//                             are poor, small & marginal farmers. Among the, about 70% of the
//                             farmers belong to minority community in this District. Before
//                             independent there were 4 (four) Co-operative Banks under the each
//                             Sub-Division of this District. These were (i) Berhampore Co-operative
//                             Bank, (ii) Kandi Co-operative Bank, (iii) Murshidabad-Jiaganj
//                             Co-operative Bank and (iv) Jangipur Co-operative Bank. The main
//                             activities of these banks were confined to the lending for its members
//                             exclusively for the agricultural activities.
//                         </p>

//                         <h1 className="text-3xl font-semibold text-blue-900 mb-6">Our Mission</h1>

//                         <p className="text-gray-700 leading-relaxed text-justify">
//                             MDCCB had been recognized by merging the said Co-operative Banks in the year 1959. It is registered under the West Bengal Co-operative Societies Act being the Registration No. 38/59 dated 25-07-1959. The main focus of the bank was to provide advance on agriculture and allied activities to the poor farmers of the villages in the District of Murshidabad.

//                             In the year 1992-93, the total scenario of the Indian Economy has changed. The Global Economy has opened up. The competition has been increasing by leaps and bounds. In tune of the global scenario, the bank has started to disburse Diversified Loan in order to make its profitability, namely Cash Credit, Work Order, ECCS, Personal Loan, and Project Loan etc. along with the main agricultural loan.
//                         </p>

//                         <h1 className="text-3xl font-semibold text-blue-900 mb-6">Our Strengths</h1>

//                         <p className="text-gray-700 leading-relaxed text-justify">
//                             Bank has got licence from the Reserve Bank of India under Section 22 of the Banking Regulation Act, 1949 (AACS), bearing no. RPCD.KOL.NO.10-C dated 30-04-2012. Bank has also implemented Core Banking Solution (CBS) during July, 2012. At present Bank has 22 (Twenty Two) CBS enabled branches.
//                         </p><hr />
//                     </div>

//                     {/* RIGHT NOTICE BOX */}
//                     <div className="bg-gray-200 p-6 rounded h-48 overflow-hidden sticky top-24">
//                         <div className="animate-scrollUp text-gray-700 leading-relaxed text-sm font-bold text-justify">
//                             All scheduled and non-scheduled banks – public, private, foreign,
//                             cooperative, regional rural and local area banks – will observe
//                             public holiday on second and fourth Saturday of every month. All bank
//                             branches will remain closed on these days.
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }


import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <TopInfoBar />
            <Header />
            <Navbar />

            <div className="w-full bg-gray-100 py-12">

                {/* -------- MISSION SECTION -------- */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white shadow-xl rounded-xl border-4 border-blue-600 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">

                            {/* LEFT IMAGE */}
                            <div className="h-72 md:h-full w-full bg-black">
                                <img
                                    src="/images/bank2.jpg"
                                    alt="Mission"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>

                            {/* RIGHT TEXT */}
                            <div className="p-10 flex flex-col justify-center bg-white">
                                <h2 className="text-4xl font-bold text-blue-700 mb-5">Mission</h2>
                                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                                    To lead the charge in providing reliable, high-performance and
                                    eco-friendly solutions. We aim to build products that meet daily
                                    needs and support a cleaner, sustainable future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------- VISION SECTION -------- */}
                <div className="max-w-7xl mx-auto px-4 mt-16">
                    <div className="bg-white shadow-xl rounded-xl border-4 border-blue-500 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row-reverse">

                            {/* RIGHT IMAGE */}
                            <div className="h-72 md:h-full w-full bg-black">
                                <img
                                    src="/images/bank3.jpg"
                                    alt="Vision"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>

                            {/* LEFT TEXT */}
                            <div className="p-10 flex flex-col justify-center bg-white">
                                <h2 className="text-4xl font-bold text-blue-700 mb-5">Vision</h2>
                                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                                    Our vision is to empower communities with advanced technology,
                                    better energy solutions and long-term sustainable growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------- OVERVIEW SECTION -------- */}
                <div className="max-w-7xl mx-auto px-4 mt-16">
                    <div className="bg-white shadow-lg rounded-xl border border-blue-300 p-10">
                        <h2 className="text-4xl font-bold text-blue-800 mb-5">Overview</h2>
                        <p className="text-gray-700 leading-relaxed text-lg text-justify">
                            The Murshidabad District is river-based land surrounded by Padma,
                            Bhagirathi, Jalangi and others. Agriculture remains the backbone of
                            the local economy, with 26 blocks under active operation.
                        </p>
                    </div>
                </div>

                {/* -------- STRENGTH SECTION -------- */}
                <div className="max-w-7xl mx-auto px-4 mt-16 mb-20">
                    <div className="bg-white shadow-lg rounded-xl border border-blue-300 p-10">
                        <h2 className="text-4xl font-bold text-blue-800 mb-5">Our Strengths</h2>
                        <p className="text-gray-700 leading-relaxed text-lg text-justify">
                            The bank is licensed by the Reserve Bank of India and has implemented
                            modern Core Banking Solutions, operating 22 CBS-enabled branches.
                        </p>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}

