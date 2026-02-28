import { create } from "zustand";
import { products as productData } from "../data/products.js";

export const useShopStore = create((set, get) => ({
  products: productData,
  filter: "all",
  sort: "featured",
  cart: {},
  modalProductId: null,
  isCartOpen: false,
  setFilter: (filter) => set({ filter }),
  setSort: (sort) => set({ sort }),
  openModal: (productId) => set({ modalProductId: productId }),
  closeModal: () => set({ modalProductId: null }),
  toggleCart: (force) =>
    set((state) => ({
      isCartOpen: typeof force === "boolean" ? force : !state.isCartOpen,
    })),
  addToCart: (productId) =>
    set((state) => {
      const quantity = state.cart[productId] ?? 0;
      return {
        cart: { ...state.cart, [productId]: quantity + 1 },
        isCartOpen: true,
      };
    }),
  updateCartQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        const { [productId]: _removed, ...rest } = state.cart;
        return { cart: rest };
      }
      return { cart: { ...state.cart, [productId]: quantity } };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const { [productId]: _removed, ...rest } = state.cart;
      return { cart: rest };
    }),
  clearCart: () => set({ cart: {} }),
  getCartItems: () => {
    const { cart, products } = get();
    return Object.entries(cart).map(([productId, quantity]) => {
      const product = products.find((item) => item.id === productId);
      return { product, quantity };
    });
  },
}));
