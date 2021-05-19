import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import * as flatCache from 'flat-cache'
import * as path from 'path';

const cacheName: string = "slackCache"
const cachePath = path.resolve("./cache")

let cache = flatCache.load(cacheName, cachePath);

async function setKey(key, value, cacheTime){
  let now = new Date().getTime()
  let expire = cacheTime === 0 ? false : cacheTime * 1000 * 60
  cache.setKey(key, {
    expire: expire === false ? false : now + expire,
    data: value
  })
}

async function getKey (key, value) {
  var now = new Date().getTime()
  var value = cache.getKey(key)
  if (value === undefined || (value.expire !== false && value.expire < now)) {
    return undefined
  } else {
    return value.data
  }
}

async function removeKey (key) {
  cache.removeKey(key)
}

async function save () {
  cache.save(true)
}

async function removeCache () {
  flatCache.clearCacheById(cacheName, cachePath)
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
    const threadTs = req.body.message.thread_ts
    const message = req.body.message.text
    if(req.body.subtype ==  'message_replied') {
      await setKey(threadTs, message, 10).then(() => {
        save()
      })
    }else{
      console.log("Didn't process if block")
    }
    return res.status(200).end()
}