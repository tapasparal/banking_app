// export default function BranchContact() {
//     const branches = [
//         {
//             name: "AKHERIGANJ BRANCH",
//             email: "bmakheriganj@mdccb.in",
//             person: "B.M.-In-Charge",
//             number: "9874923048",
//         },
//         {
//             name: "BELDANGA BRANCH",
//             email: "bmbeldanga@mdccb.in",
//             person: "Branch Manager",
//             number: "7872478611",
//         },
//         {
//             name: "DOMKAL BRANCH",
//             email: "bmdomkal@mdccb.in",
//             person: "Branch Manager",
//             number: "7872478647",
//         },
//         {
//             name: "FARAKKA BRANCH",
//             email: "bmfarakka@mdccb.in",
//             person: "Branch Manager",
//             number: "7872478638",
//         },
//         {
//             name: "GRAMSALIKA BRANCH",
//             email: "bmgramsalika@mdccb.in",
//             person: "Branch Manager",
//             number: "7872751111",
//         },
//         {
//             name: "ISLAMPUR BRANCH",
//             email: "bmislampur@mdccb.in",
//             person: "Branch Manager",
//             number: "7872771111",
//         },
//         {
//             name: "JANGIPUR BRANCH",
//             email: "bmjangipur@mdccb.in",
//             person: "Branch Manager",
//             number: "7872004422",
//         },
//         {
//             name: "KANDI BRANCH",
//             email: "bmkandi@mdccb.in",
//             person: "Branch Manager",
//             number: "7872478624",
//         },
//     ];

//     return (
//         <div className="w-full bg-gray-50 py-16 px-4 flex justify-center">
//             <div className="max-w-6xl w-full bg-white shadow rounded-xl overflow-hidden border">

//                 {/* Table Header */}
//                 <div className="grid grid-cols-4 bg-gray-100 px-6 py-4 font-semibold text-gray-700 text-sm md:text-base">
//                     <div>NAME OF BRANCHES</div>
//                     <div>EMAIL</div>
//                     <div>CONTACT PERSON</div>
//                     <div>CONTACT NUMBER</div>
//                 </div>

//                 {/* Table Body */}
//                 <div>
//                     {branches.map((b, i) => (
//                         <div
//                             key={i}
//                             className="grid grid-cols-4 px-6 py-4 border-b text-gray-700 text-sm md:text-base hover:bg-gray-50 transition"
//                         >
//                             <div className="font-medium">{b.name}</div>
//                             <div>{b.email}</div>
//                             <div>{b.person}</div>
//                             <div>{b.number}</div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     );
// }


export default function BranchContact() {
    const branches = [
        {
            name: "AKHERIGANJ BRANCH",
            email: "bmakheriganj@mdccb.in",
            person: "B.M.-In-Charge",
            number: "9874923048",
        },
        {
            name: "BELDANGA BRANCH",
            email: "bmbeldanga@mdccb.in",
            person: "Branch Manager",
            number: "7872478611",
        },
        {
            name: "DOMKAL BRANCH",
            email: "bmdomkal@mdccb.in",
            person: "Branch Manager",
            number: "7872478647",
        },
        {
            name: "FARAKKA BRANCH",
            email: "bmfarakka@mdccb.in",
            person: "Branch Manager",
            number: "7872478638",
        },
        {
            name: "GRAMSALIKA BRANCH",
            email: "bmgramsalika@mdccb.in",
            person: "Branch Manager",
            number: "7872751111",
        },
        {
            name: "ISLAMPUR BRANCH",
            email: "bmislampur@mdccb.in",
            person: "Branch Manager",
            number: "7872771111",
        },
        {
            name: "JANGIPUR BRANCH",
            email: "bmjangipur@mdccb.in",
            person: "Branch Manager",
            number: "7872004422",
        },
        {
            name: "KANDI BRANCH",
            email: "bmkandi@mdccb.in",
            person: "Branch Manager",
            number: "7872478624",
        },
    ];

    return (
        <div className="w-full bg-gray-50 py-10 px-4 flex justify-center">
            <div className="max-w-6xl w-full bg-white shadow rounded-xl overflow-hidden border">

                {/* Table Header — Desktop Only */}
                <div className="hidden md:grid grid-cols-4 bg-gray-100 px-6 py-4 font-semibold text-gray-700 text-base">
                    <div>NAME OF BRANCHES</div>
                    <div>EMAIL</div>
                    <div>CONTACT PERSON</div>
                    <div>CONTACT NUMBER</div>
                </div>

                {/* Body */}
                <div>
                    {branches.map((b, i) => (
                        <div
                            key={i}
                            className="
                                border-b px-6 py-4 text-gray-700 
                                hover:bg-gray-50 transition
                                grid grid-cols-1 md:grid-cols-4 gap-2
                            "
                        >
                            {/* Name */}
                            <div>
                                <p className="md:hidden text-gray-500 text-xs font-semibold">BRANCH NAME</p>
                                <p className="font-medium">{b.name}</p>
                            </div>

                            {/* Email */}
                            <div>
                                <p className="md:hidden text-gray-500 text-xs font-semibold">EMAIL</p>
                                <p className="break-words">{b.email}</p>
                            </div>

                            {/* Person */}
                            <div>
                                <p className="md:hidden text-gray-500 text-xs font-semibold">CONTACT PERSON</p>
                                <p>{b.person}</p>
                            </div>

                            {/* Number */}
                            <div>
                                <p className="md:hidden text-gray-500 text-xs font-semibold">CONTACT NUMBER</p>
                                <p>{b.number}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
