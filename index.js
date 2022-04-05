function Ampulheta(tamanho) {
  if (tamanho >= 20) {
    for (let line = 0; line < tamanho; line += 1) {
      process.stdout.write("#");
      for (let blank = 0; blank < line; blank += 1) {
        process.stdout.write(" ");
      }
      for (let star = 0; star < (tamanho - line) * 2 - 1; star += 1) {
        process.stdout.write("#");
      }
      console.log();
    }

    for (let line = 2; line <= tamanho; line += 1) {
      process.stdout.write("#");
      for (let blank = 1; blank <= tamanho - line; blank += 1) {
        process.stdout.write(" ");
      }
      for (let star = 0; star < 2 * line - 1; star += 1) {
        process.stdout.write("#");
      }
      console.log();
    }
  } else return console.log("Tamanho deve ser maior ou igual a 20");
}

//Insira o número do tamanho da sua ampulheta na função

Ampulheta(20);
