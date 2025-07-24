import { useParams } from 'react-router-dom';
import blogData from '../../data/blogData.json';

const BlogDetails = () => {
    const { route } = useParams();
    const blog = blogData.find((item) => item.route === route);

    if (!blog) return <div className="text-center p-10">Blog not found</div>;

    return (
        <div className="max-w-full mx-auto p-6 bg-white shadow rounded">
            <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded" />
            <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</div>
        </div>
    );
};

export default BlogDetails;
