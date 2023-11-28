import { defineStore } from "pinia"
import axios from "axios"
export const useProductStore = defineStore('product', {
    state: () => ({
        products: []
    }),
    actions: {
        async fetchProducts() {
            try {
                const response = await axios.get("http://localhost:3001/products")
                this.products = response.data
            } catch (error) {
                console.log(error)
            }
        }
    }
})