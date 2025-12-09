import { FaDownload } from "react-icons/fa";
import TopInfoBar from "../components/TopInfoBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Downloads() {

    const loanForms = [
        {
            id: 1,
            name: "Karmasathi Loan Application",
            file: "/forms/karmasathi-loan.pdf"
        },
        {
            id: 2,
            name: "Work Order Loan for Non-individual",
            file: "/forms/work-order-non-individual.pdf"
        },
        {
            id: 3,
            name: "Vehicle Loan",
            file: "/forms/vehicle-loan.pdf"
        },
        {
            id: 4,
            name: "Term Loan for Non-individual",
            file: "/forms/term-loan-non-individual.pdf"
        },
        {
            id: 5,
            name: "Term Loan for Individual",
            file: "/forms/term-loan-individual.pdf"
        }
    ];

    const miscForms = [
        {
            id: 1,
            name: "Term Deposit Opening Form",
            file: "/forms/td-opening.pdf"
        },
        {
            id: 2,
            name: "A/C Opening Form For Non-Individual",
            file: "/forms/ac-opening-non-individual.pdf"
        },
        {
            id: 3,
            name: "A/C Opening Form For Individual",
            file: "/forms/ac-opening-individual.pdf"
        },
        {
            id: 4,
            name: "Standing Instruction Form",
            file: "/forms/standing-instruction.pdf"
        },
        {
            id: 5,
            name: "SMS Alert Form",
            file: "/forms/sms-alert.pdf"
        }
    ];

    const downloadFile = (fileUrl) => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileUrl.split("/").pop();
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
                {/* <h2 className="text-3xl font-bold text-center mb-10">
                Downloads
            </h2> */}

                <div className="grid md:grid-cols-2 gap-10">

                    {/* LEFT - Loan Application Forms */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Loan Application Form</h3>

                        <table className="w-full border text-sm">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="p-3 border">Sl.No</th>
                                    <th className="p-3 border">Particulars</th>
                                    <th className="p-3 border">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loanForms.map(item => (
                                    <tr key={item.id} className="border">
                                        <td className="p-3 border text-center">{item.id}</td>
                                        <td className="p-3 border">{item.name}</td>
                                        <td className="p-3 border text-center">
                                            <button
                                                onClick={() => downloadFile(item.file)}
                                                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center gap-2 mx-auto"
                                            >
                                                <FaDownload /> DOWNLOAD
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* RIGHT - Misc Application Forms */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Misc Application Form</h3>

                        <table className="w-full border text-sm">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="p-3 border">Sl.No</th>
                                    <th className="p-3 border">Particulars</th>
                                    <th className="p-3 border">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                {miscForms.map(item => (
                                    <tr key={item.id} className="border">
                                        <td className="p-3 border text-center">{item.id}</td>
                                        <td className="p-3 border">{item.name}</td>
                                        <td className="p-3 border text-center">
                                            <button
                                                onClick={() => downloadFile(item.file)}
                                                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center gap-2 mx-auto"
                                            >
                                                <FaDownload /> DOWNLOAD
                                            </button>
                                        </td>
                                    </tr>
                                ))}
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
