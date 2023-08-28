/**
 * Fix bug
 */

function run() {
    let a = "Foo"; 
    const b = "Bar";

    console.log(a, b);
    // b = "Bar1"; 

    {
        let c = "Fooz";
        let d = "Bazz";

        console.log(c, d);
    }

    // These won't work because c and d are scoped inside the block
    // console.log(c);
    // console.log(d);
}

run();
