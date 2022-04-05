function Ampulheta(size) {

// Se o tamanho for menor que 20 irá retornar uma mensagem de erro
  if (size >= 20) {

    // Definindo tamanho da primeira parte da ampulheta
    for (let line = 0; line < size; line += 1) {
    // Desenhando primeira linha de "#" à esquerda
      process.stdout.write("#");
      for (let blank = 0; blank < line; blank += 1) {
        // Desenhando espaços em branco
        process.stdout.write(" ");
      }
      for (let star = 0; star < (size - line) * 2 - 1; star += 1) {
        // Desenhando os "#"
        process.stdout.write("#");
      }
      // Imprimindo tudo no fim da operação, pois o console.log se diferencia do "process.stdout" tendo um break no fim
      console.log();
    }
    // Definindo tamanho da segunda parte da ampulheta
    for (let line = 2; line <= size; line += 1) {
      // Desenhando primeira linha de "#" à esquerda
      process.stdout.write("#");
      for (let blank = 1; blank <= size - line; blank += 1) {
        // Desenhando espaços em branco
        process.stdout.write(" ");
      }
      for (let star = 0; star < 2 * line - 1; star += 1) {
        // Desenhando os "#"
        process.stdout.write("#");
      }
      // Imprimindo tudo no fim da operação, pois o console.log se diferencia do "process.stdout" tendo um break no fim
      console.log();
    }
  } else return console.log("size deve ser maior ou igual a 20");
}

//Insira o número do size da sua ampulheta na função

Ampulheta(20);
