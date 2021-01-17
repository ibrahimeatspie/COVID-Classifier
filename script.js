console.log("model is slolasda");
console.log("model is slolasda");

async function loadModel(){
  
  


  model = undefined;
  model = await tf.loadLayersModel("https://github.com/ibrahimeatspie/COVID-Classifier/blob/main/model.json");

  console.log("Model is loaded");





}
loadModel();

