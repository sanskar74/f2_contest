/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(element){
    if(element.profession==="developer"){
      console.log(element)
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element.profession==="developer"){
      console.log(element)
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployeeObject={ id: 4, name: "Susan", age: "20", profession: "intern" }
  arr.push(newEmployeeObject);
  console.log(arr)

}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
    if(arr[i].profession==="admin"){
      arr.splice(i, 1);
    }
  }
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    {
      id: 1,
      name: "sanksar",
      age: 21,
      profession: "coder"
    },
    {
      id: 2,
      name: "rahul",
      age: 23,
      profession: "programer"
    },
    {
      id: 3,
      name: "avinash",
      age: 22,
      profession: "softwaredeveloper"
    }
  ]
  let concatenatedArray = arr.concat(arr2);
  console.log(concatenatedArray)
}
