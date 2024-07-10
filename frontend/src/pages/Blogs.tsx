import { BlogCard } from "../components/BlogCardCompo"
import { Appbar } from "../components/AppBarCompo"
import { useNavigate, useSearchParams } from "react-router-dom";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/index";
import { useEffect } from "react";

export const Blogs = () => {
    const [searchParams] = useSearchParams();
    const {blogs, loading} = useBlogs();
    const name = searchParams.get("name");
    const nevigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token") == null) {
            nevigate('/signin');
        }
    }, [nevigate])

    return <div>
        <Appbar userName={name || "samarth"}/>
        <div className="h-full flex flex-col justify-center place-items-center pl-6 pt-8 space-y-4">
            {loading ? 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div> : 
            blogs.map((blog) => {
                return <div> 
                    <BlogCard 
                    authorName={blog.author.name} 
                    content={blog.content} 
                    title={blog.title} 
                    id={blog.id} 
                    publishedDate={blog.createdAt} 
                    key={blog.id}/>
                </div>
            })}
        </div>
    </div>
}
