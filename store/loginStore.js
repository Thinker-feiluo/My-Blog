import {
	defineStore
} from 'pinia'

const useLoginStore = defineStore("loginStore", {
	state: () => ({
		ShowHide: true
	}),
	actions: {
		async Login(username, password) {
			const res = await getFetchData({
				url: "/api/api/register",
				opts: {
					username,
					password
				}
			})
			return res
		}
	},
	persist: true,
})

export default useLoginStore