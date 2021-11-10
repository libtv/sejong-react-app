import { combineReducers } from "redux";
import bizUrlSelector from "./bizUrlSelector";
import ibizReducer from "./ibizReducer";
import menuSelector from "./menuSelector";

import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

// localStorage에 저장하고 싶으면 import storage from 'redux-persist/lib/storage
// session Storage에 저장하고 싶으면 import storageSession from 'redux-persist/lib/storage/session

const persistConfig = {
    key: "root",
    storage: storageSession,
    whitelist: ["ibizReducer"],
    // blacklist -> 그것만 제외합니다
};

export default function reducer() {
    const rootReducer = combineReducers({ bizUrlSelector, menuSelector, ibizReducer });
    return persistReducer(persistConfig, rootReducer);
}
