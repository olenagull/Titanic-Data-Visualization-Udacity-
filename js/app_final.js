d3.csv("../data/titanicData.csv", function(d) {return d;}, draw);

function draw(data) {

    //D3.js setup code///////////////////////////
    "use strict";      
    var margin = 75;
    var width = 1200 - margin;
    var height = 600 - margin;
          
              
    //Create SVG element///////////////////////////
    var svg = d3.select('#chart')
        .append('svg')
        .attr('width', width+margin)
        .attr('height', height+margin)
        .append('g');
        
    //Create first dimple chart/////////////////////
    var myChart = new dimple.chart(svg,data);
    
    var x = myChart.addCategoryAxis('x', 'AgeGroup'); 
        x.title = 'Age Group'; 
        x.fontSize = '15px'; //maybe change in CSS
        x.addOrderRule('AgeGroup');
    
    var y = myChart.addMeasureAxis('y', 'Count'); 
        y.title = "Passengers Count"; 
        y.fontSize = "15px"; //maybe change in CSS
    
    var s = myChart.addSeries('Survived', dimple.plot.bar); 
        s.addOrderRule('Survived'); 
    
    var l = myChart.addLegend(500, 10, 160, 600, 'right', s);
        l.fontSize = "15px";
    
    myChart.assignColor('Perished', 'darkred');
    myChart.assignColor('Survived', 'darkgreen');
    
    addLabel(s);
    myChart.draw(1000);
    
 //Create function to add labels   
    function addLabel(ser) {
        ser.afterDraw = function(shape,data){
            var s = d3.select(shape);
            var rect = {
                x: parseFloat(s.attr('x')),
                y: parseFloat(s.attr('y')),
                width: parseFloat(s.attr('width')),
                height: parseFloat(s.attr('height'))
            };
            
            svg.append('text')
                .attr('x', rect.x + rect.width / 2)
                .attr('y', rect.y + rect.height / 2 + 3.5)
                .style('text-anchor', 'middle')
                .style('font-size', '15px')
                .style('font-weight', 'bold')
                .style('font-family', 'sans-serif')
                .style('opacity', 0.6)
                .text(data.yValue);
        };
    };
    

//Create function for clicking on buttons
function update(PassengerClass) {
            
  //remove the previous chart
    var removeGroup = svg.selectAll('g');
        removeGroup.remove();
    var removeText = svg.selectAll('text');
        removeText.remove();
         
  
//filter data depending on the clicked button 
            
    if (PassengerClass == 'First') {
        var data_by_class = dimple.filterData(data, 'PassengerClass', 'First') ;
    };
    if (PassengerClass == 'Second') {
        var data_by_class = dimple.filterData(data, 'PassengerClass', 'Second') ;
    };
    if (PassengerClass == 'Third') {
        var data_by_class = dimple.filterData(data, 'PassengerClass', 'Third') ;
    };
    if (PassengerClass == 'Clear') {
        var data_by_class = data;
    };

  
//Create second dimple chart/////////////////////
    var myChart2 = new dimple.chart(svg,data_by_class);
    
    var x = myChart2.addCategoryAxis('x', 'AgeGroup'); 
        x.title = 'Age Group'; 
        x.fontSize = '15px'; 
        x.addOrderRule('AgeGroup');
    
    var y = myChart2.addMeasureAxis('y', 'Count'); 
        y.title = "Passengers Count"; 
        y.fontSize = "15px"; 
    
    var s = myChart2.addSeries('Survived', dimple.plot.bar); 
        s.addOrderRule('Survived'); 
    
    var l = myChart2.addLegend(500, 10, 160, 600, 'right', s);
        l.fontSize = "15px";
    
    myChart2.assignColor('Perished', 'darkred');
    myChart2.assignColor('Survived', 'darkgreen');
    
    addLabel(s);
    myChart2.draw(1000);
              
};      
        
            

//Create buttons
    var buttons = d3.select('#chart')
                    .append('div')
                    .attr('class', 'select_buttons')
                    .selectAll('div')
                    .data([
                        'First',
                        'Second',
                        'Third',
                        'Clear'])
                    .enter()
                    .append('div')
                    .text(function(d) {
                        return d;
                    });

    buttons.on('click', function(d) {
        d3.select('.select_buttons')
                  .selectAll('div')
                  .transition()
                  .duration(100)
                  .style('color', '#004d66')
                  .style('background','#ccf2ff' );

        d3.select(this)
                .transition()
                .duration(100)
				.style('color', 'white')
                .style('background', '#004d66');
        
        update(d)
    });


};

