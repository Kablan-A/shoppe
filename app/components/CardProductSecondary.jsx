import Image from "next/image";

function CardProductSecondary({ img, title, price, link, btnText }) {
  return (
    <div className="card rounded-3 overflow-hidden">
      <Image src={img} alt={title} priority className="w-100 h-auto" />
      <div className="card-img-overlay align-self-end text-white pb-5">
        <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text">$ {price}</p>
        <a
          href={link}
          className="btn text-white border-1 border-white text-capitalize"
        >
          {btnText}
        </a>
      </div>
    </div>
  );
}

export default CardProductSecondary;
