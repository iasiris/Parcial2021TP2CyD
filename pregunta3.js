// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {

    arr_size = nums.length;

    if (arr_size < 3) {
        return undefined;
    }

    let primero = nums[0];
    for (let i = 1;
        i < arr_size; i++)
        if (nums[i] > primero)
            primero = nums[i];

    // Find second
    // largest element
    let segundo = Number.MIN_VALUE;
    for (let i = 0;
        i < arr_size; i++)
        if (nums[i] > segundo &&
            nums[i] < primero)
            segundo = nums[i];

    // Find third
    // largest element
    let tercero = Number.MIN_VALUE;
    for (let i = 0;
        i < arr_size; i++)
        if (nums[i] > tercero &&
            nums[i] < segundo)
            tercero = nums[i];

    return tercero;
}



// TESTs no modificar
console.log(greater3([4, 3, 4, 5, 1]) === 3);
console.log(greater3([3, 4]) === undefined);
console.log(greater3([4, 4, 4]) === undefined);
console.log(greater3([1, 1, 2, 5]) === 1);