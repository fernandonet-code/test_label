import ContactInfo from "./components/header/ContactInfo";
import NavBar from "./components/header/NavBar";
import ContentVideo from "./components/header/ContentVideo";
import Services from "./components/body/Services";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container-fluid text-center">
				<div className="row gradient-custom pb-4 vh-100">
					<ContactInfo />
					<NavBar />
					<ContentVideo />
				</div>
				<div className="row vh-100">
					<Services/>
				</div>
			</div>
		</div>
	);
}

export default App;
