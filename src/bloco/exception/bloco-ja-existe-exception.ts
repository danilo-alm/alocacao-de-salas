export class BlocoJaExisteException extends Error {
  constructor() {
    super('Um bloco com este nome já existe');
    this.name = BlocoJaExisteException.name;
  }
}
