import React, { useRef, useEffect } from 'react'

const Canvas = (props: any) => {

    const canvasRef = useRef(document.createElement("canvas"))

    function drawDiamond(context: any, x: any, y: any, width: any, height: any, text: any){
        context.save();
        context.strokeStyle = "#FF0000";
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - width / 2, y + height / 2);
        context.lineTo(x, y + height);
        context.lineTo(x + width / 2, y + height / 2);
        context.closePath();
        context.fillStyle = "#81a6de";
        context.fill();
        context.restore();
        context.font = "24px sans-serif";
        context.textAlign = "center";
        context.fillText(text, x, y+(height/5));
    }

    function circle(context: any, x:any, y:any, radius: any, text: any) {
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.font = "15px sans-serif";
      context.textAlign = "center";
      context.fillText(text, x, y);
      context.stroke();
    }

    function drawStroke(context: any, x: any, y:any, x_to: any, y_to: any) {
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x_to, y_to);
      context.stroke(); // Draw it
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
      const w = ctx.canvas.width;
      const h = ctx.canvas.height;

      const circlesArray = [];

      ctx.canvas.onmousemove = function(e: any) {
        console.log(e.clientY)
        console.log(e.clientX)
      }

      ctx.clearRect(0, 0, w, h);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(position[0], position[1]);
      ctx.scale(zoom, zoom);
      ctx.lineWidth = "1";

      ctx.shadowOffsetX = 10;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "black";

      drawDiamond(ctx,  w/2,      -40,     400, 400, "Machine Learning");
      drawDiamond(ctx, (w/2)+400, h/3,     400, 400, "Web Dev");
      drawDiamond(ctx, (w/2)-400, h/3,     180, 180, "Data Bases");
      drawDiamond(ctx, (w/2)-400, h/3+220, 180, 180, "Others");
      drawDiamond(ctx, (w/2)-290, h/3+110, 180, 180, "App Dev");
      drawDiamond(ctx, (w/2)-510, h/3+110, 180, 180, "Project Manage");
      
      ctx.shadowOffsetX = 0;
      ctx.shadowBlur = 0;

      circle(    ctx, w/2,     h/2+120, 30, "Python")
      drawStroke(ctx, w/2+30,  h/2+120, w/2+200, h/2+120);
      drawStroke(ctx, w/2+200, h/2+120, w/2+230, h/2+100);
      drawStroke(ctx, w/2,     h/2+120+30, w/2, h/2+210);
      
      circle(    ctx, w/2,     h/2+240, 30, "C/C++")
      drawStroke(ctx, w/2+30,  h/2+240, w/2+120, h/2+180);
      drawStroke(ctx, w/2+120, h/2+180, w/2+170, h/2+180);

      drawStroke(ctx, w/2-30,  h/2+240, w/2-120, h/2+180);
      drawStroke(ctx, w/2-120, h/2+180, w/2-170, h/2+180);

      // Right Side
      circle(    ctx, w/2+200, h/2+180, 30, "JS")
      drawStroke(ctx, w/2+200+30, h/2+180, w/2+360, h/2+310)
      drawStroke(ctx, w/2+360, h/2+310, w/2+520, h/2+160)
      drawStroke(ctx, w/2+360, h/2+310, w/2+520, h/2+160)
      
      circle(    ctx, w/2+400, h/2+220, 30, "Vue")
      drawStroke(ctx, w/2+400, h/2+272, w/2+400, h/2+220+30)
      
      circle(    ctx, w/2+460, h/2+160, 30, "React")
      drawStroke(ctx, w/2+460, h/2+160+30, w/2+460, h/2+215)

      circle(    ctx, w/2+520, h/2+100, 30, "BStrap")
      drawStroke(ctx, w/2+520, h/2+100+30, w/2+520, h/2+160)
      
      circle(    ctx, w/2+260, h/2+100, 30, "Dash")
      
      circle(    ctx, w/2+360, h/2+50,  30, "HTML")
      
      circle(    ctx, w/2+440, h/2+50,  30, "CSS")
      
      // Upper Side
      drawStroke(ctx, w/2,     h/2+90, w/2, h/2+30);

      circle(    ctx, w/2,     h/2-30,  30, "SciKit")
      drawStroke(ctx, w/2,     h/2+30, w/2, h/2);

      circle(    ctx, w/2+40,  h/2-90,  30, "Keras")
      drawStroke(ctx, w/2,     h/2+30, w/2+40, h/2-10);
      drawStroke(ctx, w/2+40,  h/2-10, w/2+40, h/2-60);

      circle(    ctx, w/2+140, h/2-150,  30, "MatPlot")
      drawStroke(ctx, w/2+40,  h/2-10, w/2+140, h/2-110);
      drawStroke(ctx, w/2+140, h/2-110, w/2+140, h/2-120);

      circle(    ctx, w/2+80,  h/2-220,  30, "Numpy")
      drawStroke(ctx, w/2+80,  h/2-190, w/2+80, h/2-50);

      circle(    ctx, w/2+40,  h/2-160,  30, "TF")
      drawStroke(ctx, w/2+40,  h/2-130, w/2+40, h/2-120);
      drawStroke(ctx, w/2+40,  h/2-10, w/2+40, h/2-60);

      circle(    ctx, w/2-60,  h/2-90,  30, "Sppining")
      drawStroke(ctx, w/2,     h/2+30, w/2-60, h/2-30);
      drawStroke(ctx, w/2-60,  h/2-30, w/2-60, h/2-60);

      circle(    ctx, w/2-130, h/2-160,  30, "Gym")

      // Left Side
      circle(    ctx, w/2-200, h/2+180, 30, "Swift")
      drawStroke(ctx, w/2-225, h/2+165, w/2-269, h/3+220);

      circle(    ctx, w/2-290, h/3+200, 30, "Xcode")
      
      circle(    ctx, (w/2)-480, h/3+210, 30, "GitHub")
      circle(    ctx, (w/2)-550, h/3+200, 30, "Docker")

      circle(    ctx, (w/2)-430, h/3+90, 30, "MongoDb")
      circle(    ctx, (w/2)-360, h/3+90, 30, "Mysql")
      
      circle(    ctx, (w/2)-400, h/3+300, 30, "Latex")

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