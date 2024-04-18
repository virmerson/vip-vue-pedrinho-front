import { defineStore } from "pinia"
import axios from "axios"
export const useOrdersStore = defineStore('orders', {
    state: () => ({ orders: [] }),
    actions: {
        async addOrder(order, token) {
            const response = await axios.post("http://localhost:3001/orders", { order }, { headers: { "Authorization": "Bearer " + token } })
        },
        clearOrder() {
            this.orders = [];
        },
        async fetchOrders(token) {
            try {
                const response = await axios.get("http://localhost:3001/orders", { headers: { "Authorization": "Bearer " + token } })
                this.orders = response.data
            } catch (error) {
                console.log(error)
            }
        }
    }
})