import Team from '../app';

test('Проверка итератора', () => {
  const newTeam = new Team();
  const unit1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const unit2 = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const unit3 = {
    name: 'Маг',
    type: 'Migician',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  newTeam.add(unit1);
  newTeam.add(unit2);
  newTeam.add(unit3);

  const teamScreen = [];

  for (const unit of newTeam) {
    teamScreen.push(unit);
  }

  const expected = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Мечник',
      type: 'Swordsman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Маг',
      type: 'Migician',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },

  ];

  expect(teamScreen).toEqual(expected);
});
