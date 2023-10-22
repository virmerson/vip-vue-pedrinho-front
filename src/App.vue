<template>
	<div><ProductList @addCart="addCart"></ProductList></div>

	<div>
		<ShoppingCart :cart="cart" @finishOrder="addOrder"></ShoppingCart>
	</div>
	<div><OrderList :orders="orders"></OrderList></div>
</template>
<script >
import { ref } from "vue";

import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import OrderList from "@/components/OrderList.vue";
export default {
	setup() {
		const cart = ref([]);
		const orders = ref([]);
		const addCart = (prod) => {
			alert(
				JSON.stringify(
					prod.desc + " " + "foi adicionada ao carrinho com sucesso"
				)
			);
			cart.value.push(prod);
		};
		const addOrder = (order) => {
			orders.value.push(order);
		};

		return { addCart, addOrder, cart, orders };
	},
	components: {
		ProductList,
		ShoppingCart,
		OrderList,
	},
};
</script>


