const input = [18, 7, 3, 25, 11, 2];
let min=[0];
let max=[0];

for(let i=0; i<input.length; i++){
    if (i > max){
        i=max;
    }
    else if(i < min){
        i=min;
    }
};
console.log('min = ' + min + 'max = ' + max);