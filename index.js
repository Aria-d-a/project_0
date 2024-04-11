const art = require('ascii-art');

art.font('Hello, Node JS', 'Doom', (err, renderredText)=>{
    if(err) {
        return;
    }
    console.log(renderredText);
})