<script setupt lang='ts'>

</script>

<template>
<form @submit.prevent class='form'>
	<slot></slot>
</form>
</template>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	width: fit-content;
}

</style>