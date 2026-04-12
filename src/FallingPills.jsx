import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const FallingPills = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    // 1. Destructure Matter.js modules
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    // 2. Create the engine and world
    const engine = Engine.create();
    engineRef.current = engine; // Save reference for external interactions
    const world = engine.world;

    // 3. Create the renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false, // Set to true to see the physics skeletons
        background: '#00000000'
      }
    });

    Render.run(render);

    // 4. Create the runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 5. Build boundaries (Ground, Left Wall, Right Wall)
    const ground = Bodies.rectangle(400, 600, 800, 10, { isStatic: true });
    const leftWall = Bodies.rectangle(0, 300, 10, 1000, { isStatic: true });
    const rightWall = Bodies.rectangle(800, 300, 10, 1000, { isStatic: true });
    Composite.add(world, [ground, leftWall, rightWall]);

    // 6. Function to generate a "Pill"
    const createPill = (x, y) => {
      const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF8C42', '#A29BFE'];
      // const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomColor = '#ffffff20';;
      
      // A pill is just a rectangle with heavily chamfered (rounded) corners
      return Bodies.rectangle(x, y, 60, 24, {
        chamfer: { radius: 12 }, // Radius should be half the height
        restitution: 0.6,        // Bounciness
        friction: 0.1,
        render: { fillStyle: randomColor }
      });
    };

    // 7. Spawn a batch of initial pills
    const initialPills = [];
    for (let i = 0; i < 60; i++) {
      // Stagger them randomly on the X and Y axis above the screen
      const x = Math.random() * 700 + 50;
      const y = Math.random() * -1000 - 50;
      initialPills.push(createPill(x, y));
    }
    Composite.add(world, initialPills);

    // 8. Add mouse interaction so you can drag the pills around
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse; // Keep the mouse in sync with the renderer

    // 9. Cleanup function (Crucial for React Strict Mode)
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  // Function to drop a single new pill via button click
  const dropPill = () => {
    if (engineRef.current) {
      const x = Math.random() * 700 + 50;
      const newPill = Matter.Bodies.rectangle(x, -50, 60, 24, {
        chamfer: { radius: 12 },
        restitution: 0.6,
        render: { fillStyle: '#FFFFFF' } // White pill for manual drops
      });
      Matter.Composite.add(engineRef.current.world, newPill);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <button 
        onClick={dropPill} 
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4ECDC4',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Drop Pill
      </button>
      {/* The canvas will be injected into this div */}
      <div ref={sceneRef} style={{ borderRadius: '12px', overflow: 'hidden' }} />
    </div>
  );
};

export default FallingPills;