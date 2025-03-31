import { combineReducers } from "redux"; // combineReducers - в него передаются наши reducer, он их совмещает и передает в createStorege

// Импортируем все редьюсеры
import clientReducer from "./clientReducer";
import profileReduser from "./profileReducer";

// создаем функцию combineReducers, в которой будут ключи с редьюсерами
const rootReducer = combineReducers({
  clients: clientReducer,
  profile: profileReduser,
});

export default rootReducer;
