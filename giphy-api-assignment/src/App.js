import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import Trending from './components/Trending';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <h1>GIPHY</h1>
      <GifCard />
      <h1>Gif<br></br>Searcher</h1>
      <SearchField /> 
      <h1>Trending</h1>
      <Trending />
    </div>
  ); 
}
export default App;