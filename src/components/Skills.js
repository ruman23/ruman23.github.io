import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import './Skills.css';

export default function Skills() {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const [chartHeight, setChartHeight] = useState(680); // desktop height

  // ---------- data ----------
  const includeRobotics = false;
  const tree = {
    name: 'Technical Skills',
    children: [
      {
        name: 'Programming',
        children: [
          { name: 'Python', level: 'Proficient' },
          { name: 'C++', level: 'Familiar' },
          { name: 'Swift', level: 'Familiar' },
          { name: 'Java', level: 'Familiar' },
          { name: 'JavaScript', level: 'Familiar' },
        ],
      },

      {
      name: 'Languages',
      children: [
        { name: 'Python' },
        { name: 'C++' },
        { name: 'Swift' },
        { name: 'ReactJS' }
      ],
    },
    {
      name: 'Frameworks & Tools',
      children: [
        { name: 'Git' },
        { name: 'Conda' },
        { name: 'Agile (Scrum/Kanban)' },
        { name: 'Jira' },
        { name: 'Confluence' }
      ],
    },
    {
      name: 'Domains',
      children: [
        { name: 'Networking & Real-Time Systems' },
        { name: 'Artificial Intelligence' },
        { name: 'Machine Learning' }
      ],
    },
    {
      name: 'Databases',
      children: [
        { name: 'MongoDB' },
        { name: 'Firebase' },
        { name: 'MySQL' }
      ],
    },
    {
      name: 'Platforms',
      children: [
        { name: 'Linux' },
        { name: 'iOS Development' },
        { name: 'Raspberry Pi' },
        { name: 'NVIDIA Jetson Orin Nano' },
        { name: 'Embedded Systems' }
      ],
    }
    ],
  };
  if (includeRobotics) {
    tree.children.push({
      name: 'Simulation & Autonomous Systems',
      children: [{ name: 'ns-3' }, { name: 'Autoware.AI' }, { name: 'OpenAI Gym' }],
    });
  }

  // ---------- MOBILE (LR, one hidden root, short stems, dot left of text) ----------

const STEM_POS = 0.50; // 0..1 — smaller = fork earlier = shorter parent→branch distance
const TRUNK_X = 20; // x px for the left vertical trunk
const LABEL_GAP = 4;   // px gap between node dot and text

const buildMobileOption = (containerWidth, totalHeight) => {
  // Clone and decorate nodes so categories have vertical labels
  const vTree = JSON.parse(JSON.stringify(tree));
  const decorate = (node, depth = 0) => {
    const hasChildren = Array.isArray(node.children) && node.children.length > 0;
    if (depth === 0) {
      // Root: hide in-series label (we draw a vertical title via graphic)
      node.label = { show: false };
    } else if (hasChildren) {
      // Category: vertical label centered on stem
      node.label = {
        rotate: -90,
        align: 'center',
        verticalAlign: 'middle',
        position: 'right',
        distance: 6,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderColor: 'rgba(255,255,255,0.18)',
        borderWidth: 1,
        padding: [4, 8],
        borderRadius: 8,
        color: '#eaeaea',
        fontSize: 12,
      };
    }
    if (hasChildren) node.children.forEach(ch => decorate(ch, depth + 1));
  };
  decorate(vTree);

  // dynamic right padding so long labels don't get clipped
  const rightPad = Math.min(220, Math.max(96, Math.round(containerWidth * 0.50)));
  const leftPad = 64; // extra left space for vertical banner + category labels

  // layout rows: one series per category for precise vertical spacing
  const cats = tree.children;
  const ROW_GAP = 14;     // px between category rows
  const PAD_T = 10;
  const PAD_B = 100;
  const MIN_ROW_H = 10;  // minimum height per category row

  const rows = cats.length;
  const usableH = Math.max(0, totalHeight - PAD_T - PAD_B - ROW_GAP * (rows - 1));
  const rowH = Math.max(MIN_ROW_H, Math.floor(usableH / rows));

  const ROOT_SYMBOL_SHIFT_X = 2; // shift root dot slightly left to meet connector
  const ROOT_GAP = 1; // px gap between Technical Skills trunk and first horizontal connector
  const CAT_LABEL_OFFSET_X = 10; // px to the right of trunk where vertical category text is centered

  const series = [
    {
      type: 'tree',
      data: [vTree],
      layout: 'orthogonal',
      orient: 'LR',
      top: PAD_T,
      bottom: PAD_B,
      left: 10,
      right: rightPad,
      roam: false,
      expandAndCollapse: false,
      initialTreeDepth: 3,
      edgeShape: 'polyline',
      edgeForkPosition: '25%', // short root→category stems, readable category→leaf
      lineStyle: { color: 'rgba(255,255,255,0.28)', width: 1.2 },
      symbol: 'circle',
      symbolSize: 10,
      labelLayout: { moveOverlap: 'shiftY', hideOverlap: false },
      // Show labels for non-root nodes; root label hidden at node level
      label: {
        position: 'right',
        align: 'left',
        distance: LABEL_GAP,
        color: '#eaeaea',
        fontSize: 12,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderColor: 'rgba(255,255,255,0.18)',
        borderWidth: 1,
        padding: [4, 8],
        borderRadius: 8,
        formatter: p => (p.data && p.data.level ? `${p.name}  [${p.data.level}]` : p.name),
      },
      leaves: {
        label: {
          position: 'right',
          align: 'left',
          distance: LABEL_GAP,
          color: '#eaeaea',
          fontSize: 12,
          backgroundColor: 'rgba(255,255,255,0.06)',
          borderColor: 'rgba(255,255,255,0.18)',
          borderWidth: 1,
          padding: [4, 8],
          borderRadius: 8,
          formatter: p => (p.data.level ? `${p.name}  [${p.data.level}]` : p.name),
        },
      },
      emphasis: { focus: 'descendant' },
      animation: false,
      animationDurationUpdate: 0,
    },
  ];

  // Build graphic overlays: root title, trunk, and vertical category labels + connectors
  const graphics = [];

  // 1) Vertical root title
  graphics.push({
    type: 'text',
    z: 0,
    zlevel: -1,
    left: TRUNK_X - 2,
    top: 'middle',
    rotation: -Math.PI / 2,
    silent: true,
    style: {
      text: 'Technical Skills',
      fontSize: 14,
      fontWeight: 600,
      fill: '#eaeaea',
      textAlign: 'center',
      textVerticalAlign: 'middle',
      backgroundColor: 'transparent',
    },
  });

  return {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item', formatter: '{b}' },
    graphic: [graphics[0]],
    series,
  };
};


  // ---------- init & responsive ----------
  useEffect(() => {
    if (!containerRef.current) return;
    const chart = echarts.init(containerRef.current, null, { renderer: 'canvas' });
    chartRef.current = chart;

    const render = () => {
      const el = containerRef.current;
      if (!el) return;

      // Wait until the element has a real width (fixes first-load overlap)
      const measureAndRender = () => {
        const w = el.clientWidth;
        if (!w) {
          requestAnimationFrame(measureAndRender);
          return;
        }
        const rows = tree.children.reduce((n, c) => n + 1 + (c.children?.length || 0), 0);
        const h = Math.max(1150, rows * 50);
        setChartHeight(h);
        chart.clear();
        chart.setOption(buildMobileOption(w, h), true, false);
        // Force layout after paint
        requestAnimationFrame(() => {
          chart.resize({ width: w, height: h });
        });
      };

      // Defer to next frame to allow CSS to settle
      requestAnimationFrame(measureAndRender);
    };

    render();

    // Re-render on container size changes (prevents initial overlap on first paint)
    const ro = new ResizeObserver(() => {
      render();
    });
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener('resize', render);
    window.addEventListener('load', render);
    window.addEventListener('orientationchange', render);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', render);
      window.removeEventListener('load', render);
      window.removeEventListener('orientationchange', render);
      chart.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="skills">
      <div className="skills-chart" ref={containerRef} style={{ height: `${chartHeight}px` }} />
    </section>
  );
}