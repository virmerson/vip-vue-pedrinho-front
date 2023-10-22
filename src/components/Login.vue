<template>
	<div>
		<div><input placeholder="username" v-model="user.username" /></div>
		<div><input placeholder="password" v-model="user.password" /></div>
		<div><button @click="cadastrar">Cadastrar</button></div>
		<div><a href="#"> Recuperar senha </a></div>

		<div :class="classObject">{{ usuarioValido }}</div>
	</div>
</template>
<script>
import { ref, computed } from "vue";

export default {
	setup() {
		const user = ref({});
		function cadastrar() {
			alert(JSON.stringify(user.value));
		}
		const usuarioValido = computed(() => {
			return (
				user.value.username != undefined &&
				user.value.username.length >= 3
			);
		});
		const classObject = computed(() => ({
			vermelho: !usuarioValido.value,
			azul: usuarioValido.value,
		}));
		return {
			user,
			cadastrar,
			usuarioValido,
			classObject,
		};
	},
};
</script>
<style scoped>
.vermelho {
	color: red;
}
.azul {
	color: blue;
}
</style>