import Carousel from "./components/Carousel";
import ProductsGrid from "./components/ProductsGrid";
import mainImg from "./imgHome/main.png";
import products from "./shop/data/products";
import ProductCardPrimary from "./components/ProductCardPrimary";
import ProductCardSecondary from "./components/ProductCardSecondary";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <Carousel id={"carouselHome"} hasCircleIndicators={true}>
        <ProductCardSecondary
          img={mainImg}
          title={"Gold big hoops"}
          currPrice={"68.00"}
          baseLink={"/shop/"}
          id={"goldBigHoops"}
        />
        <ProductCardSecondary
          img={mainImg}
          title={"Gold big hoops"}
          currPrice={"68.00"}
          baseLink={"/shop/"}
          id={"goldBigHoops"}
        />
        <ProductCardSecondary
          img={mainImg}
          title={"Gold big hoops"}
          currPrice={"68.00"}
          baseLink={"/shop/"}
          id={"goldBigHoops"}
        />
      </Carousel>

      <section className="mt-4 mb-5">
        <div className="d-flex gap-3 justify-content-between mb-3">
          <h1 className="text-capitalize fs-5 m-0">Shop the latest</h1>
          <Link href="/shop" className="text-secondary fs-6">
            View all
          </Link>
        </div>
        {/* Only 4 newest products */}
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCardPrimary
              key={`product${index}`}
              img={product.img}
              title={product.title}
              prevPrice={product.prevPrice}
              currPrice={product.currPrice}
              baseLink={product.baseLink}
              id={product.id}
            />
          ))}
        </ProductsGrid>
      </section>
    </main>
  );
}
