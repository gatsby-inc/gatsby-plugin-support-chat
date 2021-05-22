import * as flatCache from "flat-cache"
import * as path from "path"
import os from "os"

export function cacheLoad(cacheName) {
  const cachePath = path.join(os.tmpdir(), "./gatsby-plugin-support-chat/")
  return flatCache.load(cacheName, cachePath)
}
