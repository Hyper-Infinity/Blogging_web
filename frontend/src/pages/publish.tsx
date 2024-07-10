import { Appbar } from "../components/AppBarCompo"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Editor } from 'primereact/editor';


export const Publish = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("userName");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar userName={name || "Samarth"} />
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full space-y-6">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="w-full bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title" />

                {/* <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} /> */}

                <Editor onTextChange={(event: any) => {
                    setDescription(event.textValue)
                }} style={{ height: '320px' }} />

                <div className="pb-5">
                    <button onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog/post`, {
                            title,
                            content: description,
                            published: true
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.res.id}?id=${response.data.res.id}&name=${response.data.res.author.name}`)
                    }} type="submit" className="mt-4 shadow-sm shadow-slate-800 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-teal-600 rounded focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800">
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    </div>
}


// function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
//     return <div className="mt-2">
//         <div className="w-full mb-4 ">
//             <div className="flex items-center justify-between border">
//                 <div className="my-2 bg-white rounded-b-lg w-full">
//                     <label className="sr-only">Publish post</label>
//                     <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
//                 </div>
//             </div>
//         </div>
//     </div>
// }