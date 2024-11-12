import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<Router className="app-container">
			<Navigation />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/about" element={<About />} />
				{/* <Route path="/projects" element={<Projects />} /> */}
				{/* <Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
