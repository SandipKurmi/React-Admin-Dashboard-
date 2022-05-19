import './home.css'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetsSm from '../../components/widgetSm/widgetSm'
import WidgetsLg from '../../components/widgetLg/widgetLg'

const Home = () => {
    // console.log(userData);
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetsSm />
                <WidgetsLg />
            </div>
        </div>
    )
}

export default Home