function getValue(){
    var dollar=document.getElementById("dollar").value;
    var result=document.getElementById("result");
    result.style.color='red';
    if(dollar==""){
        result.innerHTML="Enter a Number Please";
        return false;
    }else if(dollar==0){
        result.innerHTML="Enter a Number Greater than Zero";
        return false;
    }else if(dollar<0){
        result.innerHTML="Please Enter a Positive Number";
        return false;
    }else if(isNaN(dollar)){
        result.innerHTML="Please Enter A Number";
        return false;
    }
    else{
        result.innerHTML=dollar*50 +" L.E";
        result.style.color='black';
        return false;
    }
}














