// React
import {createRoot} from 'react-dom/client';
import App from './App';
import Home from './pages/Home'
import MultiStepForms from './pages/MultiStepForms'
// NEAR
import {Wallet} from './near-wallet';
import {ChakraProvider} from '@chakra-ui/react'
import { Router } from './router';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import BlogArticle from './pages/BlogArticle';
import Details from './pages/Details';

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({createAccessKeyFor: CONTRACT_ADDRESS})
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Setup on page load
window.onload = async () => {
    const isSignedIn = await wallet.startUp()

    root.render(
        // <App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} />
        
        <ChakraProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/multistepforms" element={<MultiStepForms />}/>
                    <Route path="/blogarticle" element={<BlogArticle />}/> 
                    <Route path="/details" element={<Details />}/>  
                </Routes>
            </Router>
        </ChakraProvider>
    );
}