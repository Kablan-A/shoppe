import ProductsGrid from "../components/ProductsGrid";
import ProductCardPrimary from "../components/ProductCardPrimary";
import products from "./data/products";
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
      <ProductsGrid>
        {products.map((product, index) => (
          <ProductCardPrimary
            key={`productShop${index}`}
            img={product.img}
            title={product.title}
            prevPrice={product.prevPrice}
            currPrice={product.currPrice}
            id={product.id}
          />
        ))}
      </ProductsGrid>
    </section>
  );
}
