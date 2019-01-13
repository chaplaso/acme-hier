
const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

/*
moe
 - larry
	 - curly
 - shep
	 - groucho
*/

function showManagementStructure(arr){

  let counter = 0
  let space = " " 

  for (item in arr){
    if (arr[item].managerId === undefined){
      //counter-=1
      console.log(`${arr[item].name}`)
      
    }
     else if (counter === 1){
      console.log(`${space.repeat(counter)}- ${arr[item].name}`)
    } else if (arr[item].managerId < arr[item-1].managerId){
      counter-= 3
      console.log(`${space.repeat(counter)}- ${arr[item].name}`)
    } else if (arr[item].managerId > arr[item-1].managerId){
      counter+=1
      console.log(`${space.repeat(counter)}- ${arr[item].name}`)
    } else if (arr[item].managerId === arr[item-1].managerId){
      counter-=1
      console.log(`${space.repeat(counter)}- ${arr[item].name}`)
    }
    counter+=1
  }
  //counter+=1
}
showManagementStructure(users)

