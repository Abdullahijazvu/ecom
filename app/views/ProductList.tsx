import ProductCard from "@/app/components/ProductCard";
import { Products } from "@/app/utils/mock";
import { StaticImageData } from "next/image";

const ProductList = () => {
  const productChecks = Products.slice(0, 3);
  return (
    <section>

      <p className='flex justify-center text-3xl font-bold mt-10 mb-10'>Latest Products</p>
    <div className="flex justify-evenly">
      {productChecks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
          />
          ))}
    </div>
          </section>
  );
};

export default ProductList;