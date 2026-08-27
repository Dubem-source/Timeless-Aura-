"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  productId: string;
  slug: string;
  image: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  gradient: string;
};

type CartContextType = {
  lines: CartLine[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeLine: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "timeless-aura-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: one-time hydration from localStorage on mount
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // storage unavailable — cart still works in-memory for the session
    }
  }, [lines, hydrated]);

  function addToCart(product: Product, size: string, color: string, quantity = 1) {
    setLines((prev) => {
      const existing = prev.find(
        (l) => l.productId === product.id && l.size === size && l.color === color
      );
      if (existing) {
        return prev.map((l) =>
          l === existing ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          image: product.image,
          name: product.name,
          price: product.price,
          size,
          color,
          quantity,
          gradient: product.gradient,
        },
      ];
    });
    setDrawerOpen(true);
  }

  function removeLine(productId: string, size: string, color: string) {
    setLines((prev) =>
      prev.filter((l) => !(l.productId === productId && l.size === size && l.color === color))
    );
  }

  function updateQuantity(productId: string, size: string, color: string, quantity: number) {
    setLines((prev) =>
      prev.map((l) =>
        l.productId === productId && l.size === size && l.color === color
          ? { ...l, quantity: Math.max(1, quantity) }
          : l
      )
    );
  }

  function clearCart() {
    setLines([]);
  }

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    [lines]
  );
  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  return (
    <CartContext.Provider
      value={{
        lines,
        addToCart,
        removeLine,
        updateQuantity,
        clearCart,
        subtotal,
        itemCount,
        isDrawerOpen,
        openDrawer: () => setDrawerOpen(true),
        closeDrawer: () => setDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
