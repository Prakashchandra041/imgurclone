
let nameObj1 = {
  firstName: "Prakash",
  lastName: "Chandra",
};

 let PrintFullName=function (hometown,state) {
    console.log(this.firstName + " " + this.lastName+ "from"+ hometown +"State"+state );
  }

//-------------
let nameObj2 = {
  firstName: "Akash",
  lastName: "Chandra",
};
//=--------------------

PrintFullName.call(nameObj1,"Dhanbad","Jharkhand");
PrintFullName.call(nameObj2,"Asansol", "WestBengal");
