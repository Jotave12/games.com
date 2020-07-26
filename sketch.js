let rate=30;
let cont=910;
let contS=0;

var x = 255;
var y = 225;
var xjogador = 340;
var yjogador = 440;

var xObstaculo1 = 120;
var yObstaculo1 = 140;
var rObstaculo1 = 90;
var valorObstaculo1;
    
var xObstaculo2 = 350;
var yObstaculo2 = 140;
var rObstaculo3 = 90;
var valorObstaculo2;
    
var xObstaculo3 = 580;
var yObstaculo3 = 140;
var rObstaculo3 = 90;
var valorObstaculo3;
    
var rjogador = 30;

var opcao = 1;
var tela = 0;

var n1;
var n2;

var pontos=0;
var certo=0;

function reset(){
  xjogador=340;
  yjogador=460;
  fill(0)
  image( img3, xjogador, yjogador, 30, 30);
}
function sorteio() {
  n1 = Math.floor(random(1,20));
  n2 = Math.floor(random(-20,20));
  certo = parseInt(random(1,3.9));
  
  if(certo==3) {
     valorObstaculo3=n1+n2;
     valorObstaculo2=Math.floor(random(-20,50));
     valorObstaculo1=Math.floor(random(-20,50));
  }
  if(certo==2) {
     valorObstaculo2=n1+n2;
     valorObstaculo1=Math.floor(random(-20,50));
     valorObstaculo3=Math.floor(random(-20,50));
    }
  if(certo==1) {
      valorObstaculo1=n1+n2;
      valorObstaculo3=Math.floor(random(-20,50));
      valorObstaculo2=Math.floor(random(-20,50));
    }
}

