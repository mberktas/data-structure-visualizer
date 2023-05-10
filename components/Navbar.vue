<template>
	<div>
		<nav class="navbar">
			<div class="navbar__links">
				<a href="/">Linked List</a>
				<a href="/stack">Stack</a>
				<!-- <a href="/queue">Queue</a>
				<a href="/binary-search-tree">Binary Search Tree</a>
				<a href="/heap">Heap</a>
				<a href="/graph">Graph</a> -->
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 2rem;
	background-color: #333;
	color: #fff;
}

.navbar__links {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
}

.navbar__links a {
	margin-left: 1rem;
	margin-right: 1rem;
	text-decoration: none;
	color: #fff;
}

.navbar__links a:hover {
	color: #62ffa2;
}
</style>
