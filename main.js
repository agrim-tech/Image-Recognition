var webcam,img,confidence;

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

function check(){
    img = document.getElementById("result");
    classifier.classify(img,getresults);
}

function getresults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        confidence = results[0].confidence*100;
        document.getElementById("result1").innerHTML = "Object - "+results[0].label;
        document.getElementById("result2").innerHTML = "Accuracy - "+confidence.toFixed(2)+"%";
        console.log((Math.round(confidence*100))/(100));
    }
}