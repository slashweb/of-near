import React, { Fragment } from 'react';
import Navbar from './layout/Navbar';

import Home from './pages/Home'
import MultiStepForms from './pages/MultiStepForms';
import BlogArticle from './pages/BlogArticle';
import Details from './pages/Details';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Box } from '@chakra-ui/react';
export const Router = () => {
    return (
        <>
            <Navbar  />
            {/* <Router>
                <Box>
                  <Link to="/">Inicio </Link>
                    <Link to="/multistepforms">Multi Step Forms </Link>
                    <Link to="/blogarticle">Blog Article</Link>
                    <Link to="/details">Details</Link>
                </Box>
                <Routes>
                    <Route path="/" element={<Home />} >
                    </Route>
                    <Route path="/multistepforms" element={<MultiStepForms />}> MultiStepForms
                    </Route>
                    <Route path="/blogarticle" element={<BlogArticle />}> Blog Article
                    </Route>
                    <Route path="/details" element={<Details />}>
                        Details
                    </Route>
                </Routes>
            </Router> */}
        </>
    )
} 