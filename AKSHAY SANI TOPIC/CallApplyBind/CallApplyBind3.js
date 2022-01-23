let nameObj1 = {
  firstName: "Prakash",
  lastName: "Chandra",
};

let PrintFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + "from" + hometown + "State" + state
  );
};

PrintFullName.call(nameObj1, "Dhanbad", "Jharkhand");

/*
 in Apply insist of passing multiple of argument  in by simple comma, in Apply we pass argument in  Array list []
*/

PrintFullName.apply(nameObj1, ["Bangalore", "Andrapradesh"]);

/*
the bind method look exactly same as a call method  but the only differenc is , instid of directly call method over here,
the bind method binds that method and return a copy of that which we can use later in our code.

HERE WE DIRECTLY CALL THE METHOD IT WILL RETURN A FUNCTION WHICH WE CAN CALL LATER IN OUR CODE;
 */

let newValue = PrintFullName.bind(nameObj1, "Los Vegas", "USA");

newValue();
