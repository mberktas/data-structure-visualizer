import { describe, expect, test } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
import { Stack } from '../data_structures/Stack'
describe('Stack', async () => {
	await setup({})

	test('should create stack', () => {
		const stack = new Stack()
		expect(stack).toBeInstanceOf(Stack)
	})

	test('should push value to stack', () => {
		const stack = new Stack()
		stack.push(1)
		expect(stack.peek()).toBe(1)
	})

	test('should pop value from stack', () => {
		const stack = new Stack()
		stack.push(1)
		stack.push(2)
		stack.push(3)
		expect(stack.pop()).toBe(3)
	})

	test('should peek value from stack', () => {
		const stack = new Stack()
		stack.push(1)
		stack.push(2)
		stack.push(3)
		expect(stack.peek()).toBe(3)
	})
})
