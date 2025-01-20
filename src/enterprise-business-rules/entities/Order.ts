import { Owner } from './Owner';

interface Item {
  name: string;
  price: string;
  owner: Owner;
}

export enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  READY_TO_TABLE = 'Ready to Table',
  DONE = 'Done',
}

export interface Order {
  id: number;
  status: Status;
  items: Item[];
  restaurantId: string;
}
