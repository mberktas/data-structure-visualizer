export class LinkedList<T> {
	head: Node<T> | null
	tail: Node<T> | null

	constructor() {
		this.head = null
		this.tail = null
	}

	push(node: Node<T>) {
		if (this.head === null) {
			this.head = node
			this.tail = node
		} else {
			this.tail!.next = node
			this.tail = node
		}
	}

	pop(): Node<T> | null {
		if (this.head === null) {
			return null
		}

		if (this.head === this.tail) {
			const node = this.head
			this.head = null
			this.tail = null
			return node
		}

		let node = this.head
		let prevNode = node

		while (node.next !== null) {
			prevNode = node
			node = node.next
		}

		prevNode.next = null
		this.tail = prevNode
		return node
	}

	removeNodeByData(data: any): void {
		if (this.head!.data == data) {
			this.head = this.head!.next
			return
		}

		let prevNode = this.head
		let tmpNode = this.head!.next
		while (tmpNode) {
			if (tmpNode?.data == data) {
				if (tmpNode!.next != null) {
					prevNode!.next = tmpNode.next
					tmpNode = null
					break
				} else {
					this.tail = null
					prevNode!.next = null
					this.tail = prevNode
					break
				}
			}

			prevNode = tmpNode
			tmpNode = tmpNode!.next
		}
	}

	getNodes(): Node<T>[] {
		const nodes = []
		let node = this.head
		while (node !== null) {
			nodes.push(node)
			node = node.next
		}
		return nodes
	}
}

export class Node<T> {
	data: T
	next: Node<T> | null

	constructor(data: any) {
		this.data = data
		this.next = null
	}
}
