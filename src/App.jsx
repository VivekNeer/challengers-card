import './App.css'
import hamburger from './assets/hamburger.svg'
import cart from './assets/cart.svg'
import fourdots from './assets/fourdots.svg'
import search from './assets/search.svg'
import tick from './assets/tick.svg'


function App() {

  return (
    <>
      <div className='navbar'>
        <div className='fourdots'>
          <img src={fourdots} alt='hamburger'></img>
        </div>
        <div className='office'>
          <button className='b1'>Office</button>
        </div>
        <div className='windows'>
          <button className='b1'>Windows</button>
        </div>
        <div className='support'>
          <button className='b1'>Support</button>
        </div>
        <div className='microsoft'>
          <button className='b1'>Microsoft 365</button>
        </div>
        <div className='hamburger'>
          <img src={hamburger} alt='hamburger'></img>
        </div>
        <div className='search'>
          <img src={search} alt='hamburger'></img>
        </div>
        <div className='cart'>
          <img src={cart} alt='hamburger'></img>
        </div>
      </div>
      <div className='cards'>
        <div className='card one'>
          <div className='upperHalf'>
            <div className='planName'>
              <p className='plan'>Basic Plan</p>
            </div>
            <div className='price'>
              <p className='dollar'>$10</p>
              <div className='duration'> 
                <p>per user</p>
                <p>per month</p>
              </div>
            </div>
            <div className='disc'>Basic features for upto 10 users</div>
            <div className='buttons'>
              <button className='btn yellow'>Get Started</button>
              <button className='btn'>Chat To Sales</button>
            </div>
          </div>
          <div className='lowerHalf'>
            <div>
              <p className='features'>FEATURES</p>
              <p className='disc'>Everything in basic plan...</p>
            </div>
            <div className='list'>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Access to basic features</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Basic navigation and analytics</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Up to 10 individual users</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>20 GB individual data each user</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Basic chat and email support</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card two'>
        <div className='upperHalf'>
            <div className='planName'>
              <p className='plan'>Business Plan</p>
            </div>
            <div className='price'>
              <p className='dollar'>$20</p>
              <div className='duration'> 
                <p>per user</p>
                <p>per month</p>
              </div>
            </div>
            <div className='disc'>Basic features for upto 20 users</div>
            <div className='buttons'>
              <button className='btn'>Get Started</button>
              <button className='btn yellow'>Chat To Sales</button>
            </div>
          </div>
          <div className='lowerHalf'>
            <div>
              <p className='features'>FEATURES</p>
              <p className='disc'>Everything in basic plan...</p>
            </div>
            <div className='list'>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>200+ integrations</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Advanced reporting and analytics</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Up to 20 individual users</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>40 GB individual data each user</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Priority chat and customer support</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card three'>
        <div className='upperHalf'>
            <div className='planName'>
              <p className='plan'>Enterprise Plan</p>
            </div>
            <div className='price'>
              <p className='dollar'>$40</p>
              <div className='duration'> 
                <p>per user</p>
                <p>per month</p>
              </div>
            </div>
            <div className='disc'>Advanced features & Unlimited users</div>
            <div className='buttons'>
              <button className='btn yellow'>Get Started</button>
              <button className='btn'>Chat To Sales</button>
            </div>
          </div>
          <div className='lowerHalf'>
            <div>
              <p className='features'>FEATURES</p>
              <p className='disc'>Everything in Business plan...</p>
            </div>
            <div className='list'>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Advanced hosting functionality</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Auto log and data registry</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Unlimited individual users</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Unlimited individual data</p>
              </div>
              <div className='feat'>
                {/* <img className='tick' src={tick} alt='tick mark'></img> */}
                <p className='disc'>Personalized and priority support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
