let dim=600;
let es=3;               //array element spacing
let elements=dim/es;    
let arr=[],arr2=[],arr3=[],arr4=[];
let a=0;
let birdPos=0, flap=true, spawn;
let temp=0;

function setup() {
    createCanvas(dim, dim);
    
    //grass array
    for(let i=0;i<elements;i++){
    arr[i]=random(6.2,7);
    }
    
     //trees array
    for(let i=0;i<elements;i++){
        arr4[i]=random(0,10);
    }
    
    //front mountain array
    for(let i=0;i<elements;i++){
        if(i==0){
            arr2[0]=random(9.6,10.4);
        }else if(i<=elements/4){
            arr2[i]=arr2[i-1]+0.2;
        }else if(i>elements/4 && i<=elements/2){
            arr2[i]=arr2[i-1]-0.2;
        }else if(i>elements/2 && i<=elements/1.2){
            arr2[i]=arr2[i-1]+0.2;
        }else if(i>elements/1.2 && i<=elements/1){
            arr2[i]=arr2[i-1]-0.4;
        }
    }
    //back mountain array
    for(let i=0;i<elements;i++){
        if(i==0){
            arr3[0]=random(17.6,18.4);
        }else if(i<=elements/4){
            arr3[i]=arr3[i-1]-0.2;
        }else if(i>elements/4 && i<=elements/2){
            arr3[i]=arr3[i-1]+0.2;
        }else if(i>elements/2 && i<=elements/1.2){
            arr3[i]=arr3[i-1]-0.2;
        }else if(i>elements/1.2 && i<=elements/1){
            arr3[i]=arr3[i-1]+0.4;
        }
    }
}

function draw() {
    //background color
    background(131,189,229,255);
    
    //code for the sun 
    let alpha=random(60,80);
    let alpha2=random(22,35);
    let alpha3=random(55,75);
    let alphaSun=random(200,255); 
    //inner ring
    fill(255,137,81,alpha3);
    ellipse(dim/4*3,dim/4,dim/8);
    //middle ring
    fill(251,211,55,alpha);
    ellipse(dim/4*3,dim/4,dim/5);
    //outer ring
    fill(244,255,51,alpha2);
    ellipse(dim/4*3,dim/4,dim/3);
    //sun inner core
    fill(240,216,79);
    ellipse(dim/4*3,dim/4,dim/12);
    
    //code for bird 2 from the top 
    stroke(0);
    line(a+8,dim/7,a+13,dim/7+5-birdPos);
    stroke(0,0,0,150);
    line(a+5,dim/7,a+13,dim/7);
    line(a+6,dim/7-1,a+12,dim/7-1);
    if(birdPos<dim/60 && flap==true){
        birdPos++;
        if (birdPos>=dim/60){
            flap=false;
        }
    }
    if(birdPos>0 && flap==false){
        birdPos--;
        if(birdPos<=0){
            flap=true;
        }
    }
    a++;
    if(a>dim){
        a=0;
    }
    //code for bird1
    stroke(0);
    line(a,dim/8,a+5,dim/8+5-birdPos);
    stroke(0,0,0,120);
    line(a-3,dim/8,a+5,dim/8);
    line(a-2,dim/8-1,a+4,dim/8-1);
    if(birdPos<dim/60 && flap==true){
        birdPos++;
        if (birdPos>=dim/60){
            flap=false;
        }
    }
    if(birdPos>0 && flap==false){
        birdPos--;
        if(birdPos<=0){
            flap=true;
        }
    }
    a++;
    if(a>dim){
        a=0;
    }
    //code for bird 3
    stroke(0);
    line(a-10,dim/6,a-5,dim/6+5-birdPos);
    stroke(0,0,0,180);
    line(a-11,dim/6,a-3,dim/6);
    line(a-10,dim/6-1,a-4,dim/6-1);
    if(birdPos<dim/60 && flap==true){
        birdPos++;
        if (birdPos>=dim/60){
            flap=false;
        }
    }
    if(birdPos>0 && flap==false){
        birdPos--;
        if(birdPos<=0){
            flap=true;
        }
    }
    a++;
    if(a>dim){
        a=0;
    }
    
    
    //code for the back mountains
    for(let i=0;i<arr3.length;i++){
        fill(28*3,0,0,170);
        noStroke();
        rect(i*es,dim,5,arr3[i]*(-dim/60));
    }
    
    temp=arr3[0];
    for(i=0;i<arr3.length;i++){
        arr3[i]=arr3[i+1];
    }
    arr3[arr3.length-1]=temp;
    
    //code for the front mountains
    for(let i=0;i<arr2.length;i++){
        fill(28*3,0,0,225);
        noStroke();
        rect(i*es,dim,5,arr2[i]*(-dim/60));
    }
    
    temp=arr2[0];
    for(i=0;i<arr2.length;i++){
        arr2[i]=arr2[i+1];
    }
    arr2[arr2.length-1]=temp;
    
    
    //code for the trees
    for(let i=0;i<arr4.length;i++){
        if ((arr4[i]>4.5 && arr4[i]<4.6)||(arr4[i]>8.5 && arr4[i]<8.6)){
            fill(255,0,0);
            noStroke();
            //rectMode(CENTER);
            rect(i*es,dim,dim/90,10*(-dim/60));
            fill(0,255,0);
            ellipse(i*es,dim/1.199,20,30);
        }
    }
    for(i=0;i<arr4.length;i++){
        arr4[i]=arr4[i+1];
        arr4[arr4.length-1]=random(0,10);
    }

    //code for the grass
    for(let i=0;i<arr.length;i++){
        fill(28*3,200,0);
        noStroke();
        rect(i*es,dim,5,arr[i]*(-dim/60));
    }
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
        arr[arr.length-1]=random(6.2,7);
    }
    
}//function draw ends


//create grass irregularities using mouse press
/*function mousePressed(){
    for(let i=0;i<elements;i++){
    arr[i]=random(10,12);
    }
}*/

