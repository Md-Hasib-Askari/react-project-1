import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";
import Profile from "./components/pages/Profile.jsx";
import Projects from "./components/pages/Projects.jsx";
import ProjectDetails from "./components/pages/ProjectDetails.jsx";

function App() {
    const userName = 'Md-Hasib-Askari';
    return (
    <>
        <BrowserRouter>
            <Header />
            <Counter />
            <Routes>
                <Route
                    path='/'
                    element={<Profile userName={userName} />}
                />
                <Route
                    path='/projects'
                    element={<Projects userName={userName} />}
                />
                <Route
                    path='/projects/:name'
                    element={<ProjectDetails userName={userName} />}
                />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App;
