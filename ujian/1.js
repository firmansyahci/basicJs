function biodataJSON(name, age){
    const result = JSON.stringify(
        {
            name:name, 
            age:age, 
            address:"bogor", 
            hobbies:["ngoding", "badminton"], 
            is_married:false, 
            list_school:
            [
                {
                    name:"SMKN 1 Bojonggede",
                    year_in:2012,
                    year_out:2015,
                    major:null
                }, 
            ],
            skills:
            [
                {
                    skill_name:"coding", 
                    level:"advanced"
                },
                {
                    skill_name:"desain",
                    level:"beginner"
                }
            ],
            interest_in_coding:true
        }
    );

    return result;
}
console.log(biodataJSON('firman', 23));