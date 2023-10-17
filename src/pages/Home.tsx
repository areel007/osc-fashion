// import { Youtube } from "../components/Youtube"

import { useContext } from "react"
import { ProductCard } from "../components/ProductCard"
import { CloseMobileMenuContext, ProductsContext } from "../context/context"

export const Home = () => {
  const products = useContext(ProductsContext)
  const closeMobileMenu = useContext(CloseMobileMenuContext)

  return (
    <div onClick={closeMobileMenu}>
      <div className="h-[73.891px] block md:hidden"></div>
      <div className="w-full h-[300px] md:h-[80vh] xl:h-screen bg-black">
        {/* <Youtube /> */}
      </div>

      <div className="py-[40px] md:py-[60px] lg:py-[100px]">
        <div className="w-[90%] xl:w-[1100px] mx-auto mb-[40px]">
          <h1 className="text-[30px] md:text-[40px] font-[600] text-center capitalize leading-[1] mb-[20px]">Our recent fashion collection</h1>
          <p className="text-center text-[14px] md:text-[16px] text-gray-400">Browse through our website for the latest fashion items and collections in the shop now.</p>
        </div>

        <div className="w-[90%] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-[270px_270px_270px] xl:grid-cols-[270px_270px_270px_270px] gap-[10px] sm:gap-[20px] justify-center">
            {products?.map((product, index) => <ProductCard key={index} name={product.name} price={product.price} imgOne={product.imgOne} imgTwo={product.imgTwo} to={product.to} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
