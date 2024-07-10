import { Avatar } from "./BlogCardCompo"
import { Link } from "react-router-dom"

export const Appbar = ({userName}: {userName: string}) => {
    return <div className="border-b flex justify-between px-10 py-4 bg-slate-200 shadow-sm sha shadow-gray-600 ">
        <div className="flex justify-center place-items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-semibold text-lg text-gray-500">
                    Medium
            </Link>
        </div>
        <div>
            <Link to={`/publish?useName=${userName}`}>
                <button type="button" className="mr-4 text-white bg-teal-600 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            <Avatar size={"big"} name={userName}/>
        </div>
    </div>
}