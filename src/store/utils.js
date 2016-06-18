import store from './index'

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!relStore || relStore[relation]) return []

    return relStore.filter((relEntity) => entity[relation].includes(relEntity.id))
}
