import GridProduct from "../components/GridProduct.";
import CardProductPrimary from "../components/CardProductPrimary";
import shopImg from "../imgHome/shopImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

export default function Shop() {
  return (
    <section className="container">
      <h2 className="mb-3">Shop</h2>
      <div className="d-flex align-items-center gap-2 text-secondary mb-3">
        <FontAwesomeIcon icon={faSliders} />
        <span>Filter</span>
      </div>
      <GridProduct>
        <CardProductPrimary
          img={shopImg}
          title={"Earrings"}
          link={"/shop/product"}
          currPrice={"20.00"}
        />
        <CardProductPrimary
          img={shopImg}
          title={"Earrings"}
          link={"/shop/product"}
          currPrice={"20.00"}
        />
        <CardProductPrimary
          img={shopImg}
          title={"Earrings"}
          link={"/shop/product"}
          currPrice={"20.00"}
        />
        <CardProductPrimary
          img={shopImg}
          title={"Earrings"}
          link={"/shop/product"}
          currPrice={"20.00"}
        />
        <CardProductPrimary
          img={shopImg}
          title={"Earrings"}
          link={"/shop/product"}
          prevPrice={"30.00"}
          currPrice={"20.00"}
        />
        <CardProductPrimary
          img={shopImg}
          title={"Earrings"}
          link={"/shop/product"}
          currPrice={"20.00"}
        />
      </GridProduct>
    </section>
  );
}
