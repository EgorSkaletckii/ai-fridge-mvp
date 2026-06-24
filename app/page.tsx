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
          <p className="eyebrow">Прототип приложения</p>
          <h1>Мой холодильник</h1>
          <p className="hero-text">
            Следите за тем, что нужно съесть в первую очередь, и получайте
            простую идею блюда из продуктов, которые уже есть дома.
          </p>
        </div>

        <div className="hero-actions">
          <button type="button" className="primary-button">
            Добавить продукт
          </button>
          <button type="button" className="secondary-button">
            Что приготовить?
          </button>
        </div>

        <dl className="hero-stats" aria-label="Сводка по холодильнику">
          <div>
            <dt>Продукты</dt>
            <dd>{sortedProducts.length}</dd>
          </div>
          <div>
            <dt>Просрочено</dt>
            <dd>{sortedProducts.filter((product) => product.status === "expired").length}</dd>
          </div>
          <div>
            <dt>Съесть в первую очередь</dt>
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
              <p className="eyebrow">Сортировка по срочности</p>
              <h2>Что проверить в первую очередь</h2>
            </div>
            <span className="helper-text">
              Сначала просроченные продукты, затем те, что испортятся в течение
              3 дней.
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
                <p className="eyebrow">Быстрая идея</p>
                <h2>Что приготовить?</h2>
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
                <p className="eyebrow">Пустое состояние</p>
                <h2>Экран для пустого холодильника</h2>
              </div>
            </div>
            <EmptyState compact />
          </section>
        </aside>
      </section>
    </main>
  );
}
