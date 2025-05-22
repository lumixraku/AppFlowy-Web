import { User } from '@/application/types';
import { Table } from 'dexie';

export interface UserTable {
  users: Table<User>;
}

export const userSchema = {
  users: 'uuid',
};