const canvas=document.getElementById("grid")

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.strokeStyle="cyan"

for(let x=0;x<canvas.width;x+=40){

ctx.beginPath()
ctx.moveTo(x,0)
ctx.lineTo(x,canvas.height)
ctx.stroke()

}

for(let y=0;y<canvas.height;y+=40){

ctx.beginPath()
ctx.moveTo(0,y)
ctx.lineTo(canvas.width,y)
ctx.stroke()

}

}

setInterval(draw,100)