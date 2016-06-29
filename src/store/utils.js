import store from './index'

export function getRelation(state, entity, relation) {
    const relStore = state[relation]

    if (!relStore.get('entities').size) return []

    return entity[relation].map((id) => {
        const key = id.toString();
        const hasEntity = relStore.hasIn(['entities', key])
        if (hasEntity) return relStore.getIn(['entities', key]).toJS()
    })
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
