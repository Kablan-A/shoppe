import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import products from "../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function Product({ params }) {
  const product = products.find((product) => product.id === params.productId);

  return (
    <section className="container">
      <div className="card bg-transparent border-0 rounded-3 overflow-hidden mb-4">
        <Carousel id={`carousel${product.id}`} hasBasicIndicators={true}>
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="w-100 h-auto"
          />
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="w-100 h-auto"
          />
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="w-100 h-auto"
          />
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="w-100 h-auto"
          />
          <Image
            src={product.img}
            alt={product.title}
            priority
            className="w-100 h-auto"
          />
        </Carousel>

        <div className="card-body text-primary px-0 pb-0">
          <h5 className="card-title text-capitalize">{product.title}</h5>
          <div className="d-flex align-items-center gap-2 card-text text-secondary">
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
        </div>
      </div>

      <button className="btn btn-primary text-uppercase bg-transparent text-primary w-100 mb-3">
        add to cart
      </button>

      <hr />
      <div className="d-flex flex-column gap-2">
        <div className="">
          <button
            className="btn btn-primary bg-transparent text-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseDescription"
            aria-expanded="false"
            aria-controls="collapseDescription"
          >
            Description
          </button>
          <div className="collapse" id="collapseDescription">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>

        <div className="">
          <button
            className="btn btn-primary bg-transparent text-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseAdditionalInfo"
            aria-expanded="false"
            aria-controls="collapseAdditionalInfo"
          >
            Additional information
          </button>
          <div className="collapse" id="collapseAdditionalInfo">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>

        <div className="">
          <button
            className="btn btn-primary bg-transparent text-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseReviews"
            aria-expanded="false"
            aria-controls="collapseReviews"
          >
            Reviews
          </button>
          <div className="collapse" id="collapseReviews">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}
