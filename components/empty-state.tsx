type EmptyStateProps = {
  compact?: boolean;
};

export function EmptyState({ compact = false }: EmptyStateProps) {
  return (
    <div className={`empty-state${compact ? " compact" : ""}`}>
      <div>
        <p className="eyebrow">Nothing here yet</p>
        <h3>Your fridge is empty</h3>
      </div>
      <p className="helper-text">
        Add your first product to start tracking what should be eaten soon and
        to unlock quick cooking suggestions.
      </p>
      <div>
        <button type="button" className="ghost-button">
          Add Product
        </button>
      </div>
    </div>
  );
}
