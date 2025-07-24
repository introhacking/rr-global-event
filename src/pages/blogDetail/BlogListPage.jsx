import blogData from '../../data/blogData.json';
import BlogCard from '../../components/module/BlogCard';

const BlogListPage = () => {
    return (
        <div className="bg-white text-center p-12">
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
