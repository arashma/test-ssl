const express = require('express');

// Configure & Run the http server
const app = express();

app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.get('/' , (req,res) =>{
res.send("hello arash");
});

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});
