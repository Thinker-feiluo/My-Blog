import { ElMessage } from 'element-plus'

export function myElMessage(msg : string, type : 'success' | 'warning' | 'error') {
	ElMessage({
		message: msg,
		type: type
	})
}