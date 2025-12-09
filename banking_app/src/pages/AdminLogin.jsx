import { useState } from "react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Please fill all fields");
            return;
        }

        // Example authentication (You can replace it with API)
        if (username === "admin" && password === "1234") {
            alert("Login Successful");
            setError("");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523380772514-9c05838f7c99?auto=format&fit=crop&w=1400&q=80')`
            }}
        >
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-600/40 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-md">
                    MDCCB SHG
                </h1>

                {/* Login Card */}
                <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl w-[350px] md:w-[420px] px-8 py-8 border border-white/40">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Admin Login
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-5">

                        {/* Username */}
                        <input
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-blue-400/40 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none"
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-blue-400/40 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none"
                        />

                        {/* Error */}
                        {error && (
                            <p className="text-red-600 text-sm text-left mt-1">{error}</p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-2 rounded-full transition-all duration-200"
                        >
                            SIGN IN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
