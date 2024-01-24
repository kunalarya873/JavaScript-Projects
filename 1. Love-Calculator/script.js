function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1 === "" || name2 === ""){
        alert("please enter both names.");
    }else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} 's Lover Percentage:${lovePercentage}%`;

        if(lovePercentage < 30){
            result.innerHTML += "<br> Not a Great match. keep looking!"
        }else if(lovePercentage >= 30 && lovePercentage <= 70){
            result.innerHTML += "<br> There is potential . Give it a try!"
        }else{
            result.innerHTML += "<br> It's a Match! Get Ready for Love!"
        }
    }
}