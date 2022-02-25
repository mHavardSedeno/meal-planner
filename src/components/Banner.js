import '../style/banner.css'
import Logo from './Logo'
import Tabs from '../components/Tabs'

function Banner() {
    return (
        <div className='mp-banner'>
            <Logo/>
            <Tabs/>
        </div>
    );
}

export default Banner;
