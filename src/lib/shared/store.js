import { writable } from "svelte/store"
import { db } from "./firebase"

export const user = writable({})

export const recommends = writable([])
export const newDisneys = writable([])
export const originals = writable([])
export const trending = writable([])
export const movies = writable([])

db.collection('movies').onSnapshot(snapshot => {
    snapshot.docs.map(doc => {
        movies.update(data => [...data, {id: doc.id, ...doc.data()}])
        switch(doc.data().type) {
            case 'recommend' :
                recommends.update(data => [...data, {id: doc.id, ...doc.data()}])
                break;

            case 'new' :
                newDisneys.update(data => [...data, {id: doc.id, ...doc.data()}])
                break;

            case 'original' :
                originals.update(data => [...data, {id: doc.id, ...doc.data()}])
                break;

            case 'trending' :
                trending.update(data => [...data, {id: doc.id, ...doc.data()}])
                break;
        }
    })
})