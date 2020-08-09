const user = {
    firstName : "Alfan",
    lastName : "R",
    age: 20
}

const admin ={
    name: "Ranums",
    position: "Marketing"
}

const pesan = `Dear, ${user.namaAwal} ${user.namaAkhir}

Selamat sukses ya, semoga diberi kesehatan dan dimudahkan urusannya

Salam hormat,
${admin.name}
${admin.position}
`;
console.log(pesan);