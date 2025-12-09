// import { useState } from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// // ALL BRANCH COORDINATES
// const branches = [
//     { name: "HEAD OFFICE", lat: 24.1005, lng: 88.2560 },
//     { name: "AKHERIGANJ", lat: 24.6701, lng: 88.0473 },
//     { name: "BELDANGA", lat: 23.9300, lng: 88.2600 },
//     { name: "DOMKAL", lat: 24.1916, lng: 88.5858 },
//     { name: "FARAKKA", lat: 24.8190, lng: 87.8874 },
//     { name: "GRAMSALIKA", lat: 24.3200, lng: 88.1500 },
//     { name: "ISLAMPUR", lat: 24.1700, lng: 88.2000 },
//     { name: "JANGIPUR", lat: 24.4764, lng: 88.0630 },
//     { name: "KANDI BRANCH", lat: 23.9511, lng: 88.0364 },
//     { name: "KHAGRA", lat: 24.1050, lng: 88.2750 },
//     { name: "KUMARSANDA", lat: 24.2900, lng: 88.3200 },
//     { name: "LALBAGH", lat: 24.2500, lng: 88.2600 },
//     { name: "LALGOLA", lat: 24.4201, lng: 88.2526 },
//     { name: "MAHESAIL", lat: 24.2800, lng: 88.1300 },
//     { name: "MAIN", lat: 24.1100, lng: 88.2500 },
//     { name: "NABAGRAM", lat: 23.8500, lng: 88.1500 },
//     { name: "NAGAR", lat: 24.3300, lng: 88.2200 },
//     { name: "NOWDA", lat: 24.3300, lng: 88.0900 },
//     { name: "RAGHUNATHGANJ", lat: 24.4600, lng: 87.7600 },
//     { name: "RANIDANGA", lat: 24.0500, lng: 88.3500 },
//     { name: "SAGARDIGHI", lat: 24.3500, lng: 88.0500 },
//     { name: "SUTI", lat: 24.6200, lng: 88.0300 }
// ];

// // DEFAULT EXTRA DATA
// const defaultDetails = {
//     micr: "7428XXXXX",
//     ifsc: "WBSC0MCCBXX",
//     phone: "0000000000",
//     address: "Address will be updated soon",
//     email: "info@mdccb.in"
// };

// export default function LocatorFinder() {
//     const [selected, setSelected] = useState(branches[0]);

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyB8HneTHpnb5MFmK5fbSADdm0vcG5ynxa4"  // <--- Replace
//     });

//     if (!isLoaded) return <p className="text-center py-10">Loading Map...</p>;

//     return (
//         <div className="max-w-7xl mx-auto p-6 mt-6">
//             <h2 className="text-3xl font-semibold text-center text-blue-900">
//                 Branch Locator & IFSC Finder
//             </h2>
//             <p className="text-center text-gray-600 mb-8">
//                 Select any branch to view details and map.
//             </p>

//             <div className="grid md:grid-cols-2 gap-8">

//                 {/* LEFT PANEL */}
//                 <div>
//                     <select
//                         className="w-full border border-gray-400 rounded-lg p-3 bg-white shadow-sm 
//                         focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={selected.name}
//                         onChange={(e) =>
//                             setSelected(branches.find(b => b.name === e.target.value))
//                         }
//                     >
//                         {branches.map(br => (
//                             <option key={br.name} value={br.name}>
//                                 {br.name}
//                             </option>
//                         ))}
//                     </select>

//                     {/* DETAILS CARD */}
//                     <div className="mt-6 p-5 bg-white shadow-lg rounded-lg border border-gray-200">
//                         <h3 className="text-xl font-bold text-blue-700">BRANCH</h3>
//                         <p className="mt-1 text-gray-800">{selected.name}</p>

//                         <h3 className="text-xl font-bold text-blue-700 mt-4">ADDRESS</h3>
//                         <p className="text-gray-700">{defaultDetails.address}</p>

//                         <h3 className="text-xl font-bold text-blue-700 mt-4">IFSC</h3>
//                         <p>{defaultDetails.ifsc}</p>

//                         <h3 className="text-xl font-bold text-blue-700 mt-4">MICR</h3>
//                         <p>{defaultDetails.micr}</p>

//                         <h3 className="text-xl font-bold text-blue-700 mt-4">CONTACT</h3>
//                         <p className="font-semibold">{defaultDetails.phone}</p>
//                         <p>{defaultDetails.email}</p>
//                     </div>
//                 </div>

//                 {/* RIGHT MAP WITH MARKER */}
//                 <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
//                     <GoogleMap
//                         zoom={14}
//                         center={{ lat: selected.lat, lng: selected.lng }}
//                         mapContainerClassName="w-full h-full"
//                     >
//                         <Marker
//                             position={{ lat: selected.lat, lng: selected.lng }}
//                             icon={{
//                                 url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
//                             }}
//                         />
//                     </GoogleMap>
//                 </div>
//             </div>
//         </div>
//     );
// }



import { useEffect, useState } from "react";

export default function LocatorFinder() {
    const [branches, setBranches] = useState([]);
    const [selected, setSelected] = useState(null);

    // Load JSON
    useEffect(() => {
        fetch("/data/branches.json")
            .then((res) => res.json())
            .then((data) => {
                setBranches(data);
                setSelected(data[0]);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 mt-6">

            {/* TITLE */}
            <h2 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                Branch Locator & IFSC Finder
            </h2>

            <p className="text-center text-gray-700 mt-2 mb-8">
                Select any branch to view complete details with live map location.
            </p>

            {selected && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT PANEL */}
                    <div className="bg-white shadow-xl rounded-xl border border-gray-300 p-6">

                        {/* Dropdown */}
                        <label className="text-lg font-semibold text-blue-900 mb-2 block">
                            Select Branch
                        </label>

                        <select
                            className="w-full border border-gray-400 rounded-lg p-3 bg-blue-50 text-blue-900 font-semibold shadow-sm focus:ring-2 focus:ring-blue-600"
                            value={selected.name}
                            onChange={(e) =>
                                setSelected(branches.find((b) => b.name === e.target.value))
                            }
                        >
                            {branches.map((br) => (
                                <option key={br.name} value={br.name}>
                                    {br.name}
                                </option>
                            ))}
                        </select>

                        {/* Details Card */}
                        <div className="mt-6 p-5 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-md rounded-xl border border-blue-200">

                            <h3 className="text-lg font-bold text-blue-900">BRANCH</h3>
                            <p className="text-black font-medium">{selected.name}</p>

                            <h3 className="text-lg font-bold text-blue-900 mt-4">ADDRESS</h3>
                            <p className="text-black">{selected.address}</p>

                            <h3 className="text-lg font-bold text-blue-900 mt-4">IFSC</h3>
                            <p className="text-black font-semibold">{selected.ifsc}</p>

                            <h3 className="text-lg font-bold text-blue-900 mt-4">MICR</h3>
                            <p className="text-black font-semibold">{selected.micr}</p>

                            <h3 className="text-lg font-bold text-blue-900 mt-4">CONTACT</h3>
                            <p className="text-black">{selected.phone}</p>
                            <p className="text-black">{selected.email}</p>
                        </div>
                    </div>

                    {/* RIGHT MAP */}
                    <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-400 bg-white">
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB8HneTHpnb5MFmK5fbSADdm0vcG5ynxa4&q=${selected.lat},${selected.lng}&zoom=14`}
                            allowFullScreen
                        />
                    </div>

                </div>
            )}
        </div>
    );
}
