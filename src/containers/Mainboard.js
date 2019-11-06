import React from "react"
import { Line } from "react-chartjs-2"
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips"

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}
const mainboard = ({ datas }) => {
  return <Line data={datas.data} options={options} />
}

export default mainboard
