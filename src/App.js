import { Provider } from "react-redux";
import "./App.css";
import ToDoList from "./component/ToDoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {store} from "./redux/store";

function App() {
	return (
		<div>
			<Provider store={store}>
				<ToDoList />
				<ToastContainer theme="colored" />
			</Provider>
		</div>
	);
}

export default App;
