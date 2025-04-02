import { Link } from "react-router-dom";
import {  FaComment, FaHeart, FaShareAlt } from "react-icons/fa";

const BlogArticle = ({ title, excerpt, image, author, date, likes, comments }) => {
    return (
      <div className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-8">
        <div className="md:w-1/4 flex-shrink-0">
          <Link to="/blog/article">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
          </Link>
        </div>
        <div className="md:w-3/4">
          <Link to="/blog/article">
            <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-500">{title}</h3>
          </Link>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">{author.charAt(0)}</div>
              <div>
                <span className="text-sm font-medium text-gray-800">{author}</span>
                <span className="text-xs text-gray-500 block">{date}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-green-500">
                <FaComment className="h-4 w-4" />
                <span className="text-xs">{comments}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-500">
                <FaHeart className="h-4 w-4" />
                <span className="text-xs">{likes}</span>
              </button>
              <button className="flex items-center hover:text-green-500">
                <FaShareAlt className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default BlogArticle;