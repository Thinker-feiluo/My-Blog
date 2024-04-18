import {
	defineStore
} from 'pinia'

const useLoginStore = defineStore("loginStore", {
	state: () => ({
		ShowHide: true
	}),
	actions: {
		SortShow() {

		}
	}
})

export default useLoginStore