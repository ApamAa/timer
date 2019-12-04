
const seconds = process.argv.slice(2);
seconds.sort(function(a,b) {
  return b - a;
});
for (const sec of seconds) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000 * sec);
}
      
      
      
      
      
      
      