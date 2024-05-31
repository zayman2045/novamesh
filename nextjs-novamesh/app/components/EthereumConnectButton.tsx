import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function EthereumConnectButton() {
  return (
    <div>
      <ConnectButton
        label="Ethereum Wallet"
        accountStatus="full"
        showBalance={
          false
        }
        chainStatus="none"
      />
    </div>
  );
}
