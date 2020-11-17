import { rest } from 'msw';

let smurfs = [
    {
      id:1,
      name:'Poppa Smurf',
      position:'Village Leader',
      nickname: 'Pops',
      description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    },
    {
      id:2,
      name:'Poppa Smurf',
      position:'Village Leader',
      nickname: 'Pops',
      description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    },
    {
      id:3,
      name:'Poppa Smurf',
      position:'Village Leader',
      nickname: 'Pops',
      description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }
  ];

export const handlers = [
    rest.get('http://localhost:3333/smurfs', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(smurfs)
      )
    }),

    rest.post('http://localhost:3333//smurfs', (req, rex, ctx) => {
      const { name, position, nickname, description } = req.body;
      const newSmurf = { name, position, nickname, description, id: smurfId };
      if (!name || !position || !nickname) {
        return sendUserError(
          'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
          res
        );
      }
      const findSmurfByName = smurf => {
        return smurf.name === name;
      };
      if (smurfs.find(findSmurfByName)) {
        return sendUserError(
          `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
          res
        );
      }


      smurfs.push(newSmurf);
      smurfId++;
      return res(
        ctx.status(200),
        ctx.json(smurfs)
      )
    }),

    rest.put('http://localhost:3333//smurfs/:id', (req, rex, ctx) => {
      const { id } = req.params;
      const { name, age, height } = req.body;
      const findSmurfById = smurf => {
        return smurf.id == id;
      };
      const foundSmurf = smurfs.find(findSmurfById);
      if (!foundSmurf) {
        return sendUserError('No Smurf found by that ID', res);
      } else {
        if (name) foundSmurf.name = name;
        if (age) foundSmurf.age = age;
        if (height) foundSmurf.height = height;
        
        return res(
          ctx.status(200),
          ctx.json(smurfs)
        )
      }
    }),

    rest.delete('http://localhost:3333//smurfs/:id', (req, rex, ctx) => {
      const { id } = req.params;
      const foundSmurf = smurfs.find(smurf => smurf.id == id);
    
      if (foundSmurf) {
        const SmurfRemoved = { ...foundSmurf };
        smurfs = smurfs.filter(smurf => smurf.id != id);
        return res(
          ctx.status(200),
          ctx.json(smurfs)
        )
      } else {
        sendUserError('No smurf by that ID exists in the smurf DB', res);
      }
    })
]