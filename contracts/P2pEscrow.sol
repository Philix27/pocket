// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract Escrow {
    address public arbitrator;  // The arbitrator who resolves disputes
    uint256 public feePercent;  // Fee percentage for arbitrator (if any)
    IERC20 public cUSD;         // Reference to cUSD ERC-20 token

    struct Transaction {
        address buyer;
        address seller;
        uint256 amount;
        bool isCompleted;
        bool isDisputed;
        bool isRefunded;
    }

    mapping(uint256 => Transaction) public transactions;
    uint256 public transactionCounter;

    modifier onlyArbitrator() {
        require(msg.sender == arbitrator, "Only arbitrator can call this function");
        _;
    }

    modifier onlyBuyer(uint256 _txId) {
        require(msg.sender == transactions[_txId].buyer, "Only buyer can call this function");
        _;
    }

    modifier onlySeller(uint256 _txId) {
        require(msg.sender == transactions[_txId].seller, "Only seller can call this function");
        _;
    }

    constructor(address _arbitrator, address _cUSDTokenAddress, uint256 _feePercent) {
        arbitrator = _arbitrator;
        cUSD = IERC20(_cUSDTokenAddress); // Initialize cUSD token
        feePercent = _feePercent;
    }

    // Buyer creates escrow by approving and depositing cUSD funds
    function createEscrow(address _seller, uint256 _amount) external {
        require(_amount > 0, "Escrow amount must be greater than 0");

        // Transfer cUSD from buyer to this contract
        require(cUSD.transferFrom(msg.sender, address(this), _amount), "cUSD transfer failed");

        transactionCounter++;
        transactions[transactionCounter] = Transaction({
            buyer: msg.sender,
            seller: _seller,
            amount: _amount,
            isCompleted: false,
            isDisputed: false,
            isRefunded: false
        });
    }

    // Buyer confirms goods/services received, releasing funds to the seller
    function releaseFunds(uint256 _txId) external onlyBuyer(_txId) {
        Transaction storage txn = transactions[_txId];
        require(!txn.isCompleted, "Transaction already completed");
        require(!txn.isDisputed, "Transaction is in dispute");

        txn.isCompleted = true;
        require(cUSD.transfer(txn.seller, txn.amount), "cUSD transfer failed");
    }

    // Buyer can request a refund, but only if the seller agrees
    function requestRefund(uint256 _txId) external onlyBuyer(_txId) {
        Transaction storage txn = transactions[_txId];
        require(!txn.isCompleted, "Transaction already completed");
        require(!txn.isDisputed, "Transaction is in dispute");

        txn.isRefunded = true;
        require(cUSD.transfer(txn.buyer, txn.amount), "cUSD transfer failed");
    }

    // Seller can dispute the transaction
    function disputeTransaction(uint256 _txId) external onlySeller(_txId) {
        Transaction storage txn = transactions[_txId];
        require(!txn.isCompleted, "Transaction already completed");

        txn.isDisputed = true;
    }

    // Arbitrator resolves dispute by sending funds to either party
    function resolveDispute(uint256 _txId, bool _releaseToSeller) external onlyArbitrator {
        Transaction storage txn = transactions[_txId];
        require(txn.isDisputed, "Transaction is not in dispute");
        require(!txn.isCompleted, "Transaction already completed");

        txn.isCompleted = true;
        if (_releaseToSeller) {
            require(cUSD.transfer(txn.seller, txn.amount), "cUSD transfer failed");
        } else {
            require(cUSD.transfer(txn.buyer, txn.amount), "cUSD transfer failed");
        }
    }
}
