class Exam {
    constructor(answer, weight) {
      this.answer = answer;
      this.weight = weight;
      this.exams = [];
    }
  
    add(exam) {
      let grade = 0;
      for (const key in this.answer) {
        if (exam.values[key] === this.answer[key]) {
          grade += this.weight[key] || 0;
        }
      }
      exam.grade = grade;
      this.exams.push(exam);
    }
  
    avg() {
      if (this.exams.length === 0) return 0;
      const total = this.exams.reduce((sum, exam) => sum + exam.grade, 0);
      return total / this.exams.length;
    }
  
    min(count = 1) {
      const sorted = [...this.exams].sort((a, b) => a.grade - b.grade);
      return sorted.slice(0, count).map(exam => exam.grade);
    }
  
    max(count = 1) {
      const sorted = [...this.exams].sort((a, b) => b.grade - a.grade);
      return sorted.slice(0, count).map(exam => exam.grade);
    }
  
    lt(limit) {
      return this.exams
        .filter(exam => exam.grade < limit)
        .map(exam => exam.grade);
    }
  
    gt(limit) {
      return this.exams
        .filter(exam => exam.grade > limit)
        .map(exam => exam.grade);
    }
  }
  
  const gabarito = { 1: 'a', 2: 'b', 3: 'a', 4: 'c', 5: 'd' };
  const pesos =    { 1: 2,   2: 2,   3: 2,   4: 2,   5: 2 };
  
  const prova = new Exam(gabarito, pesos);
  
  prova.add({ values: { 1: 'a', 2: 'b', 3: 'a', 4: 'c', 5: 'd' } }); 
  prova.add({ values: { 1: 'a', 2: 'b', 3: 'a', 4: 'c', 5: 'e' } }); 
  prova.add({ values: { 1: 'a', 2: 'b', 3: 'd', 4: 'c', 5: 'd' } });  
  prova.add({ values: { 1: 'b', 2: 'c', 3: 'a', 4: 'a', 5: 'd' } }); 
  prova.add({ values: { 1: 'a', 2: 'c', 3: 'd', 4: 'c', 5: 'a' } }); 
  prova.add({ values: { 1: 'e', 2: 'f', 3: 'g', 4: 'h', 5: 'i' } }); 

  console.log("Notas:", prova.exams.map(e => e.grade)); 
  console.log("Média:", prova.avg());                  
  console.log("Menor nota:", prova.min());           
  console.log("3 menores notas:", prova.min(3));       
  console.log("Maior nota:", prova.max());                  
  console.log("2 maiores notas:", prova.max(2));             
  console.log("Notas < 5:", prova.lt(5));                    
  console.log("Notas > 5:", prova.gt(5));                     
  