<template>
	<h1>Lista de pedidos</h1>

	<v-card max-width="400" class="mx-auto">
		<v-container>
			<v-row dense>
				<v-col
					cols="12"
					v-for="(order, index) in orders"
					:key="order.createAt"
				>
					<v-card color="#1F7087" theme="dark">
						<div class="d-flex flex-no-wrap justify-space-between">
							<div v-for="prod in order.products" :key="prod.id">

								<v-avatar class="ma-3" size="125" rounded="0">
									<v-img
										:src="prod.img"
										width="150"
									></v-img>
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
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-card-actions> Total: R$ {{ totalCart }} </v-card-actions>
	</v-card>
</template>
<script>
import { toRefs, computed } from "vue";

export default {
  props: {
    orders: Array,
  },
  setup(props, { emit }) {
    const { orders } = toRefs(props);
    console.log(orders);

    const totalCart = computed(() => {
      const priceSum = orders.value.reduce(
        (total, order) => total + parseFloat(order.products[0].price),
        0
      );
      return priceSum;
    });
    return { orders, totalCart };
  },
};
</script>
