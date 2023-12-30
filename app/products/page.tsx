// import AddToCart from "@/components/AddToCart";
import Quantity from "@/app/components/Quantity";
import { Products } from "@/app/utils/mock";
import { StaticImageData } from "next/image";
import Image from "next/image";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className="flex flex-wrap py-10 mt-16">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* Left Image */}
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Content */}
          <div>
            <div>
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-base font-semibold text-gray-400">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
              {/* Sizes */}
              <div className="flex gap-x-3">
                {sizes.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="w-6 h-6 mt-2 duration-300 border rounded-full center hover:shadow-xl"
                    >
                      <span className="text-[10px] font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Quantity */}
              <div className="flex items-center mt-6 gap-x-3">
                <h3 className="text-[10px] font-semibold">Quantity:</h3>
                <Quantity />
              </div>
              {/* Add to Cart */}
              <div className="flex items-center mt-5 gap-x-4">
                {/* <AddToCart /> */}
                <h2 className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// import { Products } from "@/app/utils/mock";
// import ProductCard from "@/app/components/ProductCard";
// import { StaticImageData } from "next/image";

// const AllProducts = () => {
//   return (
//     <div className="flex justify-evenly mt-16 py-10 flex-wrap">
//       {Products.map((product) => (
//         <ProductCard
//           key={product.id}
//           title={product.name}
//           price={product.price}
//           img={product.image as StaticImageData}
//           category={product.category}
//           id={product.id}
//         />
//       ))}
//     </div>
//   );
// };
// export default AllProducts;
