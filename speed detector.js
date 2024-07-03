function speedDetector(){
    let speed=100;
    let speedlimit =70;
    if (speed<70){
        return"ok";
    }else{
        const demeritePoint= ((speed -speedlimit)/5);
        if (demeritePoint > 12){
            return"licence suspended";
        }else {
            return demeritePoint}}  
        }
        console.log(speedDetector());
    