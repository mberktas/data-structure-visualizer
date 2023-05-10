<template>
	<div class="node" :class="type" :index="index" ref="nodeEl">
		<div class="node__value">{{ node.data }}</div>
	</div>
</template>

<script setup lang="ts">
import { Node } from '@/data_structures/LinkedList'

const props = defineProps({
	node: {
		type: Node,
		required: true,
	},

	type: {
		type: String,
		default: '',
	},

	index: {
		type: Number,
	},
})

let nodeEl = ref<HTMLElement>()

const nodeColorChangeAnimationClass = 'color-changing'
const nodeFoundAnimationClass = 'node--found'

const playAnimation = () => {
	nodeEl.value?.classList.add(nodeColorChangeAnimationClass)
}

const playFoundAnimation = () => {
	nodeEl.value?.classList.add(nodeFoundAnimationClass)
}
const stopAnimation = () => {
	nodeEl.value?.classList.remove(...[nodeColorChangeAnimationClass, nodeFoundAnimationClass])
}

const clearAnimation = () => {
	nodeEl.value?.classList.remove(...[nodeColorChangeAnimationClass, nodeFoundAnimationClass])
}

defineExpose({
	playAnimation,
	playFoundAnimation,
	stopAnimation,
	clearAnimation,
	props,
})
</script>

<style scoped>
.node {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: var(--initialNodeColor);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.head {
	background-color: #62ffa2;
}

.tail {
	background-color: #f86767;
}
.node__value {
	/* font-size: 1.5rem; */
	font-weight: 500;
	color: #333;
}

.node__next {
	margin-left: 6rem;
}

.node--found {
	background-color: var(--foundNodeColor);
	animation-name: bg-found-change;
	animation-duration: 300ms;
	animation-iteration-count: 3;
	animation-timing-function: ease-in-out;
}

.color-changing {
	animation-name: bg-change;
	animation-duration: 1s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;
}

@keyframes bg-change {
	100% {
		background-color: orange;
	}
}

@keyframes bg-found-change {
	0% {
		background-color: var(--initialNodeColor);
	}

	100% {
		background-color: var(--foundNodeColor);
	}
}
</style>
