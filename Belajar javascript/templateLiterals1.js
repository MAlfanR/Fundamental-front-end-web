const user = {
    firstName : "Alfan",
    lastName : "R",
    age: 20
}

const admin ={
    name: "Ranums",
    position: "Marketing"
}

const message = "Dear, " + user.firstName+ " "+ user.lastName + "\n\n" +
"Selamat ulang tahun yang ke-" + user.age+ "\n\n"+
"salam hormat, \n"+
admin.name;

console.log(message)
