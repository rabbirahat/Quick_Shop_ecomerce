const CategoryFilter = () => (
    <div className="mb-6">
      <h4 className="font-semibold mb-3">Category</h4>
      <div className="space-y-2">
        {["All", "Vegetables", "Fruits", "Meat", "Seafood"].map((category) => (
          <div key={category} className="flex items-center">
            <input type="checkbox" id={category.toLowerCase()} className="mr-2 " />
            <label htmlFor={category.toLowerCase()} className="text-sm link-hover">{category}</label>
          </div>
        ))}
      </div>
    </div>
  );

  export default CategoryFilter;