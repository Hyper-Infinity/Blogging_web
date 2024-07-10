import { Appbar } from "../components/AppBarCompo"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Spinner } from "../components/spinner";
import { useBlog } from "../hooks/index";
import { useEffect } from "react";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const { blog, loading } = useBlog({ id: id || "" });
    const nevigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            nevigate('/signin');
        }
    }, [nevigate])

    return <div>
        <Appbar userName={name || "samarth"} />
        <div className="h-full flex flex-col justify-center place-items-center pl-6 pt-8 space-y-4">
            {loading || !blog ?
                <div className="h-screen flex justify-center mt-48">
                        <Spinner />
                </div> :
                <div>
                    <FullBlog blog={blog} />
                </div>
            }
        </div>
    </div>
}
