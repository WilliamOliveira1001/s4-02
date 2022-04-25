function snapCrackle(maxValue){
    let result = ""
  
        for(let i=1; i<=maxValue; i++){
         let primo = true 
         let newResult = ""
          for(let divisor=2; divisor<i; divisor++){
                if(i%divisor===0){
                    primo= false
                }
        }
            if(primo === true && i!==1){
             newResult = "Prime"
            }
             if(i%2 !== 0 && i%5===0){
              result  += "SnapCrackle" + newResult + ", "   
            }
            else if(i%2 !== 0){   
              result  += "Snap" +newResult+ ", "
             }
            else if(i%5===0){
                result  += "Crackle"+ newResult + ", "
            }
            else if(primo === true){
                result += "Prime" + ", "
            }
            else {
              result  += i + ", "
            }  
        }
    return result.slice(0,-2)
}
console.log(snapCrackle(15))

