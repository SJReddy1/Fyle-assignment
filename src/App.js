

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import Footer from "./components/footer";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				
					
					<Routes>
						<Route path="/" element={<HomePage />} />
						</Routes>
					
				
			</BrowserRouter>
		</div>
	);
}

export default App;
