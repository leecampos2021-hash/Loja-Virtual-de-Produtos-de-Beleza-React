export function ProductList({ products }) {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img
            src={`./src/assets/images/${p.image}`}
            alt={p.name}
            className="product-image"
          />

          <div className="product-info">
            <span className="product-brand">{p.brand}</span>
            <h3 className="product-name">{p.name}</h3>

            <strong className="product-price">
              R$ {p.price}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}