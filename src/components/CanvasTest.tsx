import React, { useRef, useEffect } from 'react'

const Canvas = (props: any) => {

    const canvasRef = useRef(document.createElement("canvas"))

    function drawDiamond(context: any, x: any, y: any, width: any, height: any, text: any){
        context.save();
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - width / 2, y + height / 2);
        context.lineTo(x, y + height);
        context.lineTo(x + width / 2, y + height / 2);
        context.closePath();
        context.fillStyle = "gray";
        context.fill();
        context.restore();
        context.font = "20px Roboto";
        context.textAlign = "center";
        context.fillText(text, x, y+(height/5));
    }

    function circle(context: any, x:any, y:any, radius: any) {
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.stroke();
    }

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

    // document.addEventListener('wheel', e => {
    //   zoom = zoom * (1 + (-e.deltaY / 50));
    // });

    const draw = (ctx: any) => {
      let w = ctx.canvas.width;
      let h = ctx.canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(position[0], position[1]);
      ctx.scale(zoom, zoom);
      ctx.lineWidth = "3";

      drawDiamond(ctx, w/2, -40, 400, 400, "Machine Learning");
      drawDiamond(ctx, (w/2)+400, h/3, 400, 400, "Web Dev");
      drawDiamond(ctx, (w/2)-400, h/3, 180, 180, "Data Bases");
      drawDiamond(ctx, (w/2)-400, h/3+220, 180, 180, "Others");
      drawDiamond(ctx, (w/2)-290, h/3+110, 180, 180, "App Dev");
      drawDiamond(ctx, (w/2)-510, h/3+110, 180, 180, "Project Manage");
      circle(ctx, w/2, h/2+120, 30)
      ctx.beginPath();
      ctx.strokeStyle = "green"; // Green path
      ctx.moveTo(w/2, h/2+120+30);
      ctx.lineTo(w/2, h/2+240-30);
      ctx.stroke(); // Draw it
      ctx.strokeStyle = "black"; // Green path
      circle(ctx, w/2, h/2+240, 30)
      // circle(ctx, 300, 200, 30)
    }

  useEffect(() => {

    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId: any
    const render = () => {
        let navWidth = document.getElementsByClassName("navbar")[0].clientHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - navWidth;
        draw(context)
        animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas style={{overflow: 'hidden'}}ref={canvasRef} {...props}/>
}

export default Canvas
