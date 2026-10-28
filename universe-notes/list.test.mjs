import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

test('lists each keynote highlight title grouped by topic', () => {
  const output = execFileSync(
    process.execPath,
    [fileURLToPath(new URL('./list.mjs', import.meta.url))],
    { encoding: 'utf8' },
  );

  assert.equal(output.replaceAll('\r\n', '\n'), `The modern GitHub experience
- AI overview tab
- Media in issues from the CLI
- Stacked pull requests

Open source maintainers
- Contribution controls

Agentic software development
- Copilot automations
- Security review
`);
});
