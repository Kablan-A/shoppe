import Image from "next/image";
import Link from "next/link";

function ProductCardSecondary({
  img,
  title,
  baseLink,
  currPrice,
  prevPrice,
  id,
}) {
  return (
    <div className="card rounded-3 overflow-hidden">
      <Image src={img} alt={title} priority className="w-100 h-auto" />
      <div className="card-img-overlay align-self-end text-white pb-5">
        <h5 className="card-title text-capitalize">{title}</h5>
        <div className="d-flex align-items-center gap-2 card-text">
          {prevPrice && (
            <p className="text-danger text-decoration-line-through">
              $ {prevPrice}
            </p>
          )}
          <p>$ {currPrice}</p>
        </div>
        <Link
          href={baseLink + id}
          className="btn text-white border-1 border-white text-capitalize"
        >
          view product
        </Link>
      </div>
    </div>
  );
}

export default ProductCardSecondary;
