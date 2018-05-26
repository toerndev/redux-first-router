// @flow
import type { Action } from '../flow-types'

export default ({ cache, action, has }: {action: Action}): void => {
  const env = process.env.NODE_ENV

  if (env === 'development' && !has('pathlessRoute')) {
    throw new Error('[rudy] "pathlessRoute" middleware is required to use "clearCache" action creator.')
  }

  const { invalidator, options } = action.payload

  cache.clear(invalidator, options)
}
