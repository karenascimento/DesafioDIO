export class DioAccount {
 private nome: string
 private accountNumber: number
 private balance: number = 0
 public status: boolean = true

  constructor(nome: string, accountNumber: number, status: boolean){
    this.nome= nome
    this.accountNumber = accountNumber
    this.status = status
  }

  setName = (nome: string): void =>{
    this.nome = nome
    console.log('Nome alterado com sucesso')
  }

  getName = (): string => {
    return this.nome
  }

  deposit = (): void => {
    if(this.validateStatus()){
      console.log('Você depositou')
    }
  }

  withdraw = (): void => {
    console.log('Você sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

 
  private validateStatus = (): boolean => {
    if(this.status){
      return this.status
    }else{
      throw new Error()
    }
  }

}
