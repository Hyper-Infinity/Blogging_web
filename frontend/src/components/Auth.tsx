import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpType } from "codedemon-medium-types";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<signUpType>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const data = response.data;
            localStorage.setItem("token", data.jwt);
            navigate("/Blogs?id=" + data.res.id + "&name=" + data.res.name + "&email=" + data.res.email);
        } catch(e) {
            alert("Error while signing up")
        }
    }
    
    return <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-md shadow-md">
            <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                    <div>
                        <div className="px-10 space-y-2  text-center">
                            <div className="text-3xl font-bold">
                                Create an account
                            </div> 
                            <div className="text-slate-500">
                                {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                                <Link className="pl-2 underline text-blue-600 hover:text-blue-400" to={type === "signin" ? "/signup" : "/signin"}>
                                    {type === "signin" ? "Sign up" : "Sign in"}
                                </Link>
                            </div>
                        </div>
                        <div className="pt-8">
                            {type === "signup" ? <LabelledInput label="Name" placeholder="Samarth Patel" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                })
                            }} /> : null}
                            <LabelledInput label="email" placeholder="patelsamarth@gmail.com" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value
                                })
                            }} />
                            <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                })
                            }} />
                            <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}