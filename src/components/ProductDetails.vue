<template>
	<div v-show="details.id">
		Desc: {{ details.desc }} Price: {{ details.price }} Image:
		<img :src="details.img" width="100" />
	</div>
</template>
<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
	props: {
		details: Object,
	},
	setup(props) {
		const { details } = toRefs(props);
		return { details };
	},
});
</script>
