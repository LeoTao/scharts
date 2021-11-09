export interface IXAxis {
  type?: string;
  data: string[];
}

export interface IYAxis {
  type: string;
}

export interface ISeries {
  data: number[];
  type?: string;
}

export interface IOption {
  xAxis: IXAxis;
  yAxis: IYAxis;
  series: ISeries[];
}