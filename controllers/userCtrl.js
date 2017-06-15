module.exports={
  login: function(req, res){
    for(var i = 0; i < users.length; ++i)
    {
      if(req.body.name === users[i].name && req.body.password === users[i].password)
      {
        req.session.currentUser = users[i];
        console.log('login succeded');
        return res.send({userFound:true});
      }
    }
    console.log('login failed');
    console.log(req.body.name);
    return res.send({userFound: false});
  }
};

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
