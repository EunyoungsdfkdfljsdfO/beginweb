function whatkindoffood(foodname) {
    if (foodname.includes("피자")) {
        return "피자"
    }
    else if(foodname.includes("치킨")) {
        return "치킨"
    }
    else if(foodname.includes("버거")) {
        return "햄버거"
    }
    else {
        return "모름"
    }
}

console.log(whatkindoffood("양념치킨"));
console.log(whatkindoffood("싸이버거"));
console.log(whatkindoffood("파스타"));