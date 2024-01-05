<template>
	<h1>Lista de pedidos</h1>

	<v-card max-width="400" class="mx-auto">
		<v-container>
			<v-row dense>
				<v-col
					cols="12"
					v-for="(order, index) in orderStore.orders"
					:key="order.createAt"
				>
					<v-card color="#1F7087" theme="dark">
						<div class="d-flex flex-no-wrap justify-space-between">
							<div v-for="prod in order.products" :key="prod.id">
								<v-avatar class="ma-3" size="125" rounded="0">
									<v-img :src="prod.img" width="150"></v-img>
								</v-avatar>

								<v-card-title class="text-h5">
									{{ prod.desc }}
								</v-card-title>

								<v-card-subtitle>
									{{ prod.price }}
								</v-card-subtitle>
							</div>

							<div>
								<v-card-actions>
									{{ order.createAt }}
								</v-card-actions>
							</div>
						</div>
						<v-card-actions>
							Total: R$ {{ totalCart }}
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>
<script>
import { toRefs, computed, onMounted } from "vue";
import { useOrdersStore } from "@/store/orders";


export default {
	setup() {
		const orderStore = useOrdersStore();
		const totalCart = computed(() => {
			const priceSum = orderStore.orders.reduce(
				(total, prod) => total + parseFloat(prod.total),
				0
			);
			return priceSum;
		});

		onMounted(() => {
			orderStore.fetchOrders();
		});
		return { orderStore, totalCart };
	},
};
</script>
