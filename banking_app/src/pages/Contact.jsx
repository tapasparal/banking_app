import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";
import BranchContact from "./BranchContact";
import TopInfoBar from "../components/TopInfoBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            alert("Please fill all fields!");
            return;
        }

        // You can POST to your backend API here
        console.log("Form Data:", form);
        alert("Message sent successfully!");

        setForm({ name: "", email: "", message: "" });
    };

    return (
        <>
            <div>
                <TopInfoBar />
                <Header />
                <Navbar />
            </div>
            <div className="w-full bg-gray-50 pb-20">
                {/* HEADING */}
                <div className="text-center py-14">
                    <h2 className="text-4xl font-bold text-blue-900">
                        Detailed Branch Information given below
                    </h2>
                </div>

                {/* TOP CARDS */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

                    {/* CARD 1 */}
                    <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-10 text-center transition">
                        <FaBriefcase className="text-pink-500 text-5xl mx-auto mb-6" />
                        <h3 className="text-lg font-bold text-blue-900 mb-2">HEAD OFFICE</h3>
                        <p className="text-gray-600">Janmenjoy Mandal</p>
                        <p className="text-gray-600">Chief Executive Officer</p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-10 text-center transition">
                        <FaPhoneAlt className="text-pink-500 text-5xl mx-auto mb-6" />
                        <h3 className="text-lg font-bold text-blue-900 mb-2">CALL US AT</h3>
                        <p className="text-xl font-semibold text-pink-600">+91 76050 71507</p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-10 text-center transition">
                        <FaEnvelope className="text-pink-500 text-5xl mx-auto mb-6" />
                        <h3 className="text-lg font-bold text-blue-900 mb-2">EMAIL ADDRESS</h3>
                        <p className="text-gray-600">ho@mdccb.in</p>
                        <p className="text-gray-600">ceo@mdccb.in</p>
                        <p className="text-gray-600">123mdccb@gmail.com</p>
                    </div>
                </div>

                <div>
                    <BranchContact />
                </div>

                {/* CONTACT FORM */}
                <div className="max-w-4xl mx-auto mt-20 bg-white rounded-xl shadow-xl p-10 px-8">

                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                        Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="grid gap-6">

                        <div>
                            <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold text-gray-700">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold text-gray-700">Your Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Write your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}


