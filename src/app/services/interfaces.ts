export interface Friends {
  friends: Friend[];
}

export interface Friend {
  name: string;
  amountOwed: number;
  debtAmount: number;
}

export interface Profile {
  name: string;
  totalOwed: number;
  owe: number;
}

export interface Groups {
  groups: Group[];
}

export interface Group {
  name: string;
  amount: number;
  list: List[];
}

export interface List {
  name: string;
  amount: number;
}
