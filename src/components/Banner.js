import logo from '../assets/mp-logo.png'
import '../style/banner.css'

function Banner() {
    return (
        <div className="mp-banner">
            <img className='mp-banner-logo' src={logo} alt='Meal Planner logo' />
            <span className='mp-banner-title'>Meal planner</span>
        </div>
    );
}

export default Banner;
