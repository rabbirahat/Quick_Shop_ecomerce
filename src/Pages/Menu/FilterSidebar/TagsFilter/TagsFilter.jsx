import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const TagsFilter = () => {
  const tags = [
    { id: "vegetable", label: "Vegetable", link: "#" },
    { id: "fruit", label: "Fruit", link: "#" },
    { id: "egg", label: "Egg", link: "#" },
  ];

  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-3 flex items-center">
        <FaTag className="mr-2 text-success" /> Tags
      </h4>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Link to={tag.link} key={tag.id} className="bg-gray-100 text-xs px-3 py-1 rounded btn-hover">
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsFilter;  