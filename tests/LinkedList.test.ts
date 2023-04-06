import { describe, expect, test } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
import { LinkedList, Node } from '../data_structures/LinkedList'

describe('LinkedList', async () => {
	await setup({})

	test('should create linkedlist', () => {
		const linkedList = new LinkedList()
		expect(linkedList).toBeInstanceOf(LinkedList)
	})

	test('should push node to linkedlist', () => {
		const linkedList = new LinkedList()
		const node = new Node(1)
		linkedList.push(node)
		expect(linkedList.head).toBe(node)
		expect(linkedList.tail).toBe(node)
	})

	test('should pop node from linkedlist', () => {
		const linkedList = new LinkedList()
		const node = new Node(1)
		linkedList.push(node)
		expect(linkedList.pop()).toBe(node)
	})

	test('should remove node from linkedlist', () => {
		const linkedList = new LinkedList()
		const node = new Node(1)
		const node2 = new Node(2)
		const node3 = new Node(3)
		linkedList.push(node)
		linkedList.push(node2)
		linkedList.push(node3)
		linkedList.removeNodeByData(2)
		expect(linkedList.head?.next).toBe(node3)
		expect(linkedList.tail).toBe(node3)
	})

	test('should remove tail node from linkedlist', () => {
		const linkedList = new LinkedList()
		const node = new Node(1)
		const node2 = new Node(2)
		const node3 = new Node(3)
		linkedList.push(node)
		linkedList.push(node2)
		linkedList.push(node3)
		linkedList.removeNodeByData(3)
		expect(linkedList.tail).toBe(node2)
		expect(linkedList.head?.next).toBe(node2)
	})
})
