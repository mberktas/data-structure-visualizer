<template>
	<div class="arrow">
		<div class="arrow__line" :index="index" ref="arrowLine"></div>
		<div class="arrow__triangle" :index="index" ref="arrowTriangle"></div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	index: number
}>()

const arrowLine = ref<HTMLElement>()
const arrowTriangle = ref<HTMLElement>()

const arrowLineAnimationClass = 'arrow__line-color-change'
const arrowTriangleAnimationClass = 'arrow__triangle-color-change'

const playAnimation = () => {
	arrowLine.value!.classList.add(arrowLineAnimationClass)
	arrowTriangle.value!.classList.add(arrowTriangleAnimationClass)
}

const stopAnimation = () => {
	arrowLine.value!.classList.remove(arrowLineAnimationClass)
}

const clearAnimation = () => {
	arrowLine.value!.classList.remove(arrowLineAnimationClass)
	arrowTriangle.value!.classList.remove(arrowTriangleAnimationClass)
}

defineExpose({
	playAnimation,
	stopAnimation,
	clearAnimation,
})
</script>

<style scoped>
.arrow {
	display: flex;
	align-items: center;
	justify-content: center;
}
.arrow__triangle {
	width: 0;
	height: 0;
	border-top: var(--arrowBorderWidth) solid transparent;
	border-bottom: var(--arrowBorderWidth) solid transparent;
	border-left: var(--arrowBorderWidth) solid #333;
	border-radius: 100px;
}

.arrow__line {
	width: 50px;
	height: 2px;
	background-color: #333;
	border-radius: 100px;
}

.arrow__line-color-change:before {
	content: '';
	animation-name: arrow-line-color-change;
	animation-duration: 0.6s;
	animation-delay: 0.2s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	display: block;
	height: 100%;
	width: 0;
	background-color: orange;
}

@keyframes arrow-line-color-change {
	from {
		width: 0px;
	}

	to {
		width: 100%;
	}
}

.arrow__triangle-color-change {
	animation-name: arrow-triangle-color-change;
	animation-duration: 0.2s;
	animation-delay: 0.8s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
}

@keyframes arrow-triangle-color-change {
	from {
		border-left: var(--arrowBorderWidth) solid #333;
	}

	to {
		border-left: var(--arrowBorderWidth) solid orange;
	}
}
</style>
