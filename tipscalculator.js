function calculateTips(){
    let totalTips="0"
   
    let billValue=document.querySelector("#valueOfBill").value;
    let tips=document.querySelector("#tipsProcent").value;
    let person=document.querySelector("#persNumb").value;

    if(billValue===""&&tips==="Tips(%)" && person===""){
        alert("Please enter valid values");
        return;
    } else {

      totalTips=(billValue*tips)/person
      totalTips=totalTips
    }

    let result=document.querySelector("#value")
    result.textContent=totalTips


}


function resetValue() {
    let result=document.querySelector("#value")
    result.textContent="0"

}