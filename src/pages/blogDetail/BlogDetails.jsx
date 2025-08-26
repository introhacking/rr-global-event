import { useParams } from 'react-router-dom';
import blogData from '../../data/blogData.json';
import { useEffect } from 'react';

const BlogDetails = () => {
    const { route } = useParams();
    const blog = blogData.find((item) => item.route === route);

    if (!blog) return <div className="text-center p-10">Blog not found</div>;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className="w-[95%] max-w-full mx-auto p-6 bg-white shadow rounded">
            <img src={blog.image} alt={blog.title} className="w-full h-96 object-fill rounded" />
            <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</div>
        </div>
    );
};

export default BlogDetails;
