<script setup lang='ts'>

const emit = defineEmits(['submitTask'])

</script>

<template>
<form @submit.prevent="emit('submitTask')" class='form'>
	<slot></slot>
</form>
</template>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	width: fit-content;
	padding: 1rem;
	border-radius: 5px;
	background: red;
}

</style>