import * as d3 from "d3";
import { XAxis } from "../../axis/xAxis";
import { IOption } from "../../types/line";
import './index.less';

export class Line {
  ref: HTMLDivElement;
  xAxis: XAxis;
  config: IOption;
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;

  constructor(ref: HTMLDivElement, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, config: IOption) {
    this.ref = ref;
    this.svg = svg;
    this.config = config;
    this.renderXAxis();
  }

  renderXAxis() {
    this.xAxis = new XAxis(this.ref, this.svg, this.config.xAxis);
  }
}