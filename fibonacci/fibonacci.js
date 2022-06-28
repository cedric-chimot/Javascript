function fib(nb)
{

let n0 = 0;
let n1 = 1;
let som = 0;

for(let i = 2; i<=nb; i++)
    {
        som = n0 + n1;
        n0 = n1;
        n1 = som;
    }

    return nb ? n1 : n0;
}

document.write(fib(5));

/*function fib(nb)
    {
        if(nb < 2)
            {return nb;}

        return fib(nb - 1) + fib(nb - 2);
    }

document.write(fib(21));*/
