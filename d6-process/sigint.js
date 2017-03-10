process.stdin.resume();
process.on('SIGINT',function () {
    console.log('Got single. press Control-D to exit.')
})