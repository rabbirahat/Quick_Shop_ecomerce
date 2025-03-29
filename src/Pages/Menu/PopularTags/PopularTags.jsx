const PopularTags = () => {
    return (
      <div className="bg-white rounded-lg border border-success p-5">
        <h3 className="font-bold text-lg mb-4 text-success">Popular Items</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <button className=" btn btn-sm btn-outline btn-success btn-hover hover:border-0">Cabbage</button>
          <button className=" btn btn-sm btn-outline btn-success btn-hover hover:border-0">Broccoli</button>
          <button className=" btn btn-sm btn-outline btn-success btn-hover hover:border-0">Smoothie</button>
          <button className=" btn btn-sm btn-outline btn-success btn-hover hover:border-0">Fruit</button>
          <button className=" btn btn-sm btn-outline btn-success btn-hover hover:border-0">Egg</button>
          <button className=" btn btn-sm btn-outline btn-success btn-hover hover:border-0">Salad</button>
          <button className=" btn btn-sm btn-outline btn-success btn-hover hover:border-0">Appetizer</button>
        </div>
      </div>
    );
  };
  
export default PopularTags;