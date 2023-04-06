<template>
	<div class="container">
		<div
			class="cube"
			:style="`transform : rotateX(${rotateX}deg); transform : rotateY(${rotateY}deg);`"
		>
			<div class="face front">{{ value }}</div>
			<div class="face back"></div>
			<div class="face right"></div>
			<div class="face left"></div>
			<!-- <div class="face top"></div> -->
			<!-- <div class="face bottom"></div> -->
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	rotateX: {
		type: Number,
		default: 360,
		max: 360,
		min: -360,
	},

	rotateY: {
		type: Number,
		default: 30,
		max: 360,
		min: -360,
	},

	value: {
		type: String,
		default: '0',
	},
})
</script>

<style scoped>
.container {
	width: 64px;
	height: 64px;
	perspective: 1000px;
	margin-bottom: -1px;
}

.face {
	position: absolute;
	width: 100%;
	height: 100%;
	background: red;
	border: 1px solid black;
	color: white;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2vh;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.top {
	transform: rotateX(90deg) translateZ(var(--cubeHeight));
}
.bottom {
	transform: rotateX(-90deg) translateZ(var(--cubeHeight));
}

.right {
	transform: rotateY(90deg) translateZ(var(--cubeWidth));
	background-color: red;
}
.left {
	transform: rotateY(-90deg) translateZ(var(--cubeWidth));
}

.front {
	transform: rotateX(0deg) translateZ(var(--cubeWidth));
}
.back {
	transform: rotateX(-180deg) translateZ(var(--cubeWidth));
}

@keyframes spin {
	from {
		transform: rotateX(0deg) rotateY(0deg);
	}
	to {
		transform: rotateX(360deg) rotateY(360deg);
	}
}
.cube {
	transform-style: preserve-3d;
	width: 100%;
	height: 100%;
	position: relative;
	transform: rotateX(360deg) rotateY(30deg);
	/* animation: spin 5s infinite linear; */
}
</style>
