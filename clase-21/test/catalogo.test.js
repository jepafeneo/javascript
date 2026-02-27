import { Biblioteca } from "../js/Biblioteca.js";
import { Libro } from "../js/Libro.js";

describe("Clase Biblioteca", () => {
  let b;

  beforeEach(() => {
    b = new Biblioteca([
      new Libro(1, "Clean Code", "Robert"),
      new Libro(2, "Eloquent JavaScript", "Marijn"),
      new Libro(3, "You Don't Know JS", "Kyle"),
      new Libro(4, "Otro JS", "Kyle"),
    ]);
  });

  it("countDisponibles devuelve 4 al inicio", () => {
    assert.equal(b.countDisponibles(), 4);
  });

  //   it("", () => {});
});

describe("Clase Libro", function () {});

describe("Lógica", () => {});
