export interface ActivityItem {
    type: 'Payment' | 'Activity' | 'Settlement',
    senderName: string,
    receiverName: string,
    txnName?: string
    groupName?: string
    amount: number,
    date: Date
}
