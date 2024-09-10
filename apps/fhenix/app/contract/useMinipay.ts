import { useEffect, useState } from "react"
import { BrowserProvider } from "ethers"
import { useAccount } from "wagmi"

export const useMinipay = () => {
  // const { connect } = useConnect()
  const { address } = useAccount()
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<
    `0x${string}` | undefined
  >()

  async function getAddress() {
    // let accounts = (await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // })[0]) as `0x${string}`
    // console.log("acct Func", accounts)
    // setWalletAddress(accounts)

    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()

    let add = (await signer.getAddress()) as `0x${string}`

    console.log("Real World", add)
    setWalletAddress(add)
  }

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setIsConnected(true)

      setWalletAddress(address)
      // connect({ connector: injected({ target: "metaMask" }) })
    }
    getAddress()
    // if (walletAddress) {
    //   setIsConnected(true)
    //   setWalletAddress(address)
    // }
    console.log("useMinipay:", walletAddress)
    console.log("useMinipay - Wagmi", address)
  }, [])

  return { walletAddress: address, isConnected }
}
