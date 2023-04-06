<template>
	<div class="button__wrapper">
		<button @click="dropdown" ref="button">
			<slot></slot>
		</button>

		<slot name="dropdown">
			<div class="dropdown">
				<slot name="dropdown-content">
					<div>A</div>
					<div>A</div>
					<div>A</div>
					<div>A</div>
					<div>A</div>
				</slot>
			</div>
		</slot>
	</div>
</template>

<script setup lang="ts">
const button = ref<HTMLElement>()

const dropdown = () => {
	console.log('dropdown')
	button.value!.classList.toggle('active')
}
</script>

<style scoped>
.button__wrapper {
	position: relative;
}
button {
	margin: 0 1rem;
	padding: 10px;
	border-radius: 25px;
	border: none;
	background-color: burlywood;
	color: #fff;
	cursor: pointer;
	min-width: fit-content;
}

button.active {
	background-color: #fff;
	color: burlywood;
	position: relative;
}

.dropdown {
	display: none;
	position: absolute;
	/* top: 100%; */
	left: 0;
	background-color: burlywood;
	color: #fff;
	border-radius: 25px;
	padding: 10px;
	width: 100px;
	height: 50px;
}

.dropdown::before {
	content: '';
	position: absolute;
	/* top: -10px; */
	left: 0;
	width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 10px solid burlywood;
}

.dropdown-content {
	display: flex;
	flex-direction: column;
	row-gap: 10px;
}

button.active::after {
	content: '▲';
	margin-left: 5px;
}

button.active + .dropdown {
	display: block;
}

button::after {
	content: '▼';
	margin-left: 5px;
}
</style>
