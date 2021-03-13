import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// save reducer to local storage
const rootPersistConfig = {
	key: 'root',
	storage,
	whitelist: [],
}

// const userPersistConfig = {
//     key: 'user',
//     storage,
//     whitelist: [
//         'token', // save only token to storage
//     ],
// };

const rootReducer = combineReducers({})

export default persistReducer(rootPersistConfig, rootReducer)
