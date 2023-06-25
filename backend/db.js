 const mongoose = require('mongoose');
// //const mongoURI = 'mongodb+srv://foodfly:qwert@cluster0.lb1mx76.mongodb.net/Foodfly?retryWrites=true&w=majority'
 const mongoURI = 'mongodb+srv://foodfly:qwert@cluster0.lb1mx76.mongodb.net/Foodfly?retryWrites=true&w=majority'

 const mongoDB = async () => {
   try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("food_items");
     let data= await fetched_data.find({}).toArray()  
    let foodCategory = mongoose.connection.db.collection("foodCategory");
    let data2= await foodCategory.find({}).toArray()
      global.food_items = data;
      global.foodCategory = data2;
      
    
  } catch (error) {
    console.error("Could not Connect to Database", error)
  }
};
module.exports = mongoDB;

