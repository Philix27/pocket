export type IOrder = {
  sellerAddress: string
  amount: number
  name: string
  paymentMethod: string
}
export const SELLER_ADDRESS = "0xe6b6aAe8fA2718F5371e30F2ad2eEDa250801BB5"
export const OrdersList: IOrder[] = [
  {
    sellerAddress: SELLER_ADDRESS,
    amount: 1,
    name: "Philix",
    paymentMethod: "Bank Transfer",
  },
  {
    sellerAddress: SELLER_ADDRESS,
    amount: 1,
    name: "Amaka",
    paymentMethod: "Bank Transfer",
  },
  {
    sellerAddress: SELLER_ADDRESS,
    amount: 1,
    name: "James",
    paymentMethod: "Bank Transfer",
  },
  {
    sellerAddress: SELLER_ADDRESS,
    amount: 1,
    name: "Black Dan",
    paymentMethod: "Bank Transfer",
  },
  {
    sellerAddress: SELLER_ADDRESS,
    amount: 1,
    name: "KD Uche",
    paymentMethod: "Bank Transfer",
  },
  {
    sellerAddress: SELLER_ADDRESS,
    amount: 1,
    name: "Promise ",
    paymentMethod: "Bank Transfer",
  },
  {
    sellerAddress: SELLER_ADDRESS,
    amount: 1,
    name: "Lena",
    paymentMethod: "Bank Transfer",
  },
]
