let obj1 = {
    name : "person1",
    age : "5",
    
    
}
let obj2 = {
    age : "5",
    name : "person1",
    
}


for(let val in obj1)
{
    
    
    if(obj1[val] == obj2[val])
    {
        console.log(obj1[val],obj2[val],true)
        

    }
    else
    {
    
        console.log(obj1[val],obj2[val],false)

    }
}

    



// compare the two object ,if two objects value are equal(same properties without order)print "True"
// otherwise it will print "False"