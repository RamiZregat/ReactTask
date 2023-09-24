import { configureStore, combineReducers } from "@reduxjs/toolkit";
import projectsReducer from "../reducers/projectsReducer";
import appReducer from "../reducers/appReducer";
import appPersistReducer from "../reducers/appPersistReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",

  version: 1,

  storage,

  blacklist: ["projects", "sidebar"], // What you don't wanna to persist

  whitelist: ["appPersistReducer"], // What you want to persist
};

const rootReducer = combineReducers({
  projectsReducer,
  appReducer,
  appPersistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// had to set serializableCheck to false because react persist has non-serializable values in the store

export default store;

export const persistor = persistStore(store);

// It's the default store setup,it's a bit shorter and easier to read, and also that you get good default behavior out of the box.
// configureStore adds some middlewares by default such as redux-thunk.
