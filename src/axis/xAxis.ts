import * as d3 from "d3";
import { Axis, ScaleBand } from "d3";
import { calculateHeight, calculateWidth } from "../helper/caculate";
import { IXAxis } from "../types/line";

export class XAxis {
  config: IXAxis;
  xScale: ScaleBand<string>;
  xAxis: Axis<string>;
  ref: HTMLDivElement;
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;

  constructor(ref: HTMLDivElement, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, config: IXAxis) {
    this.ref = ref;
    this.svg = svg;
    this.config = config;
    this.renderXAxis();
  }

  setXScale() {
    this.xScale = d3.scaleBand()
      .domain(this.config.data)
      .range([0, calculateWidth(this.ref)]);
  }

  setXAxis() {
    this.xAxis = d3.axisBottom(this.xScale);
  }

  renderXAxis() {
    this.setXScale();
    this.setXAxis();
    this.svg.append('g')
      .call(this.xAxis)
      .attr('transform', `translate(0, ${calculateHeight(this.ref) - 20})`)
      .selectAll('text')
      .attr('text-anchor', 'start')
      .attr('transform', 'rotate(45)')
      .attr('x', 10);
  }
}