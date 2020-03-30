function exitCode() {
  process.on('exit', code => console.log(`Exit code: ${code}`));
  const exit = process.exit;
  exit(1);
}

module.exports = exitCode;
