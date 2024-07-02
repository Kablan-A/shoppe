import Image from "next/image";

function CardProductPrimary({ img, title, price, link }) {
  return (
    <div className="card bg-transparent border-0 rounded-3 overflow-hidden">
      <a href={link} className="rounded-3 overflow-hidden">
        <Image src={img} alt={title} priority className="w-100 h-auto" />
      </a>
      <div className="card-body text-primary ps-0">
        <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text text-secondary">$ {price}</p>
      </div>
    </div>
  );
}

export default CardProductPrimary;
