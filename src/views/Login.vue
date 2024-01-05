<template>
	<!-- <div>
		<input placeholder="user login" type="text" v-model="user.username" />
		<input
			placeholder="user password"
			type="text"
			v-model="user.password"
		/>
		<button @click="autenticateUser">Login</button>
	</div> -->

	<div class="d-flex align-center justify-center" style="height: 100vh">
		<v-sheet width="400" class="mx-auto">
			<v-form fast-fail>
				<v-text-field
					label="User Name"
					v-model="user.username"
				></v-text-field>

				<v-text-field
					label="password"
					v-model="user.password"
				></v-text-field>
				<a href="#" class="text-body-2 font-weight-regular"
					>Forgot Password?</a
				>

				<v-btn
					color="primary"
					block
					class="mt-2"
					@click="autenticateUser"
					>Sign in</v-btn
				>
			</v-form>
			<div class="mt-2">
				<p class="text-body-2">
					Don't have an account? <a href="#">Sign Up</a>
				</p>
			</div>
		</v-sheet>
	</div>
</template>
<script>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth.js";

export default {
	setup() {
		const userStore = useAuthStore();
		const user = ref({});
		const autenticateUser = async () => {
			userStore.autenticate(user.value.username, user.value.password);
		};
		return { autenticateUser, user };
	},
};
</script>
