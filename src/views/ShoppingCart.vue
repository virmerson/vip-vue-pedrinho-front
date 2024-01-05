<template>
	<h1>Carrinho de Compras</h1>
	<v-card max-width="400" class="mx-auto">
		<v-container>
			<v-row dense>
				<v-col
					cols="12"
					v-for="(product, index) in cartStore.cart"
					:key="product.id"
				>
					<v-card color="#1F7087" theme="dark">
						<div class="d-flex flex-no-wrap justify-space-between">
							<div>
								<v-card-title class="text-h5">
									{{ product.desc }}
								</v-card-title>

								<v-card-subtitle>{{
									product.price
								}}</v-card-subtitle>

								<v-card-actions>
									<v-icon
										class="ms-2"
										variant="outlined"
										size="small"
										@click="deleteProduct(index)"
									>
										mdi-delete
									</v-icon>
								</v-card-actions>
							</div>

							<v-avatar class="ma-3" size="125" rounded="0">
								<v-img :src="product.img" width="150"></v-img>
							</v-avatar>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-btn
			class="ms-2"
			variant="outlined"
			size="small"
			@click="finishOrder"
		>
			Finish Order
		</v-btn>
		<v-card-actions> Total: R$ {{ totalCart }} </v-card-actions>
	</v-card>
</template>
<script>
import { toRefs, computed, ref } from "vue";
import { useCartStore } from "@/store/cart";
import { useOrdersStore } from "@/store/orders";
import { useAuthStore } from "@/store/auth";
import router from "@/router/index";

export default {
	setup() {
		const cartStore = useCartStore();
		const orderStore = useOrdersStore();
		const userStore = useAuthStore();

		const deleteProduct = (index) => {
			cartStore.removeFromCart(index);
		};
		const totalCart = computed(() => {
			const priceSum = cartStore.calcTotal();
			return priceSum;
		});

		const clearCart = () => {
			cartStore.clearCart();
		};

		const finishOrder = () => {
			const order = {
				products: [...cartStore.cart],
				total: totalCart.value,
				createAt: new Date().toLocaleString(),
			};

			
			 if (userStore.isLogged()) {
				orderStore.addOrder(order, userStore.user.token);
				clearCart();
			} else {
				router.push("/login");
			}
		};
		return {
			cartStore,
			deleteProduct,
			totalCart,
			finishOrder,
		};
	},
};
</script>