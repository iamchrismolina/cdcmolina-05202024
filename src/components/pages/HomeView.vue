<script setup lang='ts'>
import { useTasksStore } from '@/stores/tasks.ts'
const { tasks, createTask } = useTasksStore()

</script>
<template>
	Test
	{{ tasks }}
</template>
<style scoped></style>