<template>
	<v-card color="#1F7087" theme="dark">
		<div class="d-flex flex-no-wrap justify-space-between">
			<div>
				<v-card-title class="text-h5">
					{{ product.desc }}
				</v-card-title>

				<v-card-subtitle>Price: {{ product.price }}</v-card-subtitle>

				<v-card-actions>
					<v-btn
						class="ms-2"
						variant="outlined"
						size="small"
						@click="emitEvent"
					>
						Add to cart
					</v-btn>

					<v-row justify="space-around">
						<v-col cols="auto">
							<v-dialog
								transition="dialog-top-transition"
								width="auto"
							>
								<template v-slot:activator="{ props }">
									<v-icon
										v-bind="props"
										@click="showDetails"
										class="ms-2"
										variant="outlined"
										size="small"
										>mdi-eye</v-icon
									>
								</template>
								<template v-slot:default="{ isActive }">
									<v-window
										v-model="onboarding"
										show-arrows
										direction="vertical"
									>
										<v-window-item
											v-for="n in length"
											:key="`card-${n}`"
										>
											<v-card>
												<v-toolbar
													title="Products Details"
												></v-toolbar>

												<v-img
													:src="product.img"
													width="250"
												></v-img>

												<v-card-title class="text-h5">
													{{ product.desc }}
												</v-card-title>
												<v-card-subtitle
													>Price:
													{{
														product.price
													}}</v-card-subtitle
												>

												<v-card-actions
													class="justify-end"
												>
													<v-btn
														variant="text"
														@click="
															isActive.value = false
														"
														>Close</v-btn
													>
												</v-card-actions>
											</v-card>
										</v-window-item>
									</v-window>
								</template>
							</v-dialog>
						</v-col>
					</v-row>

					<v-icon
						class="ms-2"
						variant="outlined"
						size="small"
						@click="showDetails"
					>
						Show Details
					</v-icon>
				</v-card-actions>
			</div>

			<v-avatar class="ma-3" size="125" rounded="0">
				<v-img :src="product.img" width="150"></v-img>
			</v-avatar>
		</div>
	</v-card>
</template>
<script>
import { defineComponent, toRefs, ref } from "vue";

export default defineComponent({
	props: {
		product: Object,
	},
	emits: ["addCart", "showDetails"],
	setup(props, { emit }) {
		const length = ref(3);
		const onboarding = ref(0);
		const { product } = toRefs(props);

		const emitEvent = () => {
			emit("addCart", product.value);
		};
		const showDetails = () => {
			emit("showDetails", product.value);
		};
		return { product, emitEvent, showDetails, length, onboarding };
	},
});
</script>
