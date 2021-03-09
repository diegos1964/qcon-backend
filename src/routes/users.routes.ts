import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const usersRouter = Router();

const users = [];

usersRouter.post('/', (req, res) => {
  const { name, email } = req.body;

  const user = {
    id: uuid(),
    name,
    email,
  };

  users.push(user);

  return res.json(user);
});

export default usersRouter;
