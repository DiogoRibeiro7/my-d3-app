// Initialize SVG container
const svg = d3.select('#diagram').append('svg')
  .attr('width', 800)
  .attr('height', 600);

// Draw rectangles for Upstream, Inside, and Downstream
const rects = svg.selectAll('rect')
  .data([{ x: 50, y: 50 }, { x: 300, y: 50 }, { x: 550, y: 50 }])
  .enter().append('rect')
  .attr('x', d => d.x)
  .attr('y', d => d.y)
  .attr('width', 200)
  .attr('height', 100)
  .attr('fill', 'lightblue');

// Add labels
const labels = ['Upstream Flow', 'Inside Flow', 'Downstream Flow'];
svg.selectAll('text')
  .data(labels)
  .enter().append('text')
  .attr('x', (d, i) => 150 + i * 250)
  .attr('y', 100)
  .attr('text-anchor', 'middle')
  .text(d => d);

// Draw arrows
const arrows = svg.append('defs').selectAll('marker')
  .data(['end'])
  .enter().append('marker')
  .attr('id', String)
  .attr('viewBox', '0 -5 10 10')
  .attr('refX', 5)
  .attr('refY', 0)
  .attr('markerWidth', 6)
  .attr('markerHeight', 6)
  .attr('orient', 'auto')
  .append('path')
  .attr('d', 'M0,-5L10,0L0,5');

const lines = svg.selectAll('line')
  .data([{ x1: 250, y1: 100, x2: 300, y2: 100 }, { x1: 500, y1: 100, x2: 550, y2: 100 }])
  .enter().append('line')
  .attr('x1', d => d.x1)
  .attr('y1', d => d.y1)
  .attr('x2', d => d.x2)
  .attr('y2', d => d.y2)
  .attr('stroke', 'black')
  .attr('stroke-width', 2)
  .attr('marker-end', 'url(#end)');
