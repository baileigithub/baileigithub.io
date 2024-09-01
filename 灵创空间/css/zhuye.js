
var canvas=document.getElementById("canvas")
console.log(canvas)
var ctx=canvas.getContext("2d")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
var points=[]
var live=20
window.addEventListener("mousemove",function(evt){

    for(let i=0;i<5;i++){
        points.push({
            sx:evt.x,
            sy:evt.y,
            vx:0.5-Math.random(),
            vy:0.5-Math.random(),
            life:live,
            color:"255,255,255",
            size:Math.random()*10
        })
    }
})
function drawpoints(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i=0;i<points.length;i++){
         point=points[i]
        ctx.beginPath()
        ctx.arc(point.sx,point.sy,point.size,Math.PI*2,false)
        ctx.fillStyle="rgba("+point.color+","+point.life/live+")"
        ctx.fill()
        point.life--
        if(point.life<=0){
            points.splice(i,1)
        }
        point.sx+=point.vx*5
        point.sy+=point.vy*5
    }
}
setInterval(drawpoints,50)


const arr=['那么，在这个并不算太好的就业环境里',
    '我们又应该如何找到自己的方向,',
    '亦或者是出路呢？',
    '只有提升自己，把自己的技术卷起来',
    '才能够让自己不陷入毕业即失业的地步',
    '在灵创空间中',
    '会有许多大佬解决你的问题',
    '无论你是对深度学习,网络安全,',
    '游戏开发,web前后端等等感兴趣',
    '这里都会给你在这个学校里的最优解',
    '接下来,让我带你认识这个协会的组成',
]
let ul1=document.querySelector('.top .kaichang ul')
let i=0;
let mark=0;
let a=setInterval(function(){
    if(i>=arr.length-1){
        clearInterval(a);
    }
    if(i===3&&mark<=1){
        mark++
        
    }
    else{let li=document.createElement('li')
    li.innerHTML=`${arr[i]}`
    ul1.appendChild(li)
    i++
}
    
},1000)

const brr=['发','展','历','史']
const sk=document.querySelector('.top3 .neirong .banner2 .b1')
let ul2=document.querySelector('.top3 .neirong .banner2 .b1 ul')
let x=0
let b=setInterval(function(){
    console.log(x)
    if(x>=brr.length-1){
    
        clearInterval(b);
    }
    let li=document.createElement('li')
    li.innerHTML=`${brr[x]}`
    ul2.appendChild(li)
    x++
},1000)
