<template>
	<div class="bottom-bar">
		<slot></slot>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bottom-bar {
	display: flex;
	flex-direction: row;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
	margin-bottom: 10vh;
	z-index: 99;
	padding: 2rem;
	border-radius: 25px;
	background-color: rgba(210, 210, 210, 0.3);
	max-width: 100%;
	width: auto;
	overflow-x: auto;
	min-height: 85px;
	max-height: 250px;
}

/* .bottom-bar__placeholder {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	width: fit-content;
	height: 300%;
	position: absolute;
	bottom: 0;
	overflow-x: auto;
	padding: 2rem;
} */
</style>
