import React from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

interface S { }
interface P {
  dataSource?: any[]
}

class Bar extends React.Component<P, S> {
  render() {
    const cols = {
      sales: {
        tickInterval: 20,
      },
    };
    return (
      <div>
        <Chart height={400} data={this.props.dataSource} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            // crosshairs用于设置 tooltip 的辅助线或者辅助框
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>
      </div>
    );
  }
}

export default Bar;
