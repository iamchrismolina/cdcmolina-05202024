<script setup lang='ts'>
import { useTasksStore } from '@/stores/tasks.ts'
const { tasks, createTask } = useTasksStore()
import VButton from '@/components/atoms/VButton.vue'
import VInput from '@/components/atoms/VInput.vue'
import VText from '@/components/atoms/VText.vue'
import VTaskFrom from '@/components/molecules/VTaskForm.vue'

</script>
<template>
	Test
	{{ tasks }}
	<VTaskForm>
		<VText for='name' :tag="'label'" :content="'Name'" />
	</VTaskForm>
</template>
<style scoped></style>