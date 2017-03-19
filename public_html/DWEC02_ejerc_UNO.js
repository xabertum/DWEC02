/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}*/


function burbuja(miArray)
{

    var flag;
    do {
        flag = false;
        for (var j = 0; j < (miArray.length - 1); j++) {
            if (miArray [j] > miArray[j + 1]) {
                var k = miArray[j];
                miArray[j] = miArray[j + 1];
                miArray[j + 1] = k;
                flag = true;
            }
        }

    } while (flag);
    return miArray;

}

miArray = Array(5, 9, 4, 7, 3, 8, 2, 1, 6);

document.write("Valores Iniciales<br>");
for (var i = 0; i < miArray.length; i++)
{
    document.write(miArray[i] + " , ");
}

arrayB = burbuja(miArray);

document.write("<br><br>Valores ordenados<br>");
for (i = 0; i < arrayB.length; i++)
{
    document.write(arrayB[i] + " , ");
}