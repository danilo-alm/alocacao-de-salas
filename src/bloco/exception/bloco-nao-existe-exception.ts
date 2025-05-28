export class BlocoNaoExisteException extends Error {
  constructor() {
    super('Bloco não existe');
    this.name = BlocoNaoExisteException.name;
  }
}
