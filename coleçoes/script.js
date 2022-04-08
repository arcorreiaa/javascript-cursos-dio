// map
function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Alysson", "Admin");
usuarios.set("Laura", "Admin");
usuarios.set("Julia", "User");
usuarios.set("Sarah", "Admin");
usuarios.set("Zora", "User");

console.log(getAdmins(usuarios));
