import * as flatCache from "flat-cache"
import * as path from "path"

export function cacheLoad(cacheName) {
  const cachePath = path.join(__dirname, "./.cache")
  console.log({ cachePath, cacheName })
  return flatCache.load(cacheName, cachePath)
}

const cacheName: string = "events-cache"

let cache = cacheLoad(cacheName)

export function setKey(key, value) {
  cache.setKey(key, value)
}

export function save() {
  cache.save(true)
}

export function getKey(key) {
  let value = cache.getKey(key)
  return value
}

export function getAll() {
  let value = cache.all()
  return value
}
