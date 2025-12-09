// import React from "react";

// export default function Header() {
//     const title = "Murshidabad District Central Co-operative Bank Ltd.";

//     return (
//         <header className="flex items-center gap-4 px-4 py-3 bg-blue-300 border-b">
//             {/* Logo */}
//             <img
//                 src="./images/logo_MD.png"
//                 alt="logo"
//                 className="ml-2 w-70 h-10"
//             />

//             {/* Typewriter Effect with Infinite Repeat */}
//             <div className="flex items-center overflow-hidden whitespace-nowrap font-mono
//                       text-[1.3rem] sm:text-[1.6rem] md:text-[1.9rem] font-bold text-blue-900 mx-20">

//                 {/* Text */}
//                 <div className="overflow-hidden pr-1 animate-typewriter">
//                     {title}
//                 </div>

//                 {/* Cursor */}
//                 <span className="border-r-4 border-black ml-1 animate-cursorVisible h-[1.2em]"></span>
//             </div>
//         </header>
//     );
// }




import React from "react";

export default function Header() {
    const title = "Murshidabad District Central Co-operative Bank Ltd.";

    return (
        <header className="
            flex items-center gap-3 
            px-3 py-3 
            bg-blue-300 border-b 
            flex-wrap sm:flex-nowrap
        ">

            {/* Logo */}
            <img
                src="./images/logo_MD.png"
                alt="logo"
                // className="
                //     w-12 h-auto 
                //     sm:w-14 
                //     md:w-16 
                //     lg:w-20
                // "
                className="
                    ml-2
                    w-70
                    h-10
                "
            />

            {/* Typewriter Text */}
            <div
                className="
                    flex items-center 
                    overflow-hidden whitespace-nowrap 
                    font-mono font-bold text-blue-900

                    text-[1rem] 
                    sm:text-[1.3rem] 
                    md:text-[1.6rem] 
                    lg:text-[1.9rem]
                    md:mx-12

                    w-full sm:w-auto 
                    mt-2 sm:mt-0 
                "
            >

                {/* Animated Text */}
                <div
                    className="
                        overflow-hidden 
                        pr-1 
                        animate-typewriter
                        max-w-[100%] 
                        sm:max-w-[450px]
                        md:max-w-[600px]
                        lg:max-w-[900px]
                    "
                >
                    {title}
                </div>

                {/* Cursor */}
                <span
                    className="
                        border-r-4 border-black ml-1 
                        animate-cursorVisible 
                        h-[1.1em]
                    "
                ></span>
            </div>
        </header>
    );
}
