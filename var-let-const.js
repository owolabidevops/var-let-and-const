   // you can reassign var variable and update them
     //var variable are function scope
     //or redefined
     //scoping means where are these variable available t 
     function setWidth(){
        var width=100;
        console.log(width);
      }
      setWidth();
      // we wanna create number of dog years if they are graeter than  12
      var age=100;
      if  (age>12){
       //var is just a temporary variable
       // let and const one of the attribute of both of is that they are block scope
      var dogyears=age*7;

      console.log(`you are ${dogyears} dog years old!`);
      }
     
      let height=200;
        console.log(height);
        height=200;
        