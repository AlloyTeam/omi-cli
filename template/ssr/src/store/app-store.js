

class AppStore {
	constructor(data, callbacks) {
		this.name = data.name || ''
		this.onRename = callbacks.onRename || function () { }
	}

	rename(name) {
		this.name = name
		this.onRename()
	}

	mixData(data){
		this.name = data.name
	}


}


export default AppStore