export default class DataWrapper {
    constructor(item, store) {
        Object.assign(this, item)
        this._store = store
    }

    getRelation(relation) {
        const relStore = this._store.getStoreByName(relation)

        const result = [];
        for (let id in this[relation]) {
            let item = relStore.getById(id)
            if (item !== undefined) result.push(item)
        }
        return result        
    }
}
