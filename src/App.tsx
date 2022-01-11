import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/shop' element={<ShopPage />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
