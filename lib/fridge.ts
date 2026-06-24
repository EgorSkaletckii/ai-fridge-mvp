export type ProductStatus = "fresh" | "expiring-soon" | "expired";

export type Product = {
  id: string;
  name: string;
  category: string;
  quantity: string;
  expirationDate: string;
  status: ProductStatus;
  daysUntilExpiry: number;
  daysUntilExpiryText: string;
};

type CookSuggestion = {
  title: string;
  description: string;
  ingredients: string[];
};

export const mockProducts: Product[] = [
  {
    id: "yogurt",
    name: "Греческий йогурт",
    category: "Молочные продукты",
    quantity: "2 стакана",
    expirationDate: "2026-06-22",
    status: "expired",
    daysUntilExpiry: -2,
    daysUntilExpiryText: "Просрочен 2 дня назад"
  },
  {
    id: "spinach",
    name: "Молодой шпинат",
    category: "Овощи",
    quantity: "1 пакет",
    expirationDate: "2026-06-25",
    status: "expiring-soon",
    daysUntilExpiry: 1,
    daysUntilExpiryText: "Испортится завтра"
  },
  {
    id: "chicken",
    name: "Куриная грудка",
    category: "Белковые продукты",
    quantity: "450 г",
    expirationDate: "2026-06-27",
    status: "expiring-soon",
    daysUntilExpiry: 3,
    daysUntilExpiryText: "Испортится через 3 дня"
  },
  {
    id: "eggs",
    name: "Яйца",
    category: "Молочные продукты",
    quantity: "Осталось 8 штук",
    expirationDate: "2026-07-02",
    status: "fresh",
    daysUntilExpiry: 8,
    daysUntilExpiryText: "Свежие ещё 8 дней"
  },
  {
    id: "tomatoes",
    name: "Томаты черри",
    category: "Овощи",
    quantity: "1 упаковка",
    expirationDate: "2026-07-04",
    status: "fresh",
    daysUntilExpiry: 10,
    daysUntilExpiryText: "Свежие ещё 10 дней"
  }
];

const statusPriority: Record<ProductStatus, number> = {
  expired: 0,
  "expiring-soon": 1,
  fresh: 2
};

export function sortProductsByUrgency(products: Product[]) {
  return [...products].sort((left, right) => {
    const priorityDifference =
      statusPriority[left.status] - statusPriority[right.status];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return left.daysUntilExpiry - right.daysUntilExpiry;
  });
}

export function getStatusLabel(status: ProductStatus) {
  switch (status) {
    case "expired":
      return "Просрочен";
    case "expiring-soon":
      return "Скоро испортится";
    case "fresh":
      return "Свежий";
  }
}

export function getCookSuggestion(products: Product[]): CookSuggestion {
  const ingredients = products.slice(0, 3).map((product) => product.name);

  return {
    title: "Приготовьте быструю сковороду с овощами и курицей",
    description:
      "Сначала используйте самые срочные продукты и соберите из них быстрый обед или ужин.",
    ingredients
  };
}
