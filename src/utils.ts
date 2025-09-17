import { User } from './models';

export function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
