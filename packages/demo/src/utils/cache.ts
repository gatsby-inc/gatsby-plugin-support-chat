
import * as flatCache from 'flat-cache'
import * as path from 'path';

export function cacheLoad(cacheName){
    const cachePath = path.resolve("./.cache")
    return flatCache.load(cacheName, cachePath);
}

const cacheName: string = "events-cache"

let cache = cacheLoad(cacheName);

export async function setKey(key, value){
    cache.setKey(key, value)
}

export async function save() {
    cache.save(true)
}

export async function getKey(key) {
    let value = cache.getKey(key)
    return value
}

export async function getAll(){
    let value = cache.all()
    return value
}
