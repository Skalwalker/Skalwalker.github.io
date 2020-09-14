import React, { useRef, useEffect } from 'react'

const Canvas = (props: any) => {
  
  const canvasRef = useRef(document.createElement("canvas"))
  
  let skills = [
    {
      name: 'skill1',
      pos: [100, 100],
      drawLinesTo: ['skill2', 'skill3'],
    }, {
      name: 'skill2',
      pos: [50, 200],
      drawLinesTo: []
    }, {
      name: 'skill3',
      pos: [150, 200],
      drawLinesTo: []
    }
  ];

  let dragging = false;
  let position = [0, 0];
  let previous_position = [0, 0];
  let drag_position = [0, 0];
  let zoom = 1;

  document.addEventListener('mousedown', e => {
    dragging = true;
    previous_position[0] = position[0];
    previous_position[1] = position[1];
    drag_position[0] = e.clientX;
    drag_position[1] = e.clientY;
  });

  document.addEventListener('mousemove', e => {
    if (dragging) {
      position[0] = previous_position[0] - (drag_position[0] - e.clientX);
      position[1] = previous_position[1] - (drag_position[1] - e.clientY);
    }
  })

  document.addEventListener('mouseup', e => {
    dragging = false;
  })
  
  document.addEventListener('wheel', e => {
    zoom = zoom * (1 + (-e.deltaY / 50));
  });

  const draw = (ctx: any, frameCount: any, canvas: any) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(position[0], position[1]);
    ctx.scale(zoom, zoom);
    
    for (const skill of skills) {
      ctx.fillStyle = '#000000';
      for (const to of skill.drawLinesTo) {
        const to_skill = skills.find(skill => skill.name == to);
  
        if (to_skill) {
          ctx.beginPath();
          ctx.moveTo(skill.pos[0], skill.pos[1]);
          ctx.lineTo(to_skill.pos[0], to_skill.pos[1]);
          ctx.stroke();
        }
      }
  
      ctx.fillStyle = '#e0e0e0';
      ctx.fillRect(skill.pos[0] - 16, skill.pos[1] - 16, 32, 32);
      ctx.fillStyle = '#000000';
      ctx.strokeRect(skill.pos[0] - 16, skill.pos[1] - 16, 32, 32);
   }
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId: any
    
    //Our draw came here
    const render = () => {
      draw(context, frameCount, canvas)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas