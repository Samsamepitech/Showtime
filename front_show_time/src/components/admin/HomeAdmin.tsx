import "../../style/Adminstyle/HomeAdmin.css"
import FeaturedInfo from "./featuredInfo/FeaturedInfo"
import Chart from "./charts/Chart"
import WidgetSmall from "./widgetSmall/WidgetSmall"
import WidgetLarge from "./widgetLarge/WidgetLarge"
import { render } from "@testing-library/react";
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';




export default function HomeAdmin() {

  return (
    <div className="home">
      
      <FeaturedInfo />
      <Chart />

      <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarge />
        </div>
    </div>


  )
}
