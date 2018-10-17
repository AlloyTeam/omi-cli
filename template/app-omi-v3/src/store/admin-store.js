class AdminStore {
    constructor(data, callbacks) {
      this.name = data.name || ''
      this.onRename = callbacks.onRename || function () { }
    }
  
    rename(name) {
      this.name = name
      this.onRename()
    }
  }

  export default AdminStore