import blogData from '../../data/blogData.json';
import BlogCard from '../../components/module/BlogCard';
import { useEffect } from 'react';

const BlogListPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="bg-white text-center p-4 md:p-12">
            <p className="text-orange-400 my-6">All Blogs</p>
            <div className="gap-6 flex flex-wrap justify-between my-4">
                {blogData.map((blog, index) => (
                    <BlogCard
                        key={index}
                        route={blog.route}
                        title={blog.title}
                        date={blog.date}
                        image={blog.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogListPage;
