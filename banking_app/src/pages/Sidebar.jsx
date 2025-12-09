import React from "react";

export default function Sidebar() {
    return (
        <aside className="w-full md:w-80 bg-white p-4 shadow border border-gray-200 rounded">

            {/* Calculator Section */}
            <h2 className="text-lg font-semibold mb-3 border-b pb-1">Calculator</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="cursor-pointer border p-1 rounded shadow hover:shadow-md transition">
                    <img
                        src="http://birbhumccb.com/images/button-term-loan.jpg"
                        alt="Term Loan"
                        className="w-full h-24 object-cover"
                    />
                </div>
                <div className="cursor-pointer border p-1 rounded shadow hover:shadow-md transition">
                    <img
                        src="http://birbhumccb.com/images/button-emi-loan.jpg"
                        alt="EMI Loan"
                        className="w-full h-24 object-cover"
                    />
                </div>
            </div>


            {/* Branch Locator */}
            <h2 className="text-lg font-semibold mb-3 border-b pb-1">Branch Locator</h2>

            <select
                className="w-full border p-2 rounded mb-3"
            >
                <option>-- Select Branch --</option>
                <option>Suri</option>
                <option>Bolpur</option>
                <option>Rampurhat</option>
                <option>Dubrajpur</option>
                <option>Murahara</option>
            </select>

            <button className="w-full bg-yellow-700 text-white py-2 rounded hover:bg-yellow-800 transition">
                LOCATION
            </button>


            {/* ATM Locator */}
            <h2 className="text-lg font-semibold mt-6 mb-3 border-b pb-1">ATM Locator</h2>

            <select
                className="w-full border p-2 rounded mb-3"
            >
                <option>-- Select ATM --</option>
                <option>Suri ATM</option>
                <option>Bolpur ATM</option>
                <option>Rampurhat ATM</option>
            </select>

            <button className="w-full bg-yellow-700 text-white py-2 rounded hover:bg-yellow-800 transition">
                LOCATION
            </button>
        </aside>
    );
}
