
function mySort(arr1, arr2, arr3) {

    var temp1, temp2, temp3;

    for (var i = 0; i < arr1.length; i++) {

        for (var j = i + 1; j < arr1.length; j++) {

            if (arr1[i] > arr1[j]) {

            temp1 = arr1[i];

            arr1[i] = arr1[j];

            arr1[j] = temp1;

            temp2 = arr2[i];

            arr2[i] = arr2[j];

            arr2[j] = temp2;

            temp3 = arr3[i];

            arr3[i] = arr3[j];

            arr3[j] = temp3;

            }

        }

    }

    return {arr1, arr2, arr3};

}

console.log(mySort(["Maxwell", "John", "Smith", "Zack", "Adam"], [3.5, 3.2, 3.8, 3.1, 3.9], [12345, 23456, 34567, 45678, 56789]));