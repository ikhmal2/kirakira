export interface Friends {
    friends: Friend[]
}

export interface Friend {
    name: string
    amountOwed: number
    debtAmount: number
}

export interface Profile {
    name: string
    totalOwed: number
    owe: number
}

