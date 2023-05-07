function tradeCommissions(input) {

    let town = (input[0]);
    let sales = Number(input[1]);
    let commission = 0;


    if (sales < 0 || (town !== "Sofia" && town !== "Varna" && town !== "Plovdiv")){
        console.log("error");return;
    }
    if (sales <= 500) {
        switch (town) {
            case "Sofia": commission = sales * 0.05;break;
            case "Varna": commission = sales * 0.045;break;
            case "Plovdiv": commission = sales * 0.055;break;
            default: console.log("error"); return ;
           
        } 
    }
else if (sales <= 1000){
    switch (town) {
        case "Sofia": commission = sales * 0.07;break;
        case "Varna": commission = sales * 0.075;break;
        case "Plovdiv": commission = sales * 0.08;break;
        
        default: console.log("error"); return ;
    } 
} else if(sales <= 10000){
    switch (town) {
        case "Sofia": commission = sales * 0.08;break;
        case "Varna": commission = sales * 0.10;break;
        case "Plovdiv": commission = sales * 0.12;break;
        
        default: console.log("error"); return ;
    } 
} else {
    switch (town) {
        case "Sofia": commission = sales * 0.12;break;
        case "Varna": commission = sales * 0.13;break;
        case "Plovdiv": commission = sales * 0.145;break;
        
        default: console.log("error"); return ;       
}
} console.log(Math.abs(commission).toFixed(2));

} 

tradeCommissions(["Sofia", "1500"])
tradeCommissions(["Plovdiv", "499.99"])
tradeCommissions(["Kaspichan", "-50"])