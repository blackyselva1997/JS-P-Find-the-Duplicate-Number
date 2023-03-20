let array = [100,4,6,7,15,9,15,4,100];
var a = [];
var b = 0;

function duplicate() {
    for (i = 0;i<=array.length;i++){
        ++b;
        for (j=b;j<=array.length;j++){
            if (array[i] == array[j]){
                a.push(array[i]);
            }
        }
    }
    return a;
}
duplicate();
console.log(a);