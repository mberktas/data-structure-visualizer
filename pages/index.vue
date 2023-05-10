<template>
	<div>
		<TransitionGroup tag="div" class="linked-list" name="listAnim">
			<div class="wrapper listAnim" v-for="(node, index) in nodes" :key="index" :order="index">
				<CustomNode
					:node="node"
					:type="nodeType(index)"
					:data="node.data"
					:index="index"
					ref="nodeRefs"
				/>

				<Transition name="node__next">
					<div class="node__next" v-if="node.next != null">
						<Arrow ref="arrowRefs" :index="index" :order="index" />
					</div>
				</Transition>
			</div>
		</TransitionGroup>
	</div>
	<BottomBar>
		<div class="btn__group">
			<input style="width: 100px" placeholder="Node" type="text" v-model="nodeData" />
			<CustomButton @click="addNode">Add node</CustomButton>
			<CustomButton @click="removeNode">Remove Node</CustomButton>
		</div>
		<div class="btn__group">
			<CustomButton @click="randomNode">Random node</CustomButton>
			<CustomButton @click="popNode">Pop node</CustomButton>
		</div>
		<div class="btn__group">
			<CustomButton @click="generateList">Random List</CustomButton>
			<CustomButton @click="clearList">Clear List</CustomButton>
		</div>
	</BottomBar>
</template>

<script setup lang="ts">
import { LinkedList, Node } from '@/data_structures/LinkedList'

const linkedList = ref(new LinkedList())

let nodes = computed(() => linkedList.value.getNodes())

const nodeData = ref()

const arrowRefs = ref<any[]>([])

const nodeRefs = ref<any[]>([])

const removeNode = async () => {
	for (let nodeEl of nodeRefs.value) {
		const nodeElData = nodeEl.props.node.data

		nodeEl.playAnimation()

		if (nodeElData == nodeData.value) {
			nodeEl.stopAnimation()
			nodeEl.playFoundAnimation()
			await new Promise((resolve) => setTimeout(resolve, 1000))
			linkedList.value.removeNodeByData(nodeData.value)
			break
		}

		await new Promise((resolve) => setTimeout(resolve, 1000))
		if (arrowRefs.value[nodeEl.props.index]) arrowRefs.value[nodeEl.props.index].playAnimation()
		await new Promise((resolve) => setTimeout(resolve, 1000))
	}

	clearAnimation()
}

const clearAnimation = () => {
	arrowRefs.value.forEach((arrow) => {
		if (arrow) arrow.clearAnimation()
	})

	nodeRefs.value.forEach((nodeRef) => {
		if (nodeRef) nodeRef.clearAnimation()
	})
}

onMounted(() => {
	generateList()
})

let addingNode = false

const clearList = () => {
	linkedList.value = new LinkedList()
}
const generateList = async () => {
	clearList()
	const length = Math.floor(Math.random() * 3) + 3
	for (let i = 0; i < length; i++) {
		linkedList.value.push(new Node(Math.floor(Math.random() * 100)))
		await new Promise((resolve) => setTimeout(resolve, 400))
	}
}

const nodeType = (index: number) => {
	if (index === 0) return 'head'
	if (index === linkedList.value.getNodes().length - 1) return 'tail'
	return ''
}

const addNode = () => {
	const node = new Node(nodeData.value)
	linkedList.value.push(node)
}

const randomNode = () => {
	const node = new Node(Math.floor(Math.random() * 100))
	linkedList.value.push(node)
}

const popNode = () => {
	linkedList.value.pop()
}
</script>

<style scoped>
.linked-list {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	row-gap: 2rem;
	align-items: center;
	flex-wrap: wrap;
	max-width: 50%;
	margin: 0 auto;
	min-width: 50%;
	position: relative;
}

.wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	backface-visibility: hidden;
	z-index: 1;
}

.btn__group {
	display: flex;
	padding: 10px;
	width: max-content;
	margin: 0 5px 0 5px;
	background: rgba(255, 255, 255, 0.4);
	border-radius: var(--borderRadius);
}

.node__next {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 1rem;
	margin-right: 1rem;
}

/* base */
.listAnim {
	z-index: 1;
}

.listAnim-enter-active,
.listAnim-leave-active {
	transition: all 400ms ease-in-out;
}

.listAnim-enter-to {
	opacity: 1;
}
.listAnim-enter-from,
.listAnim-leave-to {
	opacity: 0;
}

.node__next-enter-active,
.node__next-leave-active {
	transition: all 400ms ease-in-out;
	transform-origin: left;
}
.node__next-enter-from {
	transform: scaleX(0);
}

.node__next-enter-to {
	transform: scaleX(100%);
}

.node__next-leave-to {
	transform: scaleX(0);
}
</style>
