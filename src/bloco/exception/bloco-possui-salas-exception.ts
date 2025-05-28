export class BlocoPossuiSalasException extends Error {
  constructor() {
    super('Bloco possui salas associadas a ele');
    this.name = BlocoPossuiSalasException.name;
  }
}
