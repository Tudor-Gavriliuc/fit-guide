import chestImg from '../assets/chest.png';
import backImg from '../assets/back.png';
import legsImg from '../assets/legs.png';

export const muscles = [
    {
      id: 'chest',
      name: 'Piept',
      shortDesc: 'Mușchii pectorali – mișcări de împingere.',
      description: 'Exerciții: flotări, împins la piept, fluturări.',
      image: chestImg
    },
    {
      id: 'back',
      name: 'Spate',
      shortDesc: 'Mușchi implicați în tracțiuni și postură.',
      description: 'Exerciții: ramat, tracțiuni, extensii.',
      image: backImg
    },
    {
      id: 'legs',
      name: 'Picioare',
      shortDesc: 'Cvadriceps, femural, gambe.',
      description: 'Exerciții: genuflexiuni, fandări, presă.',
      image: legsImg
    }
  ];