const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  
  if (key === 'b'){
    process.stdout.write('\x07');
  }
  if (key >= 1 && key <= 9) {
      console.log(`setting timer for ${key} seconds...`);
      setTimeout(()=>{process.stdout.write('\x07')},1000*key);
  }
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
});

