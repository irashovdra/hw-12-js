const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Рол");
styles.splice(1, 1, "Класика");
styles.shift();
console.log(styles);
styles.unshift("Реп", "Реггі");
console.log(styles);
