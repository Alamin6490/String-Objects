const mobile = {
    brand: 'samsung',
    price: 240000,
    color: 'black',
    camera: '12mp',
    isNew: true
}
// for of: array
// for in : object
for(const prop in mobile ){
    console.log(prop)
    console.log(moile[prop])
}



const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,':',mobile[key]);
}