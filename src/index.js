import Team from './task';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const swordsman = {
  name: 'Мечник',
  type: 'Swordsman',
  health: 60,
  level: 1,
  attack: 35,
  defence: 15,
};

const team = new Team();
team.add(bowman);
team.add(swordsman);

for (const member of team) {
  console.log(member);
}
