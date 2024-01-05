import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router/index"
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user'))
    }),
    actions: {

        autenticate: async function (username, password) {
            const response = await axios.post(
                "http://localhost:3001/users/login", { username, password }
            );
            this.user = response.data
            localStorage.setItem('user', JSON.stringify(response.data));

            router.push("/cart")
        },

        isLogged: function () {
            return this.user?true:false  
        }
    }
})
