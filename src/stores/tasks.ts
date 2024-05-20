import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
import type { Task } from '@/types/Task'
import { v4 as uuidv4 } from 'uuid'

const useTasksStore = defineStore('tasks', () => {

	const tasks = ref<Task[]>([])

	const createTask = (name: string, description?: string, status: Status) => {
		const newTask = {
			taskId: uuidv4(),
			name,
			description,
			status
		}
		tasks.value.push(newTask)
	}



	return { tasks, createTask }

})




export { useTasksStore }