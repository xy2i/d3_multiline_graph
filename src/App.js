import React, { Component } from 'react';

// import './DataCompression.scss';
import * as d3 from 'd3';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

var filterGraphDataArray = [
  {"name":"FD203","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:55:55Z"},{"name":"FD203","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:20:55Z"},{"name":"FD203","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:30:55Z"},
    {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T17:48:35Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T18:00:35Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:04:15Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T17:49:35Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:24:55Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:03:55Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:04:55Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:03:15Z"},
  {"name":"FD2033333","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:23:35Z"},
  {"name":"FD2033333","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:55:55Z"},
  {"name":"FD2033333","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:20:55Z"},
  {"name":"FD2033333","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:30:55Z"},
  {"name":"FD2033333","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:52:35Z"},
  {"name":"FD2033333","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:54:35Z"},
  {"name":"FD2033333","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:50:35Z"},
  {"name":"FD2033333","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:53:35Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T17:27:15Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T19:43:15Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T17:58:35Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T18:05:15Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T18:05:35Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T19:41:35Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T19:42:35Z"},
  {"name":"FD2033333","value":"0.000405","unit":"m3/s","date":"2020-07-13T18:09:35Z"}]

var graphdata = [
  // {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:52:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T20:04:55Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T20:23:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:49:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:54:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:58:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T18:05:15Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T19:42:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T19:55:55Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T20:04:15Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T19:20:55Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T20:03:55Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T20:24:55Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:27:15Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:48:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:50:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T17:53:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T18:00:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T18:05:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T18:09:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T19:30:55Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T19:41:35Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T19:43:15Z"},
//  {"name":"FDA50","value":"0","unit":"m3","date":"2020-07-13T20:03:15Z"},
 //FD203
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T17:48:35Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T18:00:35Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:04:15Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T17:49:35Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:24:55Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:03:55Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:04:55Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:03:15Z"},
 {"name":"FD203","value":"0.000403333","unit":"m3/s","date":"2020-07-13T20:23:35Z"},
 {"name":"FD203","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:55:55Z"},
 {"name":"FD203","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:20:55Z"},
 {"name":"FD203","value":"0.000406667","unit":"m3/s","date":"2020-07-13T19:30:55Z"},
 {"name":"FD203","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:52:35Z"},
 {"name":"FD203","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:54:35Z"},
 {"name":"FD203","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:50:35Z"},
 {"name":"FD203","value":"0.000408333","unit":"m3/s","date":"2020-07-13T17:53:35Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T17:27:15Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T19:43:15Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T17:58:35Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T18:05:15Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T18:05:35Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T19:41:35Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T19:42:35Z"},
 {"name":"FD203","value":"0.000405","unit":"m3/s","date":"2020-07-13T18:09:35Z"},
 //Combustor Temp
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T19:55:55Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T20:03:15Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T20:04:15Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:27:15Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:48:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:49:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:52:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T19:41:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T19:42:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T20:03:55Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:53:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T18:05:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T18:09:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:50:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:54:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T17:58:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T18:00:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T18:05:15Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T19:20:55Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T19:30:55Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T19:43:15Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T20:04:55Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T20:23:35Z"},
//  {"name":"Combustor Temp","value":"0","unit":"K","date":"2020-07-13T20:24:55Z"},
 //PD306
 {"name":"PD306","value":"-83","unit":"Pa","date":"2020-07-13T17:48:35Z"},
 {"name":"PD306","value":"-83","unit":"Pa","date":"2020-07-13T17:50:35Z"},
 {"name":"PD306","value":"-83","unit":"Pa","date":"2020-07-13T17:49:35Z"},
 {"name":"PD306","value":"-83","unit":"Pa","date":"2020-07-13T17:27:15Z"},
 {"name":"PD306","value":"-116","unit":"Pa","date":"2020-07-13T19:20:55Z"},
 {"name":"PD306","value":"-116","unit":"Pa","date":"2020-07-13T19:30:55Z"},
 {"name":"PD306","value":"-116","unit":"Pa","date":"2020-07-13T19:41:35Z"},
 {"name":"PD306","value":"-116","unit":"Pa","date":"2020-07-13T19:42:35Z"},
 {"name":"PD306","value":"-116","unit":"Pa","date":"2020-07-13T19:43:15Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T17:58:35Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T17:53:35Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T17:52:35Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T17:54:35Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T18:00:35Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T18:05:35Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T18:09:35Z"},
 {"name":"PD306","value":"-114","unit":"Pa","date":"2020-07-13T18:05:15Z"},
 {"name":"PD306","value":"-88","unit":"Pa","date":"2020-07-13T20:03:15Z"},
 {"name":"PD306","value":"-88","unit":"Pa","date":"2020-07-13T20:03:55Z"},
 {"name":"PD306","value":"-88","unit":"Pa","date":"2020-07-13T20:23:35Z"},
 {"name":"PD306","value":"-88","unit":"Pa","date":"2020-07-13T19:55:55Z"},
 {"name":"PD306","value":"-88","unit":"Pa","date":"2020-07-13T20:24:55Z"},
 {"name":"PD306","value":"-88","unit":"Pa","date":"2020-07-13T20:04:15Z"},
 {"name":"PD306","value":"-88","unit":"Pa","date":"2020-07-13T20:04:55Z"}
 ]

 export default class DataCompressionComp extends Component {
  constructor(props){
    super(props);
    this.state={
      currentZoomState:null,
      checkedYAxisArray: [],
      graphdata: graphdata

    }
  }
  join(m) {
    return m.split(' ').join('_');
  }
  metricBucket = [];
  metricUnit = {};
  metricObject = {};
  svg;
  lines;
  width;
  height;
  w;
  h;
  margin = {};
  g;
  data;
  parseTime;
  formatTime;
  color = [
    '#1f77b4',
    '#ad2191',
    '#2ca02c',
    '#a89f23',
    '#ff7f0e', 
    '#6740db',
    '#d62728',
    '#ff9896',
    '#9467bd',
    '#c5b0d5',
    '#8c564b',
    '#c49c94',
    '#e377c2',
    '#f7b6d2',
    '#7f7f7f',
    '#c7c7c7',
    '#bcbd22',
    '#dbdb8d',
    '#17becf',
    '#9edae5'
  ];
  componentDidMount() {
    sessionStorage.setItem("checkedYAxisArrayName", JSON.stringify([]))
    // this.metricBucket = [
    //   "Alarm Status",
    //   "Booster Case Temperature",
    //   "Booster Current",
    //   "Booster Power",
    //   "Booster Speed",
    //   "Pump Power",
    //   "Pump Current",
    //   "Total Running Time"
    // ];
    this.metricBucket = [...new Set(this.state.graphdata.map(x => x.name))];
    this.svg = d3.select('#comparisonChartSVG');
    this.svgAxis = d3.select('#comparisonAxisSVG');
    // this.width = this.svg.attr("viewBox").split(" ")[2];
    // this.height = this.svg.attr("viewBox").split(" ")[3];
    this.width = parseInt(this.svg.attr('width'));
    this.widthAxis = parseInt(this.svgAxis.attr('width'));
    this.height = parseInt(this.svg.attr('height'));
    this.heightAxis = parseInt(this.svgAxis.attr('height'));
    this.margin = {
      left: 1,
      top: 20,
      dynamicRight: this.metricBucket.length * 50 + 80,
      right: 1,
      bottom: 100,
      axisLeft: 0,
      axisRight: 10
    };
    this.svgAxis.attr('width', this.margin.dynamicRight);
    this.w = this.width - this.margin.left - this.margin.right;
    this.h = this.height - this.margin.top - this.margin.bottom;
    this.wAxis = this.widthAxis - this.margin.AxisLeft - this.margin.axisRight;
    this.hAxis = this.heightAxis - this.margin.top - this.margin.bottom;
    // this.parseTime = d3.timeParse('%d-%m-%Y');
    this.parseTime = d3.timeParse('%Y-%m-%dT%H:%M:%SZ');
    this.formatTime = d3.timeFormat("%d-%b %H:%M");
    // this.color = d3.schemeCategory10;
    this.addChart();
  }
  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.graphdata !== this.props.graphdata) {
      this.addChart();
    // }
  }
  addChart() {
    this.svg.selectAll('*').remove();
    this.svgAxis.selectAll('*').remove();
    this.g = this.svg
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ', ' + this.margin.top + ')'
      );

    this.svg.append('defs').append('clipPath').attr('id', 'cut_off')
            .append('rect').attr('x', 0).attr('y', 0).attr('width', 1200).attr('height', 430);

    this.gAxis = this.svgAxis
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.axisLeft + ', ' + this.margin.top + ')'
      );

    this.metricObject.xScale = d3
      .scaleTime()
      .rangeRound([this.margin.left, this.width - this.margin.right]);

    this.metricBucket.forEach(m => {
      const p = this.join(m);
      this.metricObject['yScale_' + p] = d3
        .scaleLinear()
        .rangeRound([this.h, 0]);
      this.metricObject['line_' + p] = d3
        .line()
        .x(d => this.metricObject.xScale(d.newDate))
        .y(d => this.metricObject['yScale_' + p](d.value));
    });

    let joinYValue = this.metricBucket[0].split(" ")

    const dateExt = [];
    this.metricBucket.forEach(m => {
      const p = this.join(m);
      this.metricObject['data_' + p] = this.state.graphdata.filter(
        d => d.name === m
      );
      if (this.metricObject['data_' + p].length > 0) {
        this.metricUnit[p] = this.metricObject['data_' + p][0].unit;
        this.metricObject['data_' + p].forEach(d => {
          d.newDate = this.parseTime(d.date);
        });
        this.metricObject['data_' + p].sort((a, b) => a.newDate - b.newDate);
        dateExt.push(
          d3.extent(this.metricObject['data_' + p].map(d => d.newDate))
        );
        this.metricObject['yScale_' + p].domain(
          d3.extent(this.metricObject['data_' + p].map(d => +d.value))
        );
      }
    });
    this.metricObject.xScale.domain(d3.extent(dateExt.flat()));

    //ZOOM
    if(this.state.currentZoomState)  {
      if(JSON.parse(sessionStorage.getItem("checkedYAxisArray")) && JSON.parse(sessionStorage.getItem("checkedYAxisArray")).length == 0){
        const newXScale = this.state.currentZoomState.rescaleX(this.metricObject.xScale) 
        this.metricObject.xScale.domain(newXScale.domain())
      }
      for(let x=0; x < this.metricBucket.length; x++){
        if(JSON.parse(sessionStorage.getItem("checkedYAxisArray")) && JSON.parse(sessionStorage.getItem("checkedYAxisArray")).includes(x)){

          // const newXScale = this.state.currentZoomState.rescaleX(this.metricObject.xScale)
          // this.metricObject.xScale.domain(newXScale.domain())
 
          let joinYValue = this.metricBucket[x].split(" ")
          let joinWithUnderScore = joinYValue.join("_")

          const newYScale = this.state.currentZoomState.rescaleY(this.metricObject[`yScale_${joinWithUnderScore}`])
          this.metricObject[`yScale_${joinWithUnderScore}`].domain(newYScale.domain())
        }
      }
    }  

    const zoomBehavior = d3.zoom()
      //.scaleExtent([0.1, 5])
      .translateExtent([
        [0, 0],
        [this.width, this.height]
      ])
      .on("zoom", () => {
        const zoomState = d3.event.transform;
        d3.select('#lines').attr('transform', zoomState)
        this.setState({currentZoomState:zoomState})

        for(let i=0; i<document.querySelectorAll("circle").length ; i++){
          if(JSON.parse(sessionStorage.getItem("checkedYAxisArray")) && JSON.parse(sessionStorage.getItem("checkedYAxisArray")).includes(i)){
            let axisToZoomY = document.querySelectorAll("circle")[i]
            axisToZoomY.setAttribute("fill", "#007BFF")
          }
        }
      });

    this.svg.call(zoomBehavior);
    this.addGrid();
    this.updateAxes();
  }

  addGrid() {
    const p = this.join(this.metricBucket[0]);
    const yAxis = d3.axisRight(this.metricObject['yScale_' + p]);
    this.g
      .append('g')
      .attr('class', 'axis-grid')
      .attr(
        'transform',
        'translate(' + (this.width - this.margin.right) + ', 0)'
      )
      .call(yAxis.tickSize(-this.w))
      .selectAll('text')
      .text('');

    const xAxis = d3.axisBottom(this.metricObject.xScale);

    this.g
      .append('g')
      .attr('class', 'axis-grid')
      .attr('transform', 'translate(0,' + this.h + ')')
      .call(xAxis.tickSize(-this.h))
      .selectAll('text')
      .text('');

  }

  testFunction = (e) => {
    e.preventDefault()
    console.log("=========== objFilterdValue called =============")

  }

  filterGraphDataArrayFunction = (e) => {
    e.preventDefault();
    filterGraphDataArray = this.state.graphdata.filter(obj => {
      
      console.log("=========== objFilterdValue called 2222 =============")
      let checkedYAxisArrayName =  JSON.parse(sessionStorage.getItem("checkedYAxisArrayName"))
      for(let i=0; i< JSON.parse(sessionStorage.getItem("checkedYAxisArrayName")).length; i++){
        if(checkedYAxisArrayName.includes(obj.name)){
          // console.log("================= filter graph data ================= 000000000000",document.getElementById("minValue"+checkedYAxisArrayName[i]))
  
          // let filteredYaxis = []
          // for(let j=0; j<this.props.graphdata.length; j++){
            if((obj.value > parseInt(document.getElementById("minValue"+obj.name).value))
             && (obj.value < parseInt(document.getElementById("maxValue"+obj.name).value))
             ){
              console.log("================= filter graph data =================",obj.name, filterGraphDataArray, filterGraphDataArray.length, graphdata.length, document.getElementById("minValue"+obj.name).value, parseInt(document.getElementById("maxValue"+obj.name).value), typeof(parseInt(document.getElementById("maxValue"+obj.name).value)))
  
              return true
            }
          // }
          // objFilteredValue[checkedYAxisArrayName[i]] = filteredYaxis
  
        }
        else {
          return true
        }
      }
      // return true
  
    })
    this.setState({graphdata: filterGraphDataArray})
  }


  updateAxes() {
    this.metricObject.xAxis = d3.axisBottom(this.metricObject.xScale);
    // const dateRange = this.metricObject.xScale.domain();
    // const dateRangeDiff = dateRange[1].getDate() - dateRange[0].getDate();
    this.g
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + this.h + ')')
      .call(
        this.metricObject.xAxis
          .tickFormat(this.formatTime)
          .tickPadding(5)
          .ticks(6)
      );

    this.metricBucket.map((m, i) => {
      const p = this.join(m);
      const axis = (this.metricObject['yAxis_' + p] = d3.axisRight(
        this.metricObject['yScale_' + p]
      ));

    this.gAxis
      .append("g")
      .attr(
        'transform',
        'translate(' +
          // (this.width - this.margin.right + i * 50 - 5) +
          (this.margin.axisRight + i * 40 + 10) +
          ', ' +
          (this.hAxis - 440) +
          ') rotate(90)'
      )  
      .append('circle')
      .attr("class", "isZoomFalse")
      .attr("id", "circle"+this.metricBucket[i])
      .attr('cx', '-1')
      .attr("cy", "8")
      .attr("r", "8")
      .attr("stroke", "#007BFF")
      .attr("stroke-width", "2")
      .attr("fill", "white")
      .on("click", (d, j, n) => {
        const node = d3.select(n[j]);
        const zoom = node.classed('isZoom');
        if(!zoom){
          if(JSON.parse(sessionStorage.getItem("checkedYAxisArray")) && JSON.parse(sessionStorage.getItem("checkedYAxisArray")).length > 0){
            sessionStorage.setItem("checkedYAxisArray", JSON.stringify([...JSON.parse(sessionStorage.getItem("checkedYAxisArray")), i]))
            sessionStorage.setItem("checkedYAxisArrayName", JSON.stringify(Array(new Set([...JSON.parse(sessionStorage.getItem("checkedYAxisArrayName")), this.metricBucket[i]]))))

          }
          else{
            sessionStorage.setItem("checkedYAxisArray", JSON.stringify([i]))
            sessionStorage.setItem("checkedYAxisArrayName", JSON.stringify([this.metricBucket[i]]))

          }
          node
          .attr("stroke", "#007BFF")
          .attr("stroke-width", "2")
          .attr("fill", "#007BFF")
          .attr("class", "isZoomTrue")
        // if ((document.querySelector("#circlePD306") == null) || (document.querySelector("#circlePD306") && document.querySelector("#circlePD306").getAttribute("fill") == "#007BFF")){
        // if((document.querySelector("#formPD306") == null) && (document.querySelector("#formPD306") && document.querySelectorAll("#formPD306").length != 1)){
        if(true){
          let divZoom =  document.getElementById("y-zoom-min-max")  
          let formElement =  document.createElement("form");
          // formElement.setAttribute("onSubmit",{this.filterGraphData})
          formElement.setAttribute("id","form"+this.metricBucket[i])
          formElement.addEventListener("submit", this.filterGraphDataArrayFunction )

          let heading5 = document.createElement("h5");
          let h5textnode = document.createTextNode(this.metricBucket[i]);

          let labelMin = document.createElement("label");
          labelMin.setAttribute("for", "minValue"+this.metricBucket[i])
          let labelMinTextNode = document.createTextNode("Min:");
          labelMin.appendChild(labelMinTextNode)

          let inputMin = document.createElement("input")
          inputMin.setAttribute("style", 'width: 87px; margin-left: 2px')
          inputMin.setAttribute("type", "text")
          inputMin.setAttribute("id", "minValue"+this.metricBucket[i])
          inputMin.setAttribute("name", "minValue"+this.metricBucket[i])


          let labelMax = document.createElement("label");
          labelMax.setAttribute("for", "maxValue"+this.metricBucket[i])
          let labelMaxTextNode = document.createTextNode("Max:");
          labelMax.setAttribute("style", "margin-left: 4px")
          labelMax.appendChild(labelMaxTextNode)

          let inputMax = document.createElement("input")
          inputMax.setAttribute("style", 'width: 87px; margin-left: 2px')
          inputMax.setAttribute("type", "text")
          inputMax.setAttribute("id", "maxValue"+this.metricBucket[i])
          inputMax.setAttribute("name", "maxValue"+this.metricBucket[i])

          let inputSubmit = document.createElement("input")
          inputSubmit.setAttribute("style", "margin-left: 4px")
          // inputSubmit.setAttribute("onClick", "#")
          inputSubmit.setAttribute("type", "submit")
          inputSubmit.setAttribute("value", "Plot")


          heading5.appendChild(h5textnode)
          formElement.appendChild(heading5)
          formElement.appendChild(labelMin)
          formElement.appendChild(inputMin)
          formElement.appendChild(labelMax)
          formElement.appendChild(inputMax)
          formElement.appendChild(inputSubmit)

          divZoom.appendChild(formElement)
        }

        }
        if(zoom){
          if(JSON.parse(sessionStorage.getItem("checkedYAxisArray")) && JSON.parse(sessionStorage.getItem("checkedYAxisArray")).length > 0){
            let filterCheckedYAxisArray = JSON.parse(sessionStorage.getItem("checkedYAxisArray")).filter(x => x != i)
            let filterCheckedYAxisArrayName = JSON.parse(sessionStorage.getItem("checkedYAxisArrayName")).filter(x => x != this.metricBucket[i])

            sessionStorage.setItem("checkedYAxisArray", JSON.stringify(filterCheckedYAxisArray))
            sessionStorage.setItem("checkedYAxisArrayName", JSON.stringify(filterCheckedYAxisArrayName))

          }

          node
          .attr("stroke", "#007BFF")
          .attr("stroke-width", "2")
          .attr("fill", "white")    
          .attr("class", "isZoomFalse")

          let formElementToRemove = document.getElementById("form"+this.metricBucket[i])
          formElementToRemove.remove()
        }
        node.classed('isZoom', !zoom);
      });

      this.gAxis
      .append()

      this.gAxis
        .append('g')
        .attr('class', 'y-axis ' + p)
        .attr(
          'transform',
          // "translate(" + (this.width - this.margin.right + i * 50) + ", 0)"
          'translate(' + (this.margin.axisRight + i * 40) + ', 0)'
        )
        .call(axis.ticks(6));

      this.gAxis
        .append('g')
        .attr('class', 'axis-label')
        .attr(
          'transform',
          'translate(' +
            // (this.width - this.margin.right + i * 50 - 5) +
            (this.margin.axisRight + i * 40) +
            ', ' +
            (this.hAxis + 10) +
            ') rotate(35)'
        )
        // .attr('transform', 'translate(' + (this.width - this.margin.right + i * 50 - 10) + ', 0) rotate(90)')
        .append('text')
        .text(m + ' (' + this.metricUnit[p] + ')')
        .append('input')
        .attr('type', 'checkbox')
        .attr('text-anchor', 'start')
        .style('font-size', '10px')
        .style('fill', '#444');



      d3.selectAll(
        '.y-axis.' + p + ' path.domain, .y-axis.' + p + ' .tick line'
      ).attr('stroke', this.color[i]);

      return m;
    });

    this.lines = this.svg
    .append('g')
    .attr('id', 'lines')
    .attr(
      'transform',
      'translate(' + this.margin.left + ', ' + this.margin.top + ')'
    )

    this.lines.attr('clip-path', 'url(#cut_off)');

    // Tooltip
    const tooltip = d3.select('#tooltip')
    const tooltipLine = d3.select('#lines').append('line').attr('id', 'tooltipLine');

    let tooltipBox;
    const drawTooltip = () => {
      // Date under the cursor.
      const cursorDate = this.metricObject.xScale.invert(d3.mouse(tooltipBox.node())[0])

      // Get the dates from the ticks.
      let tickDates = this.metricObject.xAxis.scale().ticks().sort(function(a, b) {
            var distancea = Math.abs(cursorDate - a);
            var distanceb = Math.abs(cursorDate - b);
            return distancea - distanceb; // sort a before b when the distance is smaller
        });

      // Create a bisector, finding the neareast value.
      const bisect = d3.bisector(d => d.newDate).left

      const bisectorValues = []
      this.metricBucket.forEach((m, i) => {
        const p = this.join(m);
        const bisector = bisect(this.metricObject['data_' + p], cursorDate)
        bisectorValues.push(bisector)
      });

      // let tooltipString;
      // if(this.metricObject['data_FDA50'][bisectorValues[0]] === undefined){
      //   tooltipString = `div style="color: white">No data</div>`
      // } else {
      tooltipLine
        .attr('stroke', 'black')
        .attr('x1', this.metricObject.xScale(tickDates[0])) 
        .attr('x2', this.metricObject.xScale(tickDates[0]))
        .attr('y1', 0)
        .attr('y2', this.height)

      // Create the tooltip.
      const xFormat = d3.timeFormat("%d-%b %H:%M");
      let tooltipString = `<div style="color: black, font-weight: bold">${xFormat(cursorDate)}</div>`
      this.metricBucket.forEach((m, i) => {
        const p = this.join(m);
        const yFormat = this.metricObject['yScale_' + p].tickFormat()
        tooltipString += `
        <div style="color: ${this.color[i]}">${p}: ${yFormat(this.metricObject['data_' + p][bisectorValues[i]] && this.metricObject['data_' + p][bisectorValues[i]].value)}</div>
        `
      });
    // }

      tooltip.html(tooltipString)
        .style('display', 'block')
        .style('left', `${d3.event.pageX + 20}px`)
        .style('top', `${d3.event.pageY - 120}px`)
    }

    const removeTooltip = ()=> {
      if (tooltip) tooltip.style('display', 'none');
      if (tooltipLine) tooltipLine.attr('stroke', 'none');
    }

    tooltipBox = this.svg.on("mousemove", drawTooltip)
    .on('mouseout', removeTooltip);
           
    this.updateChart();
  }

  updateChart() {
    this.metricBucket.forEach((m, i) => {
      const p = this.join(m);
      
      this.lines.append('path')
        .datum(this.metricObject['data_' + p])
        .attr('d', this.metricObject['line_' + p])
        .attr('fill', 'none')
        .attr('stroke', this.color[i])
    });
  }

  filterGraphData = (e) => {
    e.preventDefault();
    console.log("============== in filter graph data ==========================")
    let allZoomYAxisCirlce = JSON.parse(sessionStorage.getItem("checkedYAxisArrayName"))
    for(let i=0; i<allZoomYAxisCirlce.length; i++){
      let selectZoomCircle = document.getElementById(allZoomYAxisCirlce[i])
      const node = d3.select(selectZoomCircle);

      node
      .attr("stroke", "#007BFF")
      .attr("stroke-width", "2")
      .attr("fill", "#007BFF")
      .attr("class", "isZoomTrue")
      console.log("=========is queryselector all ============",selectZoomCircle, "allzoomycircle ====>", allZoomYAxisCirlce, "allzoomcircleLength ====>>>>",allZoomYAxisCirlce.length)


      // selectZoomCircle.setAttribute("fill", "#007BFF")
    }



    
      let objFilteredValue = {}



      // this.setState({graphdata: filterGraphDataArray})
  }

  render() {
    // console.log("==== circle Selection ========",JSON.parse(sessionStorage.getItem("checkedYAxisArrayName")).includes("PD306") )
    return (
      <React.Fragment>
      <div className="graphDC">
        <div className='d-flex'>
          <div id='comparisonChart'>
            <svg
              id='comparisonChartSVG'
              // width='1050'
              width='850'
              height='550'
              // viewBox="0 0 800 300"
              ref={node => (this.node = node)}
            ></svg>
          </div>
          <div id='comparisonAxis' style={{display: "flex"}}>
            <svg
              id='comparisonAxisSVG'
              width='600'
              height='550'
              // viewBox="0 0 800 300"
              ref={node => (this.axisnode = node)}
            ></svg>
            <div id="minMaxContainer">         
              <div id="y-zoom-min-max">
              {/* <form onSubmit={this.filterGraphData}>
                <h5>FD2003</h5>
                <label for="fname">Min:</label>
                <input  style={{"width": "87px", "marginLeft": "2px"}} type="text" id="fname" name="fname"/>
                <label style={{"marginLeft": "10px"}} for="lname">Max:</label>
                <input style={{"width": "87px", "marginLeft": "2px"}} type="text" id="lname" name="lname"/>
                <input style={{"marginLeft": "10px"}} type="submit" value="Plot"></input>
            </form> */}
              </div>
              {/* <input class="plotMinMax" onClick={this.filterGraphData} style={{"marginLeft": "10px"}} type="submit" value="Plot"></input> */}
            </div>
            {/* {
            JSON.parse(sessionStorage.getItem("checkedYAxisArray")) && JSON.parse(sessionStorage.getItem("checkedYAxisArray")).length > 0
            ? */}
            {/* <input class="plotMinMax" onClick={this.filterGraphData} style={{"marginLeft": "10px"}} type="submit" value="Plot"></input> */}
            {/* :
            ""
            } */}

          </div>
          <div id='tooltip' style={{position: 'absolute', 
                                    backgroundColor: '#e5e5e5', 
                                    // opacity: '0.9', 
                                    padding: '0.5rem', 
                                    borderRadius: '5px', 
                                    // boxShadow: '0 0 10px 0 rgba(0,0,0,.15)', 
                                    pointerEvents: 'none', display:'none'}} 
                            ref={node => (this.tooltipNode = node)}></div>
        </div>
        <div>
        <Button variant="default" style={{marginTop: "-91px", marginLeft: "19px"}} disabled>
        <span
                className=' fa fa-search-plus fa-1x'
            ></span> <Badge variant="light">Double Click</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="default
          " style={{marginTop: "-91px", marginLeft: "19px"}} disabled>
          <span
                className=' fa fa-search-minus fa-1x'
            ></span> <Badge variant="light">Shift + Double Click</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </div>

        </div>
      </React.Fragment>
    );
  }
}