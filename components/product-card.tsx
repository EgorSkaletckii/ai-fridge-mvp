import type { Product } from "@/lib/fridge";

type ProductCardProps = {
  product: Product;
  statusLabel: string;
};

export function ProductCard({ product, statusLabel }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="panel-heading">
        <div>
          <h3>{product.name}</h3>
          <div className="card-meta">
            <span className="pill">{product.category}</span>
            <span>{product.quantity}</span>
          </div>
        </div>
        <span className={`status-badge status-${product.status}`}>{statusLabel}</span>
      </div>

      <div className="card-footer">
        <span>Expires {product.expirationDate}</span>
        <span>{product.daysUntilExpiryText}</span>
      </div>
    </article>
  );
}
