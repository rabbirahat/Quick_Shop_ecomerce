import { Link } from "react-router-dom";
import { FaHome, FaComment, FaHeart, FaShareAlt } from "react-icons/fa";

import BlogArticle from "./blogArticle";
import header_blog from "../../assets/blogs/header-blog.png";
import blogCardImg from "../../assets/blogs/blogcardimg.png";


const Blogs = () => {
 

  const blogPosts = [
    {
      id: 1,
      title: "Grow a Home Herb Garden Today",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: blogCardImg,
      author: "Tyler Rose",
      date: "2 hours ago",
      likes: 5,
      comments: 3
    },
    {
      id: 2,
      title: "Grow a Home Herb Garden Today",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: blogCardImg,
      author: "Tyler Rose",
      date: "3 hours ago",
      likes: 7,
      comments: 2
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
     
      
      <div className="bg-green-50 py-8" style={{ backgroundImage: `url(${header_blog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog & News</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className=" flex items-center">
              <FaHome className="h-4 w-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Blog & News</span>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Kitchen Articles</h2>
            <button variant="ghost" className="text-gray-600 text-sm">Show All</button>
          </div>
          
          <div className="space-y-8">
            {blogPosts.map(post => (
              <BlogArticle key={post.id} {...post} />
            ))}
          </div>
          
         
        </div>
        
        {/* <BlogSubscribe /> */}
      </main>
      
      
    </div>
  );
};

export default Blogs;
