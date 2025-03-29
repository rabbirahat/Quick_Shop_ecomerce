import { FaFilter } from "react-icons/fa";
import SaleBanner from "../SaleBanner/SaleBanner";
import PopularItems from "../PopularItems/PopularItems";
import PopularTags from "../PopularTags/PopularTags";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import StatusFilter from "../StatusFilter/StatusFilter";
import TagsFilter from "../TagsFilter/TagsFilter";




const FilterSidebar = ({ selectedFilters, setSelectedFilters, popularItems }) => (
  <div className="md:col-span-1 bg-white rounded-lg border border-success p-5 mb-6">
    <h3 className="font-bold text-lg mb-4 flex items-center text-success">
      <FaFilter className="mr-2" /> Filter Items
    </h3>
    <CategoryFilter />
    <StatusFilter
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
    />
    <TagsFilter />
    <button className="w-full btn btn-success btn-hover border-0 text-white mb-10">
      Apply Filter
    </button>
    <PopularItems items={popularItems} />
    <PopularTags />
    <SaleBanner />
  </div>
);

export default FilterSidebar;
