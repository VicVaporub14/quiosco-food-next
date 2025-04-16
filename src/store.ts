import { create } from "zustand"; // Zustand como manejador de estado global
import { OrderItem } from "./types";
import { Product } from "@prisma/client";
import { Quantico } from "next/font/google";

interface Store {
    order: OrderItem[],
    addToOrder: (product: Product) => void,
    increaseQuantity: (id: Product['id']) => void,
    decreaseQuantity: (id: Product['id']) => void,
    removeItem: (id: Product['id']) => void,
    clearOrder: () => void
};


export const useStore = create<Store>((set, get) => ({
    order: [],
    addToOrder: (product) => {
        const {categoryId, image, ...data} = product;

        let items : OrderItem[] = []
        // verificar si existe ya un producto en el order
        if (get().order.find( item => item.id === product.id)) {  // Si existe, actualiza cantidad
            items = get().order.map( item => item.id === product.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
                // subtotal: item.subtotal + product.price
            } : item)
        } else { // Si no existe, agrega uno nuevo
            items= [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }
        set(() => ({
            order: items
        }))
    },
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map( item => item.id === id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price
            } : item)
        }))
    },
    decreaseQuantity: (id) => {
        const order = get().order.map( item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: (item.quantity - 1) * item.price
        } : item)

        set( () => ({
            order
        }))
    },
    removeItem: (id) => {
        set( (state) => ({
            order: state.order.filter( item => item.id !== id)
        }))
    },
    clearOrder: () => {
        set(() => ({
            order: []
        }))
    }
}))