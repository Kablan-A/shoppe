import Image from "next/image";
import Link from "next/link";

function CardProductPrimary({ img, title, link, currPrice, prevPrice }) {
  return (
    <div className="card bg-transparent border-0 rounded-3 overflow-hidden">
      <Link href={link} className="rounded-3 overflow-hidden">
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
