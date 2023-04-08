import './App.css';
import logo from './assets/images/logo.png'
import airplane from './assets/images/5776896.png'
import visa from './assets/images/visa.png'
import whatsapp from './assets/images/whatsapp-svgrepo-com (1).svg'
import telegram from './assets/images/telegram.png'
import location from './assets/images/location.png'

function App() {
  return (
    <div className="background">
      <div className="container">
        <img src={logo} alt="" className="img"/>
        <div className="header">
          <div className="title"><i className='bx bx-timer'></i><h5> Горящие туры </h5></div>
          <div className="title title-img"><img src={airplane} alt="airplane"/><h5> Авиабилеты </h5></div>
          <div className="title title-img"><img src={visa} alt="airplane"/><h5> Визы </h5></div>
        </div>
        <div className="container-text">
        </div>
        <div className="links">
          <ul>
            <li className="itemsCenter itemsInBox itemColor w-full gis">
              <div className="box-item">
                <img src={whatsapp} alt="" width={30}/>
                <a href="https://wa.me/+996709750585" className="link"> WhatsApp менеджеру по авиабилетам
                  <p><b>Сауле</b></p>
                </a>
              </div>
              <div className="box-number">num: +996709750585</div>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full gis">
              <div className="box-item">
                <img src={whatsapp} alt="" width={30}/>
                <a href="https://wa.me/+996772750585" className="link">WhatsApp менеджера по турам
                  <p><b>Бексултан</b></p>
                </a>
              </div>
              <div className="box-number">num: +996772750585</div>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full gis">
              <div className="box-item">
                <img src={telegram} alt="" width={30}/>
                <a href="https://t.me/welcomeworld98" className="link">Вступить в телеграмм группу горящих туров
                </a>
              </div>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full gis">
              <img src={location} alt="" width={30}/>
              <a href="https://2gis.kg/bishkek/geo/70000001039684387" className="link">
                <p>Чуй/Советская (Адресс на карте)</p>
              </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor w-full gis">
              <img src={location} alt="" width={30}/>
              <a href="https://2gis.kg/bishkek/geo/70000001067955342" className="link">
                <p> Ахунбаева/Алматинская (Адресс на карте)</p>
              </a>
            </li>
          </ul>
          <footer>
            <p>Работаем круглосуточно 24/7</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

