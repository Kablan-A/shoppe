import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import productImg from "@/app/imgHome/product.png";

export default function Product() {
  return (
    <section className="container">
      <div className="card bg-transparent border-0 rounded-3 overflow-hidden">
        <Carousel id={"carouselProductPage"} hasBasicIndicators={true}>
          <Image
            src={productImg}
            alt="product"
            priority
            className="w-100 h-auto"
          />
          <Image
            src={productImg}
            alt="product"
            priority
            className="w-100 h-auto"
          />
          <Image
            src={productImg}
            alt="product"
            priority
            className="w-100 h-auto"
          />
          <Image
            src={productImg}
            alt="product"
            priority
            className="w-100 h-auto"
          />
        </Carousel>

        <div className="card-body text-primary px-0 pb-0">
          <h5 className="card-title text-capitalize">Earring</h5>
          <div className="d-flex align-items-center gap-2 card-text text-secondary">
            <p>$ 30</p>
          </div>
        </div>
      </div>
    </section>
  );
}
