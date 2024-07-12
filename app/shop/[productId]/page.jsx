import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import products from "../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/components/Button";
import Dropdown from "@/app/components/Dropdown";
import Review from "@/app/components/Review";
import Slider from "@/app/components/Slider";
import ProductCardPrimary from "@/app/components/ProductCardPrimary";
import Link from "next/link";

export default function Product({ params }) {
  const product = products.find((product) => product.id === params.productId);

  return (
    <section className="container">
      <div className="card bg-transparent border-0 rounded-3 overflow-hidden mb-3">
        <Carousel id={`carousel${product.id}`} hasBasicIndicators>
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="img-square"
          />
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="img-square"
          />
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="img-square"
          />
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="img-square"
          />
        </Carousel>

        <div className="card-body text-primary px-0 pb-0">
          <h5 className="card-title text-capitalize">{product.title}</h5>
          <div className="d-flex align-items-center gap-2 card-text text-secondary mb-4">
            {product.prevPrice && (
              <p className="text-danger text-decoration-line-through m-0">
                $ {product.prevPrice}
              </p>
            )}
            <p className="m-0">$ {product.currPrice}</p>

            <FontAwesomeIcon
              icon={faShareNodes}
              className="ms-auto text-primary fs-4"
            />
          </div>
          <Button
            variant={"primary"}
            text={"add to cart"}
            style={"w-100 mb-3"}
          />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column gap-2">
        <Dropdown title={"Description"}>
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </Dropdown>

        <Dropdown title={"Additional information"}>
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </Dropdown>

        <Dropdown title={"Reviews"} isReview>
          <Review
            username={"kobe"}
            date={"07.07.2024"}
            rating={3}
            text={"foo1"}
          />
          <Review
            username={"kobe1"}
            date={"08.07.2024"}
            rating={4}
            text={"foo2"}
          />
          <Review
            username={"kobe2"}
            date={"09.07.2024"}
            rating={2}
            text={"foo3"}
          />
          <Review
            username={"kobe3"}
            date={"10.07.2024"}
            rating={5}
            text={"foo4"}
          />
        </Dropdown>
      </div>

      <hr />

      <h3 className="fs-5 fw-normal mb-3 text-capitalize">Similar items</h3>

      <div className="mb-4">
        <Slider>
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
        </Slider>
      </div>

      <Link
        href="/shop"
        className="d-flex align-items-center justify-content-between"
      >
        <span className="text-secondary">Continue shopping</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </section>
  );
}
