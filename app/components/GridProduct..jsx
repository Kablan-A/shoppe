function GridProduct({ children }) {
  return (
    <div className="row g-3">
      {children.map((child, index) => (
        <div key={`gridProduct${index}`} className="col-6">
          {child}
        </div>
      ))}
    </div>
  );
}

export default GridProduct;
