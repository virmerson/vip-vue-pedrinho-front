<template>
	<h1>Carrinho de produtos</h1>
	<v-card max-width="400" class="mx-auto">
		<v-container>
			<v-row dense>
				<v-col
					cols="12"
					v-for="(product, index) in cart"
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

export default {
  props: {
    cart: Array,
  },
  emits: ["finishOrder"],
  setup(props, { emit }) {
    const { cart } = toRefs(props);

    const deleteProduct = (index) => {
      cart.value.splice(index, 1);
    };
    const totalCart = computed(() => {
      const priceSum = cart.value.reduce(
        (total, product) => total + parseFloat(product.price),
        0
      );
      return priceSum;
    });

    const clearCart = () => {
      cart.value.splice(0, cart.value.length);
    };

    const finishOrder = () => {
      const order = {
        products: [...cart.value],
        total: totalCart.value,
        createAt: new Date().toLocaleString(),
      };
      emit("finishOrder", order);
      clearCart();
    };
    return { cart, deleteProduct, totalCart, finishOrder };
  },
};
</script>
