import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import PromoCode from './components/PromoCode';

function App() {
  return (
    <div className='wrapper'>
      <div className='mainContainer'>
        <Header/>
        <MainBlock/>
        <PromoCode/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
