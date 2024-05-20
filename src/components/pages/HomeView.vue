<script setup lang='ts'>
import { useTasksStore } from '@/stores/tasks.ts'
const { tasks, createTask } = useTasksStore()
import VButton from '@/components/atoms/VButton.vue'
import VInput from '@/components/atoms/VInput.vue'
import VText from '@/components/atoms/VText.vue'
import VTaskForm from '@/components/molecules/VTaskForm.vue'
import { ref } from 'vue'
import type { Task, Status } from '@/types/tasks'

const name = ref<string>('')
const description = ref<string>('')
const status = ref<Status>('TODO')

</script>

<template>
	<VTaskForm>
		<VText for='name' :tag="'label'" :content="'Name'" />
		<VInput v-model='name' id='name' :inputType="'text'" maxlength='250' required />
		<VText for='description' :tag="'label'" :content="'Description'" />
		<textarea v-model='description' id='description' rows='5' cols='45' maxlength='1000'></textarea>
		<VText for='status' :tag="'label'" :content="'Status'" />
		<select id='status'>
			<option value='TODO' selected>TODO</option>
			<option value='IN_PROGRESS'>IN PROGRESS</option>
			<option value='DONE'>DONE</option>
		</select>
		<VButton :buttonType="'submit'" :buttonText="'Add Task'"/>
	</VTaskForm>
</template>

<style scoped>
	

</style>