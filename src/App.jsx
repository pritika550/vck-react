import React from "react";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";




const App = () => {
    return (
       <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/home" element={< HomePage/>}/>
                <Route path="/about" element={< AboutPage/>}/>
                <Route path="/contact" element={< ContactPage/>}/>
                <Route path="/courses" element={< CoursesPage/>}/>
                <Route path="/admission" element={< AdmissionPage/>}/>              
            </Routes>
            <Footer/> 
        </BrowserRouter>
    )
}


export default App;