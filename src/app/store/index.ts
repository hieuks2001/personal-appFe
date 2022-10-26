import {
  combineReducers,
  configureStore,  
} from "@reduxjs/toolkit";
import authReducer from '../../modules/Auth/slices'
const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
