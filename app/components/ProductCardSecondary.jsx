import Image from "next/image";
import Link from "next/link";

function ProductCardSecondary({ img, title, currPrice, prevPrice, id }) {
  return (
    <div className="card product-card--secondary rounded-3 overflow-hidden">
      <Image src={img} alt={title} priority className="img-square" />
      <div className="card-img-overlay product-card--secondary__body ms-3 mb-3 ms-sm-5 mb-sm-5">
        <h3 className="card-title product-card--secondary__title">{title}</h3>
        <div className="card-text product-card--secondary__prices gap-2">
          {prevPrice && (
            <p className="text-danger text-decoration-line-through mb-2">
              $ {prevPrice}
            </p>
          )}
          <p className="mb-2">$ {currPrice}</p>
        </div>
        <Link
          href={`/shop/${id}`}
          className="btn product-card--secondary__btn object-fit"
        >
          view product
        </Link>
      </div>
    </div>
  );
}

export default ProductCardSecondary;
