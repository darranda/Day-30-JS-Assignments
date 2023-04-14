
const storeOwners = [ 
  { name: 'charles', stores: 1 },
 { name: 'sally', stores: 1 },
{ name: 'cassandra', stores:1 },
  { name: 'Danny Shavez', stores: 1, 
     location: 'in NM'}
];



const listNumberOfStores = function () {
for (let i = 0; i < storeOwners.length; i++) {
       let totalLocations = 0;


return totalLocations;
}
};


function tellMeMyStores() {
console.log("Hey, can you tell me who owns stores?");
let locations = listNumberOfStores;
  if (locations > 0) {
         console.log("Of course, we have " + totalLocations + " stores");
} 
}

function hasStore() {
for (let i = 0; i < 2; i++) {
      
      let person = storeOwners[i].name;
         console.log("Yes, " + person + " has one");
}
}

tellMeMyStores();
hasStore();

let man = storeOwners[3].name;


let whereHeLives = man.location;
console.log("Yes, " + man + " that lives " + whereHeLives + " owns one too.");
