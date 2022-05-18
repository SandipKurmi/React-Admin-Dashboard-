import "./featuredInfo.css";
import { TrendingDownTwoTone, TrendingUpTwoTone } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -2,415 <TrendingDownTwoTone className="featureIcondown" />
          </span>
        </div>
        <span className="featuredSub">Compered to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1,415 <TrendingDownTwoTone className="featureIcondown" />
          </span>
        </div>
        <span className="featuredSub">Compered to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            +2,415 <TrendingUpTwoTone className="featuredIconup" />
          </span>
        </div>
        <span className="featuredSub">Compered to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
