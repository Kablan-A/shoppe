function ProductsGrid({ children }) {
  return (
    <div className="row g-3 g-md-4 g-xl-5">
      {children.map((child, index) => (
        <div key={`gridProduct${index}`} className="col-6 col-md-4">
          {child}
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
