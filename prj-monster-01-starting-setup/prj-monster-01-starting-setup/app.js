const getAttackValue = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // Draw
        this.winner = "Draw";
      } else if (value <= 0) {
        // Monster Won
        this.winner = "Monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // Draw
        this.winner = "Draw";
      } else if (value <= 0) {
        // Player Won
        this.winner = "Player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getAttackValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getAttackValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getAttackValue(8, 15);
      this.playerHealth -= attackValue;
    },
    healPlayer() {
      this.currentRound++;
      const healBy = getAttackValue(12, 20);
      this.playerHealth = Math.min(this.playerHealth + healBy, 100);
      this.attackPlayer();
    },
  },
});

app.mount("#game");
