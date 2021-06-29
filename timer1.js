const args = process.argv.slice(2);

const timer = function (args) {
  for (let time of args) {
    if (time !== NaN) {
      if (time >= 0) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, time * 1000);
      }
    }
  }
}

timer(args);