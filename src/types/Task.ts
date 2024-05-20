import { v4 as uuidv4 } from 'uuid'

enum Status {
	TODO = 'TODO',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE'
}

interface Task {
	taskId: uuid;
	name: string;
	description?: string;
	status: Status;
}