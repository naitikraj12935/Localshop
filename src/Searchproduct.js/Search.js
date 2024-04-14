import axios from "axios";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ShimmerEffect from "./ShimmerEffect";
import { UrlLink } from "../Config";
import ProductCard from "../Product/ProductCard";
import { Link } from "react-router-dom";
import LaunchCard from "../NewLunchandSale/LaunchCard";
export default function Search() {
    const { keyword } = useParams();
    const [searchData, setSearchData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);

    const fetchData = async () => {
        try {
            const response = await axios.post(`${UrlLink}/searchItem`, { keyword });
            if (response && response.data && response.data.data && response.data.data.products) {
                setSearchData(response.data.data.products);
                setShowData(response.data.data.products);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // Implement error handling here
        }
    };

    useEffect(() => {
        fetchData();
    }, [keyword]);

    const handleSearch = () => {
        const filteredData = searchData.filter((item) => item.Price >= min && item.Price <= max);
        setShowData(filteredData);
    };

    return (
        <>
             <h2 className="text-2xl font-bold mb-4 flex justify-center mt-3">Filter by Price</h2>
    <div className="flex items-center justify-center space-x-4">
        <input
            type="number"
            value={min}
            min={0}
            placeholder="Min price"
            onChange={(e) => setMin(e.target.value)}
       
            className="border p-2 rounded-md w-20 text-center"
        />
        <span className="text-xl">to</span>
        <input
            type="number"
            value={max}
            min={0}
            placeholder="Max price"
            onChange={(e) => setMax(e.target.value)}
            className="border p-2 rounded-md w-20 text-center"
        />
        <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
            Find
        </button>
    </div>
            <br />
            {searchData.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {showData.map((item, index) => (
      <Link key={index} to={`/product/${item._id}`}>
        <div className="group relative grid place-content-center bg-white p-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <LaunchCard obj={item} />
          <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-bl-lg">
            {item.offer && <span>{item.offer}% OFF</span>}
          </div>
        </div>
      </Link>
    ))}
  </div>
            )}
        </>
    );
}