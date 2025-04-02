
const StatusFilter = ({ selectedFilters, setSelectedFilters }) => (
  <div className="mb-6">
    <h4 className="font-semibold mb-3">Status</h4>
    <div className="space-y-2">
      {["In Stock", "Organic"].map((status) => (
        <div key={status} className="flex items-center">
          <input 
            type="checkbox" 
            id={status.toLowerCase()} 
            checked={selectedFilters[status.toLowerCase()]} 
            onChange={() => setSelectedFilters({ 
              ...selectedFilters, 
              [status.toLowerCase()]: !selectedFilters[status.toLowerCase()] 
            })} 
            className="mr-2"
          />
          <label htmlFor={status.toLowerCase()} className="text-sm link-hover">{status}</label>
        </div>
      ))}
    </div>
  </div>
);

export default StatusFilter;