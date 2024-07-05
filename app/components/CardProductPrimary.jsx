import Image from "next/image";
import Link from "next/link";

function CardProductPrimary({
  img,
  title,
  baseLink,
  currPrice,
  prevPrice,
  id,
}) {
  return (
    <div className="card bg-transparent border-0 rounded-3 overflow-hidden">
      <Link href={baseLink + id} className="rounded-3 overflow-hidden">
        <Image src={img} alt={title} priority className="w-100 h-auto" />
      </Link>
      <div className="card-body text-primary px-0 pb-0">
        <h5 className="card-title text-capitalize">{title}</h5>
        <div className="d-flex align-items-center gap-2 card-text text-secondary">
          {prevPrice && (
            <p className="text-danger text-decoration-line-through">
              $ {prevPrice}
            </p>
          )}
          <p>$ {currPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProductPrimary;
