import { createStore, applyMiddleware, compose, AnyAction } from "redux"
import thunk, { ThunkAction } from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

import reducers from "../../redux/reducers/index"

/**
 * Setup the root state.
 */

// TODO: Check if not persisting cart causes issues
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // Add Redux reducers to be whitelisted here
  whitelist: ["userInfo"], // only reducer added here  will be persisted
}

// TODO: Add "redux-persist" if redux data is needed to be persisted.

const middleware = [thunk]
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, reducers())

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)))

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type AppDispatch = typeof store.dispatch
