import { EmptyState } from "@/components/empty-state";
import { ProductCard } from "@/components/product-card";
import {
  getCookSuggestion,
  getStatusLabel,
  mockProducts,
  sortProductsByUrgency
} from "@/lib/fridge";

const sortedProducts = sortProductsByUrgency(mockProducts);
const cookSuggestion = getCookSuggestion(sortedProducts);

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">AI Fridge MVP</p>
          <h1>My Fridge</h1>
          <p className="hero-text">
            Keep an eye on what should be eaten first and get a quick cooking
            idea from the products already at home.
          </p>
        </div>

        <div className="hero-actions">
          <button type="button" className="primary-button">
            Add Product
          </button>
          <button type="button" className="secondary-button">
            What to cook?
          </button>
        </div>

        <dl className="hero-stats" aria-label="Fridge summary">
          <div>
            <dt>Products</dt>
            <dd>{sortedProducts.length}</dd>
          </div>
          <div>
            <dt>Expired</dt>
            <dd>{sortedProducts.filter((product) => product.status === "expired").length}</dd>
          </div>
          <div>
            <dt>Eat Soon</dt>
            <dd>
              {
                sortedProducts.filter((product) => product.status === "expiring-soon")
                  .length
              }
            </dd>
          </div>
        </dl>
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Urgency Sorted</p>
              <h2>Products to check first</h2>
            </div>
            <span className="helper-text">
              Expired items first, then products expiring within 3 days.
            </span>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="product-list">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  statusLabel={getStatusLabel(product.status)}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>

        <aside className="side-column">
          <section className="panel suggestion-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Quick Idea</p>
                <h2>What to cook?</h2>
              </div>
            </div>
            <p className="suggestion-title">{cookSuggestion.title}</p>
            <p className="helper-text">{cookSuggestion.description}</p>
            <ul className="ingredient-list">
              {cookSuggestion.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Empty State</p>
                <h2>Ready for no products</h2>
              </div>
            </div>
            <EmptyState compact />
          </section>
        </aside>
      </section>
    </main>
  );
}
