import { defineStore } from "pinia"
export const useCartStore = defineStore('cart', {
    state: () => ({ cart: [] }),
    actions: {
        addToCart(product) {
            this.cart.push(product);
        },
        removeFromCart(product) {
            this.cart.splice(product)
        },
        clearCart() {
            this.cart = [];
        }, 

        calcTotal () {
            return this.cart.reduce(
            (total, product) => total + parseFloat(product.price),
            0)
        }

    }
})