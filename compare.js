let obj1 = {
    name : "person1",
    age : "5",
    
    
}
let obj2 = {
    age2 : "5",
    name : "person1",
    
    
}
let object1length = Object.keys(obj1).length
let object2length= Object.keys(obj2).length
let issame = true
if (object1length === object2length)
{
    
for(let val in obj1){
if(obj1[val] != obj2[val])
    {
        issame = false
    }
}
}
else
{
    issame = false
}
if(issame)
{
    console.log("Object properties and values are matched." + true)
}
else
{
    console.log("Object properties and values are not matched." + false)
}


    



// compare the two object ,if two objects value are equal(same properties without order)print "True"
// otherwise it will print "False"