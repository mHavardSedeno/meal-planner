import logo from "../assets/mp-logo-shadow.png";
import '../style/banner.css'

function Logo() {
    return (
        <div className='mp-banner'>
            <img className='mp-banner-logo' src={logo} alt='Meal Planner logo' />
            <span className='mp-banner-title'>Meal planner</span>
        </div>
    )
}

export default Logo