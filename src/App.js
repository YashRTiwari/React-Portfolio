import './App.css';
import Blogs from './components/blog/Blogs';
import Home from './components/home/Home';
import Header from './components/navbar/Header';

function App() {
  return (
      <div className="App">
            <Header/>
            <Home/>
            <Blogs/>
      </div>
  );
}

export default App;
