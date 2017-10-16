// @flow
import { validateConfig } from './validate'
import { createStore } from './store'
import { initPlugins } from './plugins'

/**
 * init
 */
export default (config: $config = {}): void => {
  validateConfig(config)
  if (config.plugins) {
    initPlugins(config.plugins)
  }
  createStore(config.initialState, config.middleware, config.extraReducers)
}
