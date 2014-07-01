var sum = 0;
for (i = 2; i < process.argv.length; i++ ){
  sum += +process.argv[i];
}
console.log(sum);
/*
Here's the official solution is if you want to compare notes:

────────────────────────────────────────────────────────────────────────────────

    var result = 0

    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])

    console.log(result)

────────────────────────────────────────────────────────────────────────────────

*/
