import { createStore, applyMiddleware, compose } from 'redux'
import reducer                                   from './reducers'

const enhancer = compose(
  window.devToolsExtension && window.devToolsExtension()
)

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default)
    });
  }
  return store;
}
