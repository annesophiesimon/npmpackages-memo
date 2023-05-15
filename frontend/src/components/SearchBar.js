
const SearchBar = () =>  {
    return (
        <div className="flex items-center">
            <div className="flex">
                <input
                    type="text"
                    className="w-80 px-4 py-1 mr-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-blue-800 bg-white border-l rounded ">
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;