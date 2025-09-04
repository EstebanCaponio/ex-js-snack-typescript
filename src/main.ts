// snack 1 + bonus
let date: unknown;

if (typeof date === 'string') {
  console.log(date.toUpperCase());
} else if (typeof date === 'number') {
  console.log(date * 2);
} else if (typeof date === 'boolean') {
  console.log(date ? 'si' : 'no');
} else if (date === null) {
  console.log('Il dato è vuoto');
} else if (Array.isArray(date)) {
  console.log(date.length);
} else if (date instanceof Promise) {
  date.then((msg) => console.log(msg))
} else {
  console.log('Tipo non supportato');
}

// snack 2 + bonus

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
};

// snack 3 + bonus

type DEveloper = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
};

type ProjectManager = Dipendente & {
  teamSize: null | number,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
};

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, DEveloper, ...DEveloper[]]
};