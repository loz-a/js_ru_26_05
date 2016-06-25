import store from './index'

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!relStore || relStore[relation]) return []

    return entity[relation].map((id) => relStore.get(id.toString()).toJS())
}

export function fromArray(array) {
    return array.reduce((acc, item) => {
        return {...acc, [item.id]: item}
    }, {})
}

export function toArray(object) {
    return Object.keys(object).map((id) => object[id])
}

// export function newIntId(storeName) {
//     const targetStore = store.getState()[storeName]
//     if (!targetStore) throw Error(`Store ${storeName} is undefined`)
//
//     const keys = Object.keys(targetStore)
//     if (!keys.length) return 0
//
//     const maxId = Math.max(...keys)
//     if (isNaN(maxId)) throw Error('MaxId is not integer number')
//     return maxId + 1
// }
