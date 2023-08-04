export default class Player {
  constructor(
    private id: string,
    private name: string,
    private money: number
  ) {}

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }
}