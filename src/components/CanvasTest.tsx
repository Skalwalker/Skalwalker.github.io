import React, { useRef, useEffect } from 'react'
import { languages_field } from '../content/Skills'

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

    function drawRectInfo(ctx: any, x: any, y: any, size: any, width: any, skill: string, changeDir: boolean) {
      ctx.beginPath();
      if (changeDir) {
        size *= -1
        width *= -1
      }
      ctx.rect(x, y, width, size);
      ctx.fillStyle = 'white';
      ctx.fillRect(x, y, width, size);
      ctx.stroke();
      ctx.fillStyle = 'black';
      ctx.textAlign = "start";
      ctx.font = "24px sans-serif";
      if (changeDir) {
        x += width;
        y += size;
      }
      ctx.fillText(languages_field[skill].title, x+10, y+25);
      ctx.font = "15px sans-serif";
      ctx.fillText("LinkedIn: " + languages_field[skill].linkedin, x+10, y+50);
      ctx.fillText("Experience: " + languages_field[skill].years + " ano", x+10, y+70);
      ctx.fillText("Projects: " + languages_field[skill].projects, x+10, y+90);
      ctx.fillText("Self-Assigned: " + languages_field[skill].self_ass, x+10, y+110);
      var lines = languages_field[skill].desc.split('\n');
      for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x+10, y+130+(i*15));
      }
    }

    let dragging = false;
    let position = [0, 0];
    let previous_position = [0, 0];
    let drag_position = [0, 0];
    let zoom = 1;
    let drawInfo = [0, 0]

    // document.addEventListener('mousedown', e => {
    //   dragging = true;
    //   previous_position[0] = position[0];
    //   previous_position[1] = position[1];
    //   drag_position[0] = e.clientX;
    //   drag_position[1] = e.clientY;
    // });

    document.addEventListener('mousemove', e => {
      if (dragging) {
        position[0] = previous_position[0] - (drag_position[0] - e.clientX);
        position[1] = previous_position[1] - (drag_position[1] - e.clientY);
      }
      drawInfo[0] = e.clientX;
      drawInfo[1] = e.clientY;
    })

    // document.addEventListener('mouseup', e => {
    //   dragging = false;
    // })

    const draw = (ctx: any, navWidth: any) => {
      const w = ctx.canvas.width;
      const h = ctx.canvas.height;

      let skillsPositions = [
        {name: 'python', x: w/2, y: h/2+120},
        {name: 'c', x: w/2, y: h/2+240},
        {name: 'javascript', x: w/2+70, y: h/2+180},
        {name: 'vue', x: w/2+250, y: h/2+220},
        {name: 'react', x: w/2+310, y: h/2+160},
        {name: 'bootstrap', x: w/2+370, y: h/2+100},
        {name: 'dash', x: w/2+130, y: h/2+100},
        {name: 'html', x: w/2+210, y: h/2+50},
        {name: 'css', x: w/2+290, y: h/2+50},
        {name: 'scikit', x: w/2, y: h/2-30},
        {name: 'keras', x: w/2+40, y: h/2-90},
        {name: 'matplotlib', x: w/2+140, y: h/2-150},
        {name: 'numpy', x: w/2+80, y: h/2-220},
        {name: 'tensor', x: w/2+40, y: h/2-160},
        {name: 'spinning', x: w/2-60, y: h/2-90},
        {name: 'gym', x: w/2-130, y: h/2-160},
        {name: 'swift', x: w/2-70, y: h/2+180},
        {name: 'xcode', x: w/2-140, y: h/3+210},
        {name: 'git', x: w/2-330, y: h/3+210},
        {name: 'docker', x: w/2-400, y: h/3+200},
        {name: 'mongo', x: w/2-280, y: h/3+90},
        {name: 'mysql', x: w/2-210, y: h/3+90},
        {name: 'latex', x: (w/2)-250, y: h/3+300},
      ]

      ctx.clearRect(0, 0, w, h);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(position[0], position[1]);
      ctx.scale(zoom, zoom);
      ctx.lineWidth = "1";

      ctx.shadowOffsetX = 10;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "black";

      drawDiamond(ctx,  w/2,      -40,     400, 400, "Machine Learning");
      drawDiamond(ctx, (w/2)+250, h/3,     400, 400, "Web Dev");
      drawDiamond(ctx, (w/2)-250, h/3,     180, 180, "Data Bases");
      drawDiamond(ctx, (w/2)-250, h/3+220, 180, 180, "Others");
      drawDiamond(ctx, (w/2)-140, h/3+110, 180, 180, "App Dev");
      drawDiamond(ctx, (w/2)-360, h/3+110, 180, 180, "Project Manage");

      ctx.shadowOffsetX = 0;
      ctx.shadowBlur = 0;

      circle(    ctx, w/2,     h/2+120, 30, "Python")
      drawStroke(ctx, w/2+30,  h/2+120, w/2+80, h/2+120);
      drawStroke(ctx, w/2+80,  h/2+120,  w/2+130-30, h/2+100);
      drawStroke(ctx, w/2,     h/2+120+30, w/2, h/2+210);

      circle(    ctx, w/2,     h/2+240, 30, "C/C++")
      drawStroke(ctx, w/2+30,  h/2+240, w/2+70, h/2+220);
      drawStroke(ctx, w/2+70,  h/2+220, w/2+70, h/2+180+30);

      drawStroke(ctx, w/2-30,  h/2+240, w/2-70, h/2+220);
      drawStroke(ctx, w/2-70, h/2+220, w/2-70, h/2+180+30);

      // Right Side
      circle(    ctx, w/2+70, h/2+180, 30, "JS")
      drawStroke(ctx, w/2+70+30, h/2+180, w/2+230, h/2+305)
      drawStroke(ctx, w/2+230, h/2+305, w/2+370, h/2+160)


      circle(    ctx, w/2+250, h/2+220, 30, "Vue")
      drawStroke(ctx, w/2+250, h/2+284, w/2+250, h/2+220+30)

      circle(    ctx, w/2+310, h/2+160, 30, "React")
      drawStroke(ctx, w/2+310, h/2+160+30, w/2+310, h/2+222)

      circle(    ctx, w/2+370, h/2+100, 30, "BStrap")
      drawStroke(ctx, w/2+370, h/2+100+30, w/2+370, h/2+160)

      circle(    ctx, w/2+130, h/2+100, 30, "Dash")

      circle(    ctx, w/2+210, h/2+50,  30, "HTML")

      circle(    ctx, w/2+290, h/2+50,  30, "CSS")

      // Upper Side
      drawStroke(ctx, w/2,     h/2+90, w/2, h/2+30);

      circle(    ctx, w/2,     h/2-30,  30, "SciKit")
      drawStroke(ctx, w/2,     h/2+30, w/2, h/2);

      circle(    ctx, w/2+40,  h/2-90,  30, "Keras")
      drawStroke(ctx, w/2,     h/2+30, w/2+40, h/2-10);

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
      circle(    ctx, w/2-70, h/2+180, 30, "Swift")
      drawStroke(ctx, w/2-90, h/2+159, w/2-120, h/3+231);

      circle(    ctx, (w/2)-140, h/3+210, 30, "Xcode")

      circle(    ctx, (w/2)-330, h/3+210, 30, "GitHub")
      circle(    ctx, (w/2)-400, h/3+200, 30, "Docker")

      circle(    ctx, (w/2)-280, h/3+90, 30, "MongoDb")
      circle(    ctx, (w/2)-210, h/3+90, 30, "Mysql")

      circle(    ctx, (w/2)-250, h/3+300, 30, "Latex")

      // Draw Windows Info
      var skill;
      var changeDir;
      for (skill of skillsPositions) {
        let d = 30*30 - ((drawInfo[0]-skill.x) * (drawInfo[0]-skill.x) + (drawInfo[1]-navWidth-skill.y) * (drawInfo[1]-navWidth-skill.y))
        if (d >= 0) {
          var size = 250;
          var width = 300;
          changeDir = false;
          if (skill.y+size >= h || skill.x+width >= w) {
            changeDir = true;
          }
          drawRectInfo(ctx, skill.x, skill.y, size, width, skill.name, changeDir)
          changeDir = false;
        }
      }
    }

  useEffect(() => {

    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d')

    let frameCount = 0
    let animationFrameId: any
    const render = () => {
        var navWidth = document.getElementsByClassName("navbar")[0].clientHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - navWidth;
        draw(context, navWidth);
        animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas style={{overflow: 'hidden'}}ref={canvasRef} {...props}/>
}

export default Canvas;
