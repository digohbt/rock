class lancamento {
    constructor( nome='generico', valor = 0){
    this.nome= nome
    this.valor = valor 
    } }
 class CicloFinanceiro {
        constructor (mes , ano ){
            this.mes = mes
            this.ano = ano 
            this.lancamentos = [] }
        addLancamentos (...lancamentos){
            lancamentos.forEach( l => this.lancamentos.push (l ))   }
        sumario() {
                let valorConsolidado = 0 
                this.lancamentos.forEach(l => {
                    valorConsolidado += l.valor })
                return valorConsolidado  }  }
        const salario = new lancamento ('salario', 45000)
        const contasDeLuz = new lancamento ('luz', - 220)
        const contas = new CicloFinanceiro(6 , 2018)
        contas.addLancamentos(salario, contasDeLuz )
        console.log(contas.sumario())
        console.log(contas)
