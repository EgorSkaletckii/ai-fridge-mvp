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
    name: "Greek Yogurt",
    category: "Dairy",
    quantity: "2 cups",
    expirationDate: "2026-06-22",
    status: "expired",
    daysUntilExpiry: -2,
    daysUntilExpiryText: "Expired 2 days ago"
  },
  {
    id: "spinach",
    name: "Baby Spinach",
    category: "Vegetables",
    quantity: "1 bag",
    expirationDate: "2026-06-25",
    status: "expiring-soon",
    daysUntilExpiry: 1,
    daysUntilExpiryText: "Expires tomorrow"
  },
  {
    id: "chicken",
    name: "Chicken Breast",
    category: "Protein",
    quantity: "450 g",
    expirationDate: "2026-06-27",
    status: "expiring-soon",
    daysUntilExpiry: 3,
    daysUntilExpiryText: "Expires in 3 days"
  },
  {
    id: "eggs",
    name: "Eggs",
    category: "Dairy",
    quantity: "8 left",
    expirationDate: "2026-07-02",
    status: "fresh",
    daysUntilExpiry: 8,
    daysUntilExpiryText: "Safe for 8 more days"
  },
  {
    id: "tomatoes",
    name: "Cherry Tomatoes",
    category: "Vegetables",
    quantity: "1 box",
    expirationDate: "2026-07-04",
    status: "fresh",
    daysUntilExpiry: 10,
    daysUntilExpiryText: "Safe for 10 more days"
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
      return "Expired";
    case "expiring-soon":
      return "Expiring Soon";
    case "fresh":
      return "Fresh";
  }
}

export function getCookSuggestion(products: Product[]): CookSuggestion {
  const ingredients = products.slice(0, 3).map((product) => product.name);

  return {
    title: "Cook a quick skillet bowl",
    description:
      "Use the products with the most urgency first and turn them into a fast lunch or dinner.",
    ingredients
  };
}
