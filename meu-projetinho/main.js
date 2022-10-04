user = {
  nickname: 'pharanoia',
  age: 30,
  address: {
      street: 'Rua porto feliz',
      number: 243
  },
}; 

// Desestruturação 

function mostrarIdade(user) {
  return user.idade;
}

document.body.innerText = mostrarIdade(user)