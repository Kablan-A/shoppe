import Carousel from "./components/Carousel";
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
          link={"#"}
          btnText={"view product"}
        />
        <CardProductSecondary
          img={mainImg}
          title={"Gold big hoops"}
          price={"68.00"}
          link={"#"}
          btnText={"view product"}
        />
        <CardProductSecondary
          img={mainImg}
          title={"Gold big hoops"}
          price={"68.00"}
          link={"#"}
          btnText={"view product"}
        />
      </Carousel>

      <section className="mt-4 mb-5">
        <div className="d-flex gap-3 justify-content-between mb-2">
          <h1 className="text-capitalize fs-4">Shop the latest</h1>
          <a href="#" className="text-secondary fs-4">
            View all
          </a>
        </div>
        <div className="row g-3">
          <div className="col-6">
            <CardProductPrimary
              img={secondary}
              title={"Earrings"}
              price={"20.00"}
              link={"#"}
            />
          </div>
          <div className="col-6">
            <CardProductPrimary
              img={secondary}
              title={"Earrings"}
              price={"20.00"}
              link={"#"}
            />
          </div>
          <div className="col-6">
            <CardProductPrimary
              img={secondary}
              title={"Earrings"}
              price={"20.00"}
              link={"#"}
            />
          </div>
          <div className="col-6">
            <CardProductPrimary
              img={secondary}
              title={"Earrings"}
              price={"20.00"}
              link={"#"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
