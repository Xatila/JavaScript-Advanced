function gcd(n1,n2){
    for (let i = 2; i < 10; i++) {
        if(n1%i==0&&n2%i==0){
            console.log(i);
            break;
        }
    }
}
gcd(15,5);
gcd(2154, 458);