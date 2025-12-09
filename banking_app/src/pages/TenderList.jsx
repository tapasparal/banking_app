import { FaDownload } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import TopInfoBar from "../components/TopInfoBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TenderList() {

    const tenders = [
        {
            id: 1,
            subject: "Supply of Computer & Networking Items",
            ref: "MDCCB/TDR/2025/01",
            date: "05-12-2025",
            file: "/tenders/computer-supply.pdf",
            applyLink: "https://mdccb.in/apply-tender/1"
        },
        {
            id: 2,
            subject: "Security Service Tender",
            ref: "MDCCB/TDR/2025/02",
            date: "10-12-2025",
            file: "/tenders/security-service.pdf",
            applyLink: "https://mdccb.in/apply-tender/2"
        }
        // আরও চাইলে এখানে add করো…
    ];

    const downloadFile = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split("/").pop();
        link.click();
    };

    return (
        <>
            <div>
                <TopInfoBar />
                <Header />
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto px-4 py-10">

                <h2 className="text-3xl font-semibold mb-6">
                    Tender List Details
                </h2>

                <div className="bg-white shadow rounded-lg p-6">

                    {/* TABLE */}
                    <div className="overflow-x-auto">
                        <table className="w-full border rounded-lg text-sm">

                            <thead className="bg-blue-50 text-gray-700 font-semibold">
                                <tr>
                                    <th className="p-3 border">Subject/Topic</th>
                                    <th className="p-3 border">Reference Number</th>
                                    <th className="p-3 border">Publication Date</th>
                                    <th className="p-3 border">Download</th>
                                    <th className="p-3 border">Apply Tender</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tenders.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center p-6 text-gray-500"
                                        >
                                            No tenders available right now.
                                        </td>
                                    </tr>
                                ) : (
                                    tenders.map((t) => (
                                        <tr key={t.id} className="border hover:bg-gray-50">

                                            <td className="p-3 border">{t.subject}</td>
                                            <td className="p-3 border text-center">{t.ref}</td>
                                            <td className="p-3 border text-center">{t.date}</td>

                                            {/* DOWNLOAD BUTTON */}
                                            <td className="p-3 border text-center">
                                                <button
                                                    onClick={() => downloadFile(t.file)}
                                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2 mx-auto"
                                                >
                                                    <FaDownload /> Download
                                                </button>
                                            </td>

                                            {/* APPLY BUTTON */}
                                            <td className="p-3 border text-center">
                                                <a
                                                    href={t.applyLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2 justify-center"
                                                >
                                                    Apply <FaArrowRight />
                                                </a>
                                            </td>

                                        </tr>
                                    ))
                                )}
                            </tbody>

                        </table>
                    </div>

                </div>

            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
