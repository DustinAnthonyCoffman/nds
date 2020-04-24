function index(req,res) {
    res.render('contact');
}

function send(req,res) {
    console.log('YOUR REQUEST BODY')
    console.log(req.body);
}

module.exports = {
    index,
    send
}

