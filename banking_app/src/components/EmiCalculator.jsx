import { useState } from "react";

export default function EMICalculator() {
    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");
    const [months, setMonths] = useState("");
    const [emi, setEmi] = useState(null);

    const calculateEMI = () => {
        if (!amount || !rate || !months) return;

        let r = rate / 12 / 100;
        let emiCalc =
            (amount * r * Math.pow(1 + r, months)) /
            (Math.pow(1 + r, months) - 1);

        setEmi(emiCalc.toFixed(2));
    };

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">

            {/* LEFT IMAGE SECTION */}
            <div className="md:w-1/2 w-full h-64 md:h-auto relative">
                <img
                    src="/images/bank4.png"
                    alt="Bank"
                    className="w-full h-full object-cover brightness-95"
                />

                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>

                {/* Title on Image */}
                <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-bold">EMI Calculator</h1>
                    <p className="text-sm md:text-base opacity-90">
                        Calculate your monthly installment instantly
                    </p>
                </div>
            </div>

            {/* RIGHT CALCULATOR PANEL */}
            <div className="md:w-1/2 w-full flex justify-center items-center py-12 px-6 bg-[#f8f9fc]">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-blue-100 
            animate-[fadeIn_0.6s_ease]">

                    <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
                        Loan EMI Calculator
                    </h2>

                    {/* INPUTS */}
                    <div className="space-y-4">
                        <input
                            type="number"
                            placeholder="Loan Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 
              focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="Interest Rate (%)"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 
              focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="number"
                            placeholder="Loan Tenure (Months)"
                            value={months}
                            onChange={(e) => setMonths(e.target.value)}
                            className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 
              focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* CALCULATE BUTTON */}
                    <button
                        onClick={calculateEMI}
                        className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold
            transition hover:bg-black"
                    >
                        Calculate EMI
                    </button>

                    {/* EMI Result */}
                    {emi && (
                        <div className="mt-6 p-5 rounded-xl bg-blue-50 border border-blue-200 text-center 
              animate-[slideUp_0.5s_ease]">

                            <p className="text-gray-600">Your Monthly EMI is</p>
                            <h3 className="text-3xl font-bold text-blue-800">₹ {emi}</h3>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
