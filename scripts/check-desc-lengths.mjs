import { readFileSync } from 'fs';
const text = readFileSync('src/seo/seoConfig.ts', 'utf8');
const matches = [...text.matchAll(/description:\s*\n\s+"([^"]+)"/g)];
let short = 0, ok = 0, long = 0;
matches.forEach(m => {
  const len = m[1].length;
  if (len < 150) { short++; console.log('SHORT (' + len + '): ' + m[1].slice(0, 80)); }
  else if (len > 160) { long++; console.log('LONG  (' + len + '): ' + m[1].slice(0, 80)); }
  else ok++;
});
console.log('\nSummary: ' + ok + ' OK, ' + short + ' SHORT, ' + long + ' LONG of ' + matches.length + ' total');
