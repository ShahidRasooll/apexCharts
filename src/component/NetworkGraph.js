import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const NetworkGraph = ({ data, width, height }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data) return;

        const svg = d3.select(svgRef.current);


        const nodes = data.nodes;
        const links = data.links;

        const simulation = d3
            .forceSimulation(nodes)
            .force('link', d3.forceLink(links).id((d) => d.id))
            .force('charge', d3.forceManyBody().strength(-800))
            .force('center', d3.forceCenter(width / 2, height / 2));

        const link = svg
            .selectAll('.link')
            .data(links)
            .enter()
            .append('line')
            .attr('class', 'link')
            .attr('stroke', '#68BDD6')
            .attr('stroke-width', 1);

        const linkLabels = svg
            .selectAll('.link-label')
            .data(links)
            .enter()
            .append('g')
            .attr('class', 'link-label-group');

        linkLabels
            .append('rect')
            .attr('class', 'label-background')
            .attr('x', -20)
            .attr('y', -10)
            .attr('width', 30)
            .attr('height', 20)
            .attr('fill', 'white');

        linkLabels
            .append('text')
            .attr('class', 'label-text')
            .attr('dy', 5)
            .style('text-anchor', 'middle')
            .text((d) => d.label)
            .each(function (d) {
                const textWidth = this.getBBox().width;
                const textHeight = this.getBBox().height;

                d3.select(this.parentNode)
                    .select('.label-background')
                    .attr('x', -textWidth / 2)
                    .attr('width', textWidth)
                    .attr('height', textHeight);

                const fontSize = Math.min(12, (30 / textWidth) * 12);
                d3.select(this).style('font-size', `${fontSize}px`);
            });

        const node = svg
            .selectAll('.node')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('class', 'node')
            .attr('r', 20)
            .attr('fill', '#68BDD6');

        const nodeLabels = svg
            .selectAll('.node-label')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node-label-group');

        nodeLabels
            .append('rect')
            .attr('class', 'label-background')
            .attr('x', -20)
            .attr('y', 10)
            .attr('width', 40)
            .attr('height', 20)
            .attr('fill', '#DEF8FF');

        nodeLabels
            .append('text')
            .attr('class', 'label-text')
            .attr('dy', 24)
            .style('text-anchor', 'middle')
            .text((d) => d.label)
            .each(function (d) {
                const textWidth = this.getBBox().width;
                const textHeight = this.getBBox().height;

                d3.select(this.parentNode)
                    .select('.label-background')
                    .attr('x', -textWidth / 2)
                    .attr('width', textWidth)
                    .attr('height', textHeight);

                const fontSize = Math.min(12, (40 / textWidth) * 12);
                d3.select(this).style('font-size', `${fontSize}px`);
            }
            );

        simulation.on('tick', () => {
            link
                .transition() // Apply a transition
                .duration(80) // Set the duration of the transition in milliseconds
                .attr('x1', (d) => d.source.x)
                .attr('y1', (d) => d.source.y)
                .attr('x2', (d) => d.target.x)
                .attr('y2', (d) => d.target.y);

            linkLabels
                .transition()
                .duration(80)
                .attr('x', (d) => (d.source.x + d.target.x) / 2)
                .attr('y', (d) => (d.source.y + d.target.y) / 2);

            node
                .transition()
                .duration(80)
                .attr('cx', (d) => d.x)
                .attr('cy', (d) => d.y)
                .attr('r', 8);

            nodeLabels
                .transition()
                .duration(80)
                .attr('transform', (d) => `translate(${d.x},${d.y})`);

            linkLabels
                .transition()
                .duration(80)
                .attr('transform', (d) => `translate(${(d.source.x + d.target.x) / 2},${(d.source.y + d.target.y) / 2})`);
        });
    }, [data, width, height]);

    return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default NetworkGraph;
