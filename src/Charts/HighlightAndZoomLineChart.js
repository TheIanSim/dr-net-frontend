import React, { PureComponent } from 'react';
import {
  Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea,
} from 'recharts';

const data = [
  { name: 4.2019, cost: 4.11, impression: 100, a:2 },
  { name: 5.2019, cost: 2.39, impression: 120, a:3 },
  { name: 6.2019, cost: 1.37, impression: 150, a:4 },
  { name: 7.2019, cost: 1.16, impression: 180, a:5 },
  { name: 8.2019, cost: 2.29, impression: 200, a:6 },
  { name: 9.2019, cost: 3, impression: 499, a:7 },
  { name: 10.2019, cost: 0.53, impression: 50, a:8 },
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = data.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true,
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nhpemhgs/';

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight, data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
    const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);
    const [bottom3, top3] = getAxisYDomain(refAreaLeft, refAreaRight, 'a', 10);

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2,
      top3,
      bottom3,
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom2: 'dataMin+50',
      top3: 'dataMax+10',
      bottom3: 'dataMin+10',
    }));
  }

  render() {
    const {
      data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2,top3,bottom3,
    } = this.state;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none' }}>
        <button
          // href="javascript: void(0);"
          className="btn update"
          onClick={this.zoomOut.bind(this)}
        >
          Zoom Out

        </button>

        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 10, right: 10, left: 50, bottom: 50,
          }}
          onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
          onMouseMove={e => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
          onMouseUp={this.zoom.bind(this)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDataOverflow
            dataKey="name"
            domain={[left, right]}
            type="number"
          />
          <YAxis
            allowDataOverflow
            domain={[bottom, top]}
            type="number"
            yAxisId="1"
          />
          /<YAxis
            orientation="right"
            allowDataOverflow
            domain={[bottom2, top2]}
            type="number"
            yAxisId="2"
          />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
          <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

          {
            (refAreaLeft && refAreaRight) ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />) : null
            }
        </LineChart>

      </div>
    );
  }
}
