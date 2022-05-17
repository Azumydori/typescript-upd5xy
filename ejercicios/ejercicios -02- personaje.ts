let habilities: string[] = ['counter', 'healing', 'bash'];

interface Character {
  name: string;
  hp: number;
  habilities: string[];
  town?: string;
}

const character: Character = {
  name: 'Pepe',
  hp: 100,
  habilities: ['bash', 'counter', 'healing'],
};

character.town = 'Hoenn';

console.log(character);
