function Ampulheta(size) {

// Se o tamanho for menor que 20 irá retornar uma mensagem de erro
  if (size >= 20) {
    for (let line = 0; line < size; line += 1) {
      process.stdout.write("#");
      for (let blank = 0; blank < line; blank += 1) {
        process.stdout.write(" ");
      }
      for (let star = 0; star < (size - line) * 2 - 1; star += 1) {
        process.stdout.write("#");
      }
      console.log();
    }

    for (let line = 2; line <= size; line += 1) {
      process.stdout.write("#");
      for (let blank = 1; blank <= size - line; blank += 1) {
        process.stdout.write(" ");
      }
      for (let star = 0; star < 2 * line - 1; star += 1) {
        process.stdout.write("#");
      }
      console.log();
    }
  } else return console.log("size deve ser maior ou igual a 20");
}

//Insira o número do size da sua ampulheta na função

Ampulheta(20);
