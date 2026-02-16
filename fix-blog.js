const fs = require('fs');
const filePath = 'c:\\Users\\Jimen\\OneDrive\\Desktop\\Website-main\\app\\blog\\[id]\\blogEntries.ts';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);

// Fix lines 56-64 (0-indexed: 56-64)
// Line 57 should be indented 10 spaces instead of 7 (add 3 spaces)
lines[56] = '          },';
lines[57] = '          {';
// Lines 58-64 should be indented more (add 2 spaces each)
for (let i = 58; i <= 64; i++) {
  lines[i] = '  ' + lines[i];
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Fixed indentation successfully');
