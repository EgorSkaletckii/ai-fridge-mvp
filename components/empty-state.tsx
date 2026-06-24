type EmptyStateProps = {
  compact?: boolean;
};

export function EmptyState({ compact = false }: EmptyStateProps) {
  return (
    <div className={`empty-state${compact ? " compact" : ""}`}>
      <div>
        <p className="eyebrow">Пока ничего нет</p>
        <h3>Ваш холодильник пуст</h3>
      </div>
      <p className="helper-text">
        Добавьте первый продукт, чтобы следить за тем, что скоро нужно съесть,
        и получать быстрые кулинарные подсказки.
      </p>
      <div>
        <button type="button" className="ghost-button">
          Добавить продукт
        </button>
      </div>
    </div>
  );
}
