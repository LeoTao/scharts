import { Line } from "./chart/line";
import * as d3 from "d3";
import { IOption } from "./types/line";

export default class Scharts {
  ref: HTMLDivElement;
  config: IOption;
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;

  init(ref: HTMLDivElement) {
    this.ref = ref;
    return this;
  }

  setOption(config: IOption) {
    this.config = config;
    this.svg = d3.select(this.ref)
      .append("svg")
        .attr("width", '100%')
        .attr("height", '100%');
    this.renderLines();
  }

  renderLines() {
    new Line(this.ref, this.svg, this.config);
  }
}