//  const kavi =require('/Module')


//  console.log(kavi.code);

const importedData = require('./Module');
function vini() {
    console.log(importedData);
}
setTimeout( vini,2000)
// process.on('uncaughtException',err=>{
//     console.error('there was an uncaught error: ${err}')
//     process.exit(1)
// })

// kavi.runn()
// console.log(kavi.osv);
// console.log(kavi.random);
// console.log(kavi.code);


// / const vini=kavi.code;
// const itemdelete=6;
// const filteritems=vini.filter(vin=>vin.id ===itemdelete)
// console.log(filteritems);

// console.log(`Removed Elements:${vini}`);
// console.log(`Updated array:${kavi}`);