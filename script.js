console.log("model is slolasda");
console.log("model is slolasda");

async function loadModel(){
  
  


  model = undefined;
  model = await tf.loadLayersModel("https://raw.githubusercontent.com/ibrahimeatspie/COVID-Classifier/main/model.json");

  console.log("Model is loaded");





}
loadModel();

