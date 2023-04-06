export class Stack<T> {
	private arr: T[]

	constructor() {
		this.arr = []
	}

	public push(element: T) {
		this.arr.push(element)
	}

	public pop(): T | undefined {
		return this.arr.pop()
	}

	public peek(): any {
		return this.arr[this.arr.length - 1]
	}

	public size() {
		return this.arr.length
	}

	public isEmpty() {
		return this.arr.length === 0
	}

	public getArr() {
		return this.arr
	}
}
