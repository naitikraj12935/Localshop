const ProductCard = ({ obj }) => {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-between p-4 h-80 w-60 lg:h-96 lg:w-72">
        <img
          className="h-40 w-full object-cover"
          src={obj.productImage1}
          alt="Product"
        />
        <div className="flex flex-col justify-between mt-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{obj.productName}</h2>
            <p className="text-gray-700 mb-2">{obj.productCategory}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-green-500 text-xl font-bold">${obj.Price}</p>
            {/* You can add a button or any other elements here */}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
