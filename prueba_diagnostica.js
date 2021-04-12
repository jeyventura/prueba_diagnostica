var numero = process.argv[2];
console.log (numero);
for (var c=1; c<=numero; c++)
{
    var cadena = '';
    if(c % 3 == 0)
    {
        cadena += 'Fizz';
    }
    if(c % 5 == 0)
    {
        cadena += 'Buzz';
    }
    console.log (cadena || c);
}