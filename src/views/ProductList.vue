<template>
	<h1>Lista de produtos</h1>
	<product-details :details="details"></product-details>

	<v-card max-width="400" class="mx-auto">
		<v-container>
			<v-row dense>
				<v-col
					cols="12"
					v-for="product in productStore.products"
					:key="product.id"
				>
					<product
						@addCart="addCart"
						@showDetails="showDetails"
						:product="product"
					>
					</product>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>
<script>
import Product from "@/components/Product.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import { onMounted, ref } from "vue";
import { useProductStore } from "@/store/product";
import { useCartStore } from "@/store/cart";

export default {
	setup(props, { emit }) {
		const details = ref({});

		//acessa do productStore.product
		const productStore = useProductStore();
		const cartStore = useCartStore();

		const addCart = (prod) => {
			//adicionar no array do carStore
			cartStore.addToCart(prod);
		};
		const showDetails = (prod) => {
			//buscar do cartStore
			details.value = prod;
		};

		onMounted(() => {
			productStore.fetchProducts()
		})

		return { productStore, details, addCart, showDetails };
	},
	components: { Product, ProductDetails },
};
</script>
