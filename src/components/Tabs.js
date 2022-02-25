import '../style/banner.css'

function Tabs() {
    const tabs = ['recipes', 'planner']

    return (
        <div className='mp-banner-tabs'>
            <span className='mp-tabs'>
                Recipes
            </span>
            <span className='mp-tabs'>
                Planner
            </span>
        </div>
    )
}

export default Tabs