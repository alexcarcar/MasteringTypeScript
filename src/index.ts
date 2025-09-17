import { greet } from './utils';
import { User } from './models';

const user: User = {
id: 1,
name: 'Alice'
};

console.log(greet(user));
