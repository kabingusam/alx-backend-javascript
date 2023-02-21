/**
 * Using Process stdin
 * 
 */

process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        const name = chunk.trim();
        process.stdin.write(`Your name is: ${name}`);
    }
});

process.stdin.on('end', () => {
    process.stdin.write('\nThis important software is now closing');
});
