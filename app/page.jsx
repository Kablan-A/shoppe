import Carousel from "./components/Carousel";
import GridProduct from "./components/GridProduct.";
import mainImg from "./imgHome/main.png";
import secondary from "./imgHome/secondary.png";
import CardProductPrimary from "./components/CardProductPrimary";
import CardProductSecondary from "./components/CardProductSecondary";

export default function Home() {
  return (
    <main className="container">
      <Carousel id={"carouselHome"}>
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

      {/* Only 4 newest products */}
      <section className="mt-4 mb-5">
        <div className="d-flex gap-3 justify-content-between mb-3">
          <h1 className="text-capitalize fs-5 m-0">Shop the latest</h1>
          <a href="#" className="text-secondary fs-6">
            View all
          </a>
        </div>
        <GridProduct>
          <CardProductPrimary
            img={secondary}
            title={"Earrings"}
            link={"/shop/product"}
            currPrice={"20.00"}
          />
          <CardProductPrimary
            img={secondary}
            title={"Earrings"}
            link={"/shop/product"}
            currPrice={"20.00"}
          />
          <CardProductPrimary
            img={secondary}
            title={"Earrings"}
            link={"/shop/product"}
            currPrice={"20.00"}
          />
          <CardProductPrimary
            img={secondary}
            title={"Earrings"}
            link={"/shop/product"}
            prevPrice={"30.00"}
            currPrice={"20.00"}
          />
        </GridProduct>
      </section>
    </main>
  );
}
