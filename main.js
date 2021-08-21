var webcam;

Webcam.set({
    height:400,
    width:430,
    image_format:"png",
    png_quality:90
});

webcam = document.getElementById("webcam");

Webcam.attach("#webcam");

function snap(){
    Webcam.snap(function(data_url){
        document.getElementById("output").innerHTML = "<img id='result' src="+data_url+">"
    });
}  

console.log("ml5 version is",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tqEVXKDB7/model.json',modelloaded);

function modelloaded(){
    console.log("Any Sentence");
}