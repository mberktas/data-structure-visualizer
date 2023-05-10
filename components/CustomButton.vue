<template>
	<button ref="button" @click="btnDelay"><slot></slot></button>
</template>

<script setup lang="ts">
const button = ref<HTMLButtonElement | null>(null)

const props = defineProps({
	multiClickable: {
		type: Boolean,
		default: false,
	},

	delay: {
		type: Number,
		default: 200,
	},
})

const btnDelay = () => {
	if (props.multiClickable) {
		return
	}
	button.value!.disabled = true
	setTimeout(() => {
		button.value!.disabled = false
	}, props.delay)
}
</script>

<style scoped>
button {
	margin: 0 1rem;
	padding: 10px;
	border-radius: 25px;
	border: none;
	background-color: burlywood;
	color: #fff;
	cursor: pointer;
	min-width: max-content;
	height: fit-content;
}
</style>
