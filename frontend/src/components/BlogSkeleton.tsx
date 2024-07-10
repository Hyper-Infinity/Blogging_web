// import { Circle } from "./BlogCardCompo"

// export const BlogSkeleton = () => {
//     return <div role="status" className="animate-pulse">
//         <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
//             <div className="flex">
//                 <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
//                 <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
//                 <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
//                 <div className="flex justify-center flex-col pl-2">
//                     <Circle />
//                 </div>
//                 <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
//                     <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
//                 </div>
//             </div>
//             <div className="text-xl font-semibold pt-2">
//                 <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
//             </div>
//             <div className="text-md font-thin">
//                 <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
//             </div>
//             <div className="text-slate-500 text-sm font-thin pt-4">
//                 <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
//             </div>
//         </div>
//         <span className="sr-only">Loading...</span>
//     </div>
// }

export const BlogSkeleton = () => {
    return <div role="status" className="w-screen max-w-screen-md p-4 border-b border-gray-100 rounded shadow animate-pulse md:p-6 dark:border-gray-500">
        <div className="flex items-center mb-4">
            <svg className="w-8 h-8 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
            </div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
        <span className="sr-only">Loading...</span>
    </div>

}