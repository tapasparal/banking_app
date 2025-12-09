import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy validation for UI demo
        if (email !== "test@gmail.com") {
            setErr("Email Id does not exist");
            return;
        }
        setErr("");
        alert("Login Successful");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">

            {/* Logo */}
            <h1 className="text-5xl font-bold text-indigo-800 mb-10 tracking-wider">
                MDC<span className="text-indigo-600">BANK</span>
            </h1>

            <div className="w-full max-w-md">
                {/* Error Box */}
                {err && (
                    <div className="bg-red-100 text-red-600 py-3 px-4 rounded-md mb-5 text-center text-sm font-medium shadow">
                        {err}
                    </div>
                )}

                {/* Login Card */}
                <form
                    onSubmit={handleLogin}
                    className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8"
                >
                    {/* Email */}
                    <div className="mb-5">
                        <label className="text-gray-700 font-medium">Email</label>
                        <div className="flex items-center gap-3 mt-1 bg-gray-50 border border-gray-300 rounded-lg px-3 py-3">
                            <MdEmail size={20} className="text-green-600" />
                            <input
                                type="email"
                                className="bg-transparent outline-none w-full text-gray-700"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="text-gray-700 font-medium">Password</label>
                        <div className="flex items-center gap-3 mt-1 bg-gray-50 border border-gray-300 rounded-lg px-3 py-3">
                            <MdLock size={20} className="text-green-600" />
                            <input
                                type="password"
                                className="bg-transparent outline-none w-full text-gray-700"
                                placeholder="Enter Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#04385A] text-white py-3 rounded-full font-semibold text-lg hover:bg-[#022b46] transition"
                    >
                        Login
                    </button>

                    {/* Optional Links */}
                    <div className="text-center mt-4 text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-indigo-700 font-semibold">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
