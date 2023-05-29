var canvas = new fabric.Canvas("myCanvas")
// Crie uma variável canvas

var ballX = 0
var ballY = 0

var holeX = 800
var holeY = 400
//Defina as posições iniciais da bola e do buraco.

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_objeto = Img
		hole_objeto.scaleToWidth(50)
		hole_objeto.scaleToHeight(50)
		hole_objeto.set({
			top:holeY,
			left:holeX
		})
		canvas.add(hole_objeto)
	})
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ball_objeto = Img
		ball_objeto.scaleToWidth(50)
		ball_objeto.scaleToHeight(50)
		ball_objeto.set({
			top:ballY,
			left:ballX
		})
		canvas.add(ball_objeto)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if((ballX == holeX) && (ballY == holeY)){
		canvas.remove(ball_objeto)
		document.getElementById("hd3").innerHTML = "Parabéns, você acertou a bola; tente novamente."
		document.getElementById("myCnavas").style.borderColor = "raibown"
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY > 0){
			ballY = ballY - 10
			canvas.remove(ball_objeto)
			new Image()
		}
	}

	function down()
	{
		if(ballY <= 500){
			ballY = ballY + 10
			canvas.remove(ball_objeto)
			new Image()
		}
	}

	function left()
	{
		if(ballX > 5)
		{
			ballX = ballX - 10
			canvas.remove(ball_objeto)
			new Image()
		}
	}

	function right()
	{
		if(ballX <= 1050)
		{
			ballX = ballX + 10
			canvas.remove(ball_objeto)
			new Image()
		}
	}
	
}

