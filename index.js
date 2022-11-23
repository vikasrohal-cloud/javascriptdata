   //   var arr = [1,2,3,4,5,6];
   //   console.log(arr)
   //   for(var i=0;i<arr.length;i++){
   //      console.log(arr[i])
   //   }   


   let stocks = {
      fruits : ["apple","grapes","mango"],
      liquid: ["water","ice"],
      holder: ["cone","bottle","bowl"],
      toppings: ["choclate","cream"]
   }


   let shop_open = true;

   let order = (time,work)=>{
      return  new Promise ( (resolve,reject)=>{
         if(shop_open){
            setTimeout(() => {
               resolve(work());   
            }, time);
            
         
         } else{
            reject(console.log(" shop is closed !"));

         }
         
      });
   };

   order(2000, ()=>{console.log(`${stocks.fruits[1]} was selected `)})

      .then( ()=>{
         order(0000, ()=>{console.log(`production started immediately `)})
   } )

      .then( ()=>{
         order(2000, ()=>{console.log(`${stocks.liquid[0]} now added  `)})
   } )
   
      .then( ()=>{
         order(1000, ()=>{console.log(`${stocks.toppings[1]} now added immediately `)})
   } )

      .then( ()=>{
         order(4000, ()=>{console.log(`${stocks.holder[0]} filled by cream `)})
   } )

      .then( ()=>{
         order(3000, ()=>{console.log(` Now You Can Serve My Ice-cream `)})
   } )

   .catch( ()=>{
      console.log(" customer left ")
   } )