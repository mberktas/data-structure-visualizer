<template>
	<div>
		<TransitionGroup tag="div" class="linked-list" name="listAnim">
			<div class="wrapper listAnim" v-for="(node, index) in nodes" :key="index" :order="index">
				<CustomNode
					:node="node"
					:type="nodeType(index)"
					:data="node.data"
					:index="index"
					:ref="(el) => setNodeRefs(el, index)"
				/>

				<Transition name="node__next">
					<div class="node__next" v-if="node.next != null">
						<Arrow :ref="(el) => setArrowRefs(el, index)" :index="index" :order="index" />
					</div>
				</Transition>
			</div>
		</TransitionGroup>
	</div>
	<BottomBar>
		<input style="width: 100px" placeholder="Node" type="text" v-model="nodeData" />
		<CustomButton @click="generateList">Random List</CustomButton>
		<CustomButton @click="addNode">Add node</CustomButton>
		<CustomButton @click="randomNode">Random node</CustomButton>
		<CustomButton @click="popNode" :disabled="disablePopButton">Pop node</CustomButton>
		<CustomButton @click="removeNode">Remove Node</CustomButton>
		<CustomButton @click="clearList">Clear List</CustomButton>
	</BottomBar>
</template>

<script setup lang="ts">
import { LinkedList, Node } from '@/data_structures/LinkedList'

const linkedList = ref(new LinkedList())

const nodes = ref(linkedList.value.getNodes())

const nodeData = ref()

const arrows = ref<any[]>([])

const setArrowRefs = (el: any, index: number) => {
	arrows.value[index] = el
}

const nodeRefs = ref<any[]>([])

const setNodeRefs = (el: any, index: number) => {
	nodeRefs.value[index] = el
}

const removeNode = async () => {
	let order = 0
	while (true) {
		if (order === nodes.value.length) break

		const wrapperEl = document.querySelector(`.wrapper[order='${order}']`)
		const nodeEl = wrapperEl?.firstElementChild
		const nodeElData = nodeEl?.attributes.getNamedItem('data')?.value

		nodeEl!.classList.add('color-changing')

		if (nodeElData == nodeData.value) {
			nodeEl!.classList.remove('color-changing')
			nodeEl!.classList.add('node--found')
			console.log('found')
			await new Promise((resolve) => {
				setTimeout(() => {
					linkedList.value.removeNodeByData(nodeData.value)
					resolve('')
				}, 2000)
			})
			break
		}

		if (arrows.value[order]) {
			arrows.value[order].playAnimation()
		}

		order++

		await new Promise((resolve) => setTimeout(resolve, 1000))
	}

	clearAnimation()
}

const clearAnimation = () => {
	arrows.value.forEach((arrow) => {
		if (arrow) arrow.clearAnimation()
	})

	console.log(arrows.value)

	console.log(nodeRefs.value)
	nodeRefs.value.forEach((nodeRef) => {
		if (nodeRef) nodeRef.clearAnimation()
	})
}

const disablePopButton = computed(() => {
	return linkedList.value.head ? false : true
})

onMounted(() => {
	generateList()
})
let addingNode = false

const clearList = () => {
	linkedList.value = new LinkedList()
}
const generateList = async () => {
	const length = Math.floor(Math.random() * 10) + 3
	linkedList.value = new LinkedList()

	for (let i = 0; i < length; i++) {
		linkedList.value.push(new Node(Math.floor(Math.random() * 100)))
		await new Promise((resolve) => setTimeout(resolve, 200))
	}
}

watchEffect(() => {
	nodes.value = linkedList.value.getNodes()
})

const nodeType = (index: number) => {
	if (index === 0) return 'head'
	if (index === nodes.value.length - 1) return 'tail'
	return ''
}

const addNode = () => {
	// if (!addingNode) {
	// 	addingNode = true
	// 	setTimeout(() => {
	// 		addingNode = false
	// 	}, 200)
	// } else {
	// 	return
	// }

	const node = new Node(nodeData.value)
	linkedList.value.push(node)
	nodes.value.push(node)
}

const randomNode = () => {
	const node = new Node(Math.floor(Math.random() * 100))
	linkedList.value.push(node)
	nodes.value.push(node)
}

const popNode = () => {
	linkedList.value.pop()
	nodes.value.pop()
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
}

.wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	backface-visibility: hidden;
	z-index: 1;
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
	backface-visibility: hidden;
	z-index: 1;
}

/* moving */
.listAnim-move {
	transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.listAnim-enter-active {
	transition: all 400ms ease-out;
	opacity: 0;
}

/* disappearing */
.listAnim-leave-active {
	transition: all 200ms ease-in;
	position: absolute;
	z-index: 0;
}

/* appear at / disappear to */
.listAnim-enter,
.listAnim-leave-to {
	opacity: 0;
}

.node__next-enter-active {
	transform: translateX(100%);
	opacity: 1;
}
.node__next-enter-from {
	transform: translateX(0);
	opacity: 0;
}
.node__next-enter-active {
	position: absolute;
}

.node__next-leave {
	transform: translateX(0);
}
.node__next-leave-to {
	transform: translateX(-100%);
}

.node__next-enter-active,
.node__next-leave-active {
	transition: all 100ms ease-in-out;
}
</style>
