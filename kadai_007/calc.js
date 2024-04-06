let sum = 70;

if (sum % 3 == 0 && sum % 5 == 0) {
    console.log("3と5の倍数です");
} else if (sum % 3 == 0) {
    console.log("“3の倍数です”");
} else if (sum % 5 == 0) {
    console.log("“5の倍数です”");
} else {
    console.log(sum);
}