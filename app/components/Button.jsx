import Link from "next/link";

function Button({ variant, text, link, onClick, style }) {
  return link ? (
    <Link
      href={link}
      className={`btn btn-${variant} text-uppercase bg-transparent text-${variant} ${style}`}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      className={`btn btn-${variant} text-uppercase bg-transparent text-${variant} ${style}`}
    >
      {text}
    </button>
  );
}

export default Button;
