<template>
	<button ref="button"><slot></slot></button>
</template>

<script setup lang="ts">
const button = ref<HTMLButtonElement | null>(null)
let clickDelay = 200

onMounted(() => {
	button.value!.addEventListener('click', () => {
		button.value!.disabled = true
		setTimeout(() => {
			button.value!.disabled = false
		}, clickDelay)
	})
})
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
	min-width: fit-content;
	height: fit-content;
}
</style>
