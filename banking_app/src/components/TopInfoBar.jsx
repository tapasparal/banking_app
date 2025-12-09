// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function TopInfoBar() {
//     return (
//         <div className="w-full">
//             <div className="bg-blue-900 text-white text-sm py-2 px-4 flex items-center justify-between">
//                 <p className="font-medium">
//                     WELCOME TO MURSHIDABAD DISTRICT CENTRAL CO-OPERATIVE BANK LTD.
//                 </p>

//                 <div className="flex items-center gap-6 text-sm font-semibold">
//                     <Link to="/lmwf" className="hover:underline">LMWF CALCULATOR</Link>
//                     <Link to="/shg-login" className="hover:underline">SHG LOGIN</Link>
//                     <Link to="/locations" className="hover:underline">VIEW LOCATIONS</Link>
//                     <a href="tel:+917605071507" className="hover:underline">+91 7605-071-507</a>
//                     <Link to="/login" className="hover:underline">LOGIN</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from 'react'
import { Link } from 'react-router-dom'

export default function TopInfoBar() {
    return (
        <div className="w-full bg-blue-900 text-white text-sm">
            <div className="max-w-7xl mx-auto py-2 px-4 flex flex-col md:flex-row items-center md:justify-between gap-2">

                {/* Welcome Text */}
                <p className="font-medium text-center md:text-left text-xs sm:text-sm">
                    WELCOME TO MURSHIDABAD DISTRICT CENTRAL CO-OPERATIVE BANK LTD.
                </p>

                {/* Links Section */}
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold">
                    <Link to="/lmwf" className="no-underline hover:no-underline">LMWF CALCULATOR</Link>
                    <Link to="/shg-login" className="no-underline hover:no-underline">SHG LOGIN</Link>
                    <Link to="/locations" className="no-underline hover:no-underline">VIEW LOCATIONS</Link>
                    <a href="tel:+917605071507" className="no-underline hover:no-underline">+91 7605-071-507</a>
                    <Link to="/login" className="no-underline hover:no-underline">LOGIN</Link>
                </div>

            </div>
        </div>
    )
}
