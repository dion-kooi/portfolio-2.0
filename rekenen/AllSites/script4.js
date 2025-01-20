let opl_B2 = 0;
let opl_C2 = 0;
let opl_B3 = 0;
let opl_C3 = 0;


function generateProblem()
{
    //alert("de knop doet het!")
    opl_B2 = Math.floor(Math.random() * 21);
    opl_C2 = Math.floor(Math.random() * 21);
    opl_B3 = Math.floor(Math.random() * 21);
    opl_C3 = Math.floor(Math.random() * 21);

    let inp_A1 = opl_B2 + opl_C3;
    let inp_D1 = opl_B3 + opl_C2;
    let inp_D2 = opl_B2 + opl_C2;
    let inp_D3 = opl_B3 + opl_C3;
    let inp_C4 = opl_C2 + opl_C3;
    let inp_B4 = opl_B2 + opl_B3;

    document.getElementById("inp_A1").value = inp_A1;
    document.getElementById("inp_D1").value = inp_D1;
    document.getElementById("inp_D2").value = inp_D2;
    document.getElementById("inp_D3").value = inp_D3;
    document.getElementById("inp_C4").value = inp_C4;
    document.getElementById("inp_B4").value = inp_B4;
    console.log(opl_B2, opl_C2, opl_B3, opl_C3)
    //document.getElementById("opl_B2").value = opl_B2;
    //document.getElementById("opl_C2").value = opl_C2;
    //document.getElementById("opl_B3").value = opl_B3;
    //document.getElementById("opl_C3").value = opl_C3;
}

function checkSolution()
{
    //alert("knop doet het");
    let inv_B2 = parseInt(document.getElementById("opl_B2").value);
    let inv_C2 = parseInt(document.getElementById("opl_C2").value);
    let inv_B3 = parseInt(document.getElementById("opl_B3").value);
    let inv_C3 = parseInt(document.getElementById("opl_C3").value);
    if(inv_B2 == opl_B2 && inv_C2 == opl_C2 && inv_B3 == opl_B3 && inv_C3 == opl_C3)
    {
        //alert("goed gedaan");
        let element = document.getElementById("cardbody");
        element.classList.remove("bg-danger-subtle")
        element.classList.add("bg-success-subtle")
    }
    else
    {
        //alert("probeer het nog eens");
        document.getElementById("cardbody").classList.remove("bg-success-subtle")
        document.getElementById("cardbody").classList.add("bg-danger-subtle")

    }
}