<script setup lang='ts'>
	
const props = defineProps<{
	buttonType: string,
	buttonText: string
}>()

</script>
<template>
	<button :type='buttonType'>{{ buttonText }}</button>
</template>
<style scoped></style>