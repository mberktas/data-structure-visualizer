<template>
	<div>
		<TransitionGroup tag="div" class="stack" name="stackAnim">
			<Cube
				:value="el.value"
				:rotate-y="el.rotateY"
				v-for="(el, index) in stack.getArr()"
				:key="index"
			/>
			<!-- <Cube :rotate-y="40" value="4" />
		<Cube :rotate-y="-40" value="3" /> -->
		</TransitionGroup>
	</div>

	<BottomBar>
		<CustomButton @click="push">Push</CustomButton>
		<CustomButton @click="pop">Pop</CustomButton>
	</BottomBar>
</template>

<script setup lang="ts">
import { Stack } from '~/data_structures/Stack'

type StackProps = {
	value: string
	rotateY: number
}

let stack = ref(new Stack<StackProps>())

const push = (value: string) => {
	stack.value.push({
		value: randomValue(),
		rotateY: randomRotateY(),
	})
}

const randomValue = () => {
	return Math.floor(Math.random() * 10).toString()
}
const randomRotateY = () => {
	const range = [
		{
			min: 315,
			max: 360,
		},
		{
			min: 0,
			max: 45,
		},
	]

	const random = Math.floor(Math.random() * 2)
	const min = range[random].min
	const max = range[random].max
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const pop = () => {
	stack.value.pop()
}
</script>

<style>
.stack {
	display: flex;
	height: 70vh;
	flex-direction: column-reverse;
	align-items: center;
}

.stackAnim-enter-active,
.stackAnim-leave-active {
	transition: all 0.5s;
}

.stackAnim-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.stackAnim-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}

.stackAnim-leave-active {
	position: relative;
}

.stackAnim-enter-active {
	position: relative;
}

.stackAnim-enter-to {
	opacity: 1;
	transform: translateY(0px);
}

.stackAnim-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
</style>