function setup(){
  createCanvas(700, 500);
  frameRate(rate);
  sorteio();
  reset();
    let img;
}
function preload() {
  img = loadImage('IMG_0548.jpg');
  img1 = loadImage('WhatsApp Image 2020-07-20 at 09.21.56.jpeg');
  //som1= loadSound('som1.wav.wav');
  img2= loadImage('IMG_0549 (1).jpg');
  img3= loadImage('ast.jpg');
  //jogo1= loadSound('jogo.wav');
  som2=loadSound('win.mp3')
}
function draw(){
  background(img);
  if(tela == 0){
    menu();
  }
  if(tela == 1){
    
    fase1();
    tempo();
    
  }
  if(tela == 2){
    instrucoes();
  }
  if(tela == 3){
    creditos();
  }
  if(tela==4){
   gameover(); 
  }
  if(tela==5){
    win();
  }
}
function menu(){
  stroke(255);
  fill(0,0,0,0);
  rect(x, y, 175, 50);
  
  textSize(25);
  fill(240);
  text('INICIAR', 297, 258);
  textSize(25);
  fill(240);
  text('INSTRUÇÕES', 262, 330);
  textSize(25);
  fill(240);
  text('CRÉDITOS', 278, 400);
}
 function keyPressed(){
  
   if(tela == 0){
     if(key == "ArrowUp" && y>225){
    y=y-70
  opcao=opcao-1;
  console.log(opcao)
  }
if(key == "ArrowDown" && y<300){
  y=y+70
  opcao=opcao+1;
  console.log(opcao)
}
if (key == "Enter"){
    //som1.play();
    tela=opcao;
    }
 }
   if(tela == 4 || tela == 2 || tela == 3 || tela == 1 || tela == 5){
      if(key == "Escape"){
        tela = 0;
        sorteio();
        reset();
        cont=910;
        pontos=0;
        
     } 
  }
}
function fase1(){
  
  background(img2);
  fill(255);
  text('Pontos: '+pontos, 500, 30);
  stroke(255, 0, 0);
  fill(0);
  ellipse(xObstaculo1, yObstaculo1, 180,180);
  
  fill(255);
  text(valorObstaculo1,105,148);
  fill(0)
  ellipse(xObstaculo2, yObstaculo2, 180,180);
  
  fill(255);
  text(valorObstaculo2,335,148);
  fill(0)
  ellipse(xObstaculo3, yObstaculo3, 180,180);
  
  fill(255);
  text(valorObstaculo3,565,148);
  
  noStroke();
  textSize(32);
  fill(255);
  if(n2<0){
  text(n1+" "+n2+" = ?", 30, 30);
  }
  if(n2>0){
    text(n1+" + "+n2+" = ?", 30, 30);
  }
  fill(0)
  image(img3, xjogador, yjogador,30,30);
  
     if(keyIsDown(UP_ARROW) && yjogador>=70){
     yjogador=yjogador-15;
     }
  if(keyIsDown(DOWN_ARROW) && yjogador<=445){
     yjogador=yjogador+15;
     }
  if(keyIsDown(LEFT_ARROW) && xjogador>=20){
     xjogador=xjogador-15;
   }
   if(keyIsDown(RIGHT_ARROW)&& xjogador<680){
     xjogador=xjogador+15;
   }
  
  
  if(dist(xObstaculo3, yObstaculo3, xjogador, yjogador) < 78 + 30 ){
    if(certo==3){
        pontos=pontos+10;
       fill(255);
       ellipse(xObstaculo3, yObstaculo3, 180,180);
       sorteio();
       reset();
      cont=910;
    }else{
       tela = 4;
    }
  }
  if(dist(xObstaculo2, yObstaculo2, xjogador, yjogador) < 78 + 30 ){
    if(certo==2){
        pontos=pontos+10;
       fill(255);
       ellipse(xObstaculo2, yObstaculo2, 180,180);
       sorteio();
       reset();
      cont=910;
       }else{
         tela = 4;
    }
    
    }
  if(dist(xObstaculo1, yObstaculo1, xjogador, yjogador) < 78 + 30 ){
    if(certo==1){
        pontos=pontos+10;
       fill(255);
       ellipse(xObstaculo1, yObstaculo1, 180,180);
       sorteio();
       reset();
      cont=910;
       }else{
         tela = 4;
      }
    }
  
  if(pontos == 20){

    tela= 5;
    
  }
  
}
  function instrucoes(){
  background(240);
    
  textSize(32);
  fill(0);
  text('Instruções', 280, 30);
  textSize(22);
  fill(0);
  text(' Este jogo foi feito para alunos do 6º ano do Fundamental.\n Com o intuíto de instigar o aluno a resolver problemas matamáticos \n contra o tempo, utilizando sua coordenação motora.\n\n Use a setas do seu teclado para movimentar seu personagem\n para Direita, Esquerda, Cima ou Baixo. Resolva o desafio com a\n resposta do buraco correto e se divirta! \n\n\n\n\n\n\nPara voltar ao menu, pressione "ESC"',10, 100);
}
function creditos(){
  background(240);
  textSize(32);
  fill(0);
  text('Créditos', 280, 30);
  textSize(20);
  fill(0);
  image(img1, 20, 50, 200, 200);
  text('Ilustração: Jorânia Mendonça', 400, 270);
  text('Instragram: @Ilustrariscando', 400, 300);
  text('Progamador: João Victor Santos',20, 270);
  text('Instagram: @jv_santos12\nFacebook: João Victor Santos', 20, 300);
  
}
function gameover(){
    background(img2);
    fill(255);
    textSize(25);
    text('VOCÊ FOI SUGADO!', 235, 200);
    text('PONTUÇÃO: ', 280, 250);
    text(pontos, 335, 300);
  }
function win(){

    background(img2);
  fill(255);
  textSize(25);
  text('VOCÊ CONSEGUIU!', 235, 200);
  text('PONTUAÇÃO',280,250);
  text(pontos+'!',335,300);
  
}

function tempo(){
  cont = cont -1;
  textSize(32);
  contS = parseInt(cont/rate);
  fill(255);
  text('Tempo: '+" "+contS, 270, 30);
  if(contS == 0){
   tela = 4;
  }
}
