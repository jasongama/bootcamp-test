
    function findItemsOver(shop, threshold) {
        var pull =[];
          for(var i= 0; i<shop.length; i++){
          if(shop[i].qty > threshold){
          
          pull.push(shop[i]);
          }
          
          }
          return pull;
          
        
        }