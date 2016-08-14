// Accept hot module reloading
if (process.env.NODE_ENV !== 'production') {
	if (module.hot) {
		module.hot.accept()
	}
}

import * as Utils from './utils'

Object.assign(window, Utils)
