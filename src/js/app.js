class Team {
  constructor() {
    this.teamCount = 0;
    this.teamMembers = [];
  }

  add(character) {
    this.teamMembers.push(character);
    this.teamCount += 1;
  }

  [Symbol.iterator]() {
    return {
      current: -1,
      last: this.teamCount,
      teamMembers: this.teamMembers,


      next() {
        this.current += 1;

        if (this.current < this.last) {
          return { done: false, value: this.teamMembers[this.current] };
        }
        return { done: true };
      },
    };
  }
}

export default Team;
