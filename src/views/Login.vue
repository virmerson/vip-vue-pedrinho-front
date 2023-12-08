<template>
	<div>
		<input placeholder="user login" type="text" v-model="user.username" />
		<input placeholder="user password" type="text" v-model="user.password" />
		<button @click="autenticate">Login</button>
	</div>  
</template>
<script>
import axios from "axios";
import { ref } from "vue";

export default {
	setup() {
		const user = ref({});
		const autenticate = async () => {
			const response = await axios.post(
				"http://localhost:3001/users/login", {username: user.value.username, password:user.value.password}
			);
			console.log(response.data);
		};
		return { autenticate, user };
	},
};
</script>
