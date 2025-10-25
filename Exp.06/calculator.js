// calculator_ascii.js

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (q) => new Promise((res) => readline.question(q, res));

(async () => {
  console.log(`
  ╔═══════════════════════════════╗
  ║     🔢  NODE.JS CALCULATOR    ║
  ╚═══════════════════════════════╝
  `);

  const a = Number(await ask("👉 Enter first number: "));
  const op = await ask("⚙️  Enter operator (+, -, *, /): ");
  const b = Number(await ask("👉 Enter second number: "));

  let result;
  if (isNaN(a) || isNaN(b)) {
    result = "❌ Invalid input! Please enter numbers only.";
  } else {
    switch (op) {
      case "+": result = a + b; break;
      case "-": result = a - b; break;
      case "*": result = a * b; break;
      case "/": result = b === 0 ? "⚠️ Cannot divide by zero!" : a / b; break;
      default: result = "❌ Invalid operator!";
    }
  }

  console.log(`
  ╔═══════════════════════════════╗
  ║        🧮 RESULT: ${result}         
  ╚═══════════════════════════════╝
  `);

  readline.close();
})();

