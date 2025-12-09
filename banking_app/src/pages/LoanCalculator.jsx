import { useState } from "react";

export default function LoanCalculator() {
    const [dob, setDob] = useState("");
    const [term, setTerm] = useState("");
    const [amount, setAmount] = useState("");
    const [age, setAge] = useState(null);
    const [status, setStatus] = useState("");

    const calculateAge = (birthDate) => {
        const today = new Date();
        const dobDate = new Date(birthDate);

        let years = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
            years--;
        }
        return years;
    };

    const handleCalculate = () => {
        if (!dob || !term || !amount) {
            setStatus("Please fill all fields");
            return;
        }

        const userAge = calculateAge(dob);
        setAge(userAge);

        if (userAge < 18 || userAge > 60) {
            setStatus("NOT APPLICABLE");
        } else {
            setStatus("Eligible");
        }
    };

    const handleClear = () => {
        setDob("");
        setTerm("");
        setAmount("");
        setAge(null);
        setStatus("");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-700">
                    M.D.C.C.B. LOANEE MEMBER WELFARE FUND CALCULATOR
                </h1>
                <p className="text-gray-500 mt-2">
                    Developed By Mushidabad District Central Co-operative Bank Ltd.
                </p>

                {/* Form Section */}
                <div className="mt-10 bg-white shadow rounded-lg border border-gray-200 p-8">

                    {/* Date of Birth */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center py-4 border-b">
                        <label className="text-lg font-medium">DATE OF BIRTH</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="bg-gray-50 border px-4 py-2 rounded-md outline-none"
                        />
                    </div>

                    {/* Term */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center py-4 border-b">
                        <label className="text-lg font-medium">Term (MONTH)</label>
                        <input
                            type="number"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            className="bg-gray-50 border px-4 py-2 rounded-md outline-none"
                            placeholder="Enter months"
                        />
                    </div>

                    {/* Loan Amount */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center py-4 border-b">
                        <label className="text-lg font-medium">Loan AMOUNT IN Rs.</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="bg-gray-50 border px-4 py-2 rounded-md outline-none"
                            placeholder="Enter amount"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={handleCalculate}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold"
                        >
                            Calculate
                        </button>

                        <button
                            onClick={handleClear}
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Result Section */}
                {age !== null && (
                    <div className="mt-10 bg-gray-100 p-10 rounded-lg shadow-inner">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">
                            {age} years old
                        </h2>
                        <p className="text-xl font-semibold text-gray-600">
                            {status}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
