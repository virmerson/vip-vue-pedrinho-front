<template>
	<v-app>
		<v-navigation-drawer v-model="drawer">
			<v-list>
				<v-list-item
					prepend-avatar="src/assets/pitbull.jpg"
					title="Pedrinho"
					subtitle="Github: pedrinho-dev"
				></v-list-item>
			</v-list>

			<v-list-item prepend-icon="mdi-view-list" link to="/productList">
				<v-list-item-title>Products</v-list-item-title>
			</v-list-item>

			<v-list-item prepend-icon="mdi-cart" link to="/cart">
				<v-list-item-title>Shopping Cart</v-list-item-title>
			</v-list-item>

			<v-list-item
				prepend-icon="mdi-file-document-outline"
				link
				to="/orders"
			>
				<v-list-item-title>Orders</v-list-item-title>
			</v-list-item>
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Ecommerce do pedrinho</v-toolbar-title>
			<v-btn
				@click="logout"
				variant="outlined"
				color="warning"
				append-icon="mdi-logout"
			>
				<template v-slot:append>
					<v-icon color="warning"></v-icon> </template
				>Logout</v-btn
			>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import { useAuthStore } from "@/store/auth.js";
import { ref } from "vue";

export default {
	setup() {
		const userStore = useAuthStore();
		const drawer = ref(false);

		const toggleDrawer = () => {
			drawer.value = !drawer.value;
		};

		const logout = () => {
			userStore.logout();
		};

		return {
			drawer,
			toggleDrawer,
			logout,
		};
	},
};
</script>

