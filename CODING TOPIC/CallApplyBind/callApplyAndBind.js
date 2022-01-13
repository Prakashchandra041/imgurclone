let obj = {
    name: "prakash",
    LastName: "chandra"
}

function fullName(place) {
    console.log(this.name + " " + this.LastName+"he is from "+place); 
}

fullName.call(obj,"Dhanbad");
