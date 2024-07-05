import Carousel from "./components/Carousel";
import GridProduct from "./components/GridProduct.";
import mainImg from "./imgHome/main.png";
import secondary from "./imgHome/secondary.png";
import products from "./shop/data/products";
import CardProductPrimary from "./components/CardProductPrimary";
import CardProductSecondary from "./components/CardProductSecondary";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <Carousel id={"carouselHome"} hasCircleIndicators={true}>
        <CardProductSecondary
          img={mainImg}
          title={"Gold big hoops"}
          price={"68.00"}
          link={"/"}
          btnText={"view product"}
        />
        <CardProductSecondary
          img={mainImg}
          title={"Gold big hoops"}
          price={"68.00"}
          link={"/"}
          btnText={"view product"}
        />
        <CardProductSecondary
          img={mainImg}
          title={"Gold big hoops"}
          price={"68.00"}
          link={"/"}
          btnText={"view product"}
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
        <GridProduct>
          {products.map((product, index) => (
            <CardProductPrimary
              key={`product${index}`}
              img={product.img}
              title={product.title}
              prevPrice={product.prevPrice}
              currPrice={product.currPrice}
              baseLink={product.baseLink}
              id={product.id}
            />
          ))}
        </GridProduct>
      </section>
    </main>
  );
}
