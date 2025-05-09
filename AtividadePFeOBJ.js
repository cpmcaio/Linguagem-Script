class Exams{
    constructor(peso, respostaCorreta){
        this.respostaCorreta=respostaCorreta;
        this.peso=peso;

        this.questoes = []
    }
    addQuestao(numero, peso, respostaCorreta){
        this.questoes.push({numero,peso,respostaCorreta});
    }
    avg(respostasAluno){
        let total = 0;
        let certas = 0;

        for (const i of this.questoes){
            total += i.peso;
            if (respostasAluno[i.numero] === i.respostaCorreta){
                certas += i.peso;
            }
        }
    }
}
