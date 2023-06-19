import './App.css';
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
      <div className='footer'>
        <div className='footerText'>
          <p>Продавец ООО «Агроторг», ОГРН 1027809237796, г. Санкт-Петербург, Невский проспект, д. 90/92. Указанное время доставки не включает в себя время на приём, обработку и сбор заказа.<br/>
            Зона и время доставки ограничены. Подробные условия в мобильном приложении «Пятёрочка Доставка» или «Пятёрочка». Реклама.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
