// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {inEuint32, inEaddress, FHE, inEuint64, euint256} from "@fhenixprotocol/contracts/FHE.sol";

// import {FHE} from "@fhenixprotocol/contracts";

contract Escrow {
    address public arbitrator;
    uint256 public feePercent;
    address public admin;

    struct Transaction {
        address buyer;
        address seller;
        euint256 amount;
        bool isCompleted;
        bool isDisputed;
        bool isRefunded;
    }

    mapping(uint256 => Transaction) public transactions;
    uint256 public transactionCounter;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    modifier onlyArbitrator() {
        require(
            msg.sender == arbitrator,
            "Only arbitrator can call this function"
        );
        _;
    }

    modifier onlyBuyer(uint256 _txId) {
        require(
            msg.sender == transactions[_txId].buyer,
            "Only buyer can call this function"
        );
        _;
    }

    modifier onlySeller(uint256 _txId) {
        require(
            msg.sender == transactions[_txId].seller,
            "Only seller can call this function"
        );
        _;
    }

    modifier transactionExists(uint256 _txId) {
        require(_txId < transactionCounter, "Transaction does not exist");
        _;
    }

    modifier notCompleted(uint256 _txId) {
        require(
            !transactions[_txId].isCompleted,
            "Transaction is already completed"
        );
        _;
    }

    event EscrowCreated(
        uint256 txId,
        address buyer,
        address seller,
        uint256 amount
    );
    event FundsReleased(uint256 txId, address seller, uint256 amount);
    event RefundRequested(uint256 txId, address buyer);
    event DisputeRaised(uint256 txId, address seller);
    event DisputeResolved(uint256 txId, bool releaseToSeller);

    constructor(address _arbitrator, uint256 _feePercent) {
        arbitrator = _arbitrator;
        feePercent = _feePercent;
        admin = msg.sender;
    }

    // Buyer creates escrow by depositing funds
    function createEscrow(address _seller) external payable {
        require(msg.value > 0, "Amount must be greater than 0");

        // bool _sellerAddress = FHE.isInitialized(_seller);

        transactions[transactionCounter] = Transaction({
            buyer: msg.sender,
            seller: _seller,
            amount: FHE.asEuint256(msg.value),
            isCompleted: false,
            isDisputed: false,
            isRefunded: false
        });

        emit EscrowCreated(transactionCounter, msg.sender, _seller, msg.value);
        transactionCounter++;
    }

    // Buyer confirms seller has paid in fiat, releasing funds to the seller
    function releaseFunds(uint256 _txId)
        external
        onlyBuyer(_txId)
        transactionExists(_txId)
        notCompleted(_txId)
    {
        Transaction storage txn = transactions[_txId];
        uint256 amt = FHE.decrypt(txn.amount);
        uint256 fee = (amt * feePercent) / 100;
        uint256 amountToSeller = amt - fee;

        txn.isCompleted = true;
        payable(txn.seller).transfer(amountToSeller);
        payable(arbitrator).transfer(fee);

        emit FundsReleased(_txId, txn.seller, amountToSeller);
    }

    // Buyer can request a refund, but only if the seller agrees
    function requestRefund(uint256 _txId)
        external
        onlyBuyer(_txId)
        transactionExists(_txId)
        notCompleted(_txId)
    {
        Transaction storage txn = transactions[_txId];
        require(!txn.isRefunded, "Refund has already been processed");

        txn.isRefunded = true;
        emit RefundRequested(_txId, msg.sender);
    }

    // Seller can agree to the refund request
    function agreeRefund(uint256 _txId)
        external
        onlySeller(_txId)
        transactionExists(_txId)
        notCompleted(_txId)
    {
        Transaction storage txn = transactions[_txId];
        require(txn.isRefunded, "No refund requested");

        txn.isCompleted = true;

        uint256 amt = FHE.decrypt(txn.amount);

        payable(txn.buyer).transfer(amt);

        emit FundsReleased(_txId, txn.buyer, amt);
    }

    // Seller can dispute the transaction
    function disputeTransaction(uint256 _txId)
        external
        onlySeller(_txId)
        transactionExists(_txId)
        notCompleted(_txId)
    {
        Transaction storage txn = transactions[_txId];
        require(!txn.isDisputed, "Transaction is already disputed");

        txn.isDisputed = true;
        emit DisputeRaised(_txId, msg.sender);
    }

    // Arbitrator resolves dispute by sending funds to either party
    function resolveDispute(uint256 _txId, bool _releaseToSeller)
        external
        onlyArbitrator
        transactionExists(_txId)
        notCompleted(_txId)
    {
        Transaction storage txn = transactions[_txId];
        require(txn.isDisputed, "Transaction is not disputed");

        uint256 amt = FHE.decrypt(txn.amount);

        uint256 fee = (amt * feePercent) / 100;
        uint256 amountToRelease = amt - fee;

        txn.isCompleted = true;

        if (_releaseToSeller) {
            payable(txn.seller).transfer(amountToRelease);
            emit FundsReleased(_txId, txn.seller, amountToRelease);
        } else {
            payable(txn.buyer).transfer(amountToRelease);
            emit FundsReleased(_txId, txn.buyer, amountToRelease);
        }

        payable(arbitrator).transfer(fee);
        emit DisputeResolved(_txId, _releaseToSeller);
    }

    // Get all transactions for a user (buyer or seller)
    function getAllTransactionsForUser(address _user)
        external
        view
        returns (Transaction[] memory)
    {
        uint256 userTransactionCount = 0;

        // Count how many transactions involve the user
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (
                transactions[i].buyer == _user ||
                transactions[i].seller == _user
            ) {
                userTransactionCount++;
            }
        }

        // Create an array to hold the user's transactions
        Transaction[] memory userTransactions = new Transaction[](
            userTransactionCount
        );
        uint256 index = 0;

        // Populate the array with user's transactions
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (
                transactions[i].buyer == _user ||
                transactions[i].seller == _user
            ) {
                userTransactions[index] = transactions[i];
                index++;
            }
        }

        return userTransactions;
    }

    // Get all refunded transactions (admin only)
    function getAllRefundedTransactions()
        external
        view
        onlyAdmin
        returns (Transaction[] memory)
    {
        uint256 refundedCount = 0;

        // Count how many refunded transactions exist
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (transactions[i].isRefunded) {
                refundedCount++;
            }
        }

        // Create an array to hold the refunded transactions
        Transaction[] memory refundedTransactions = new Transaction[](
            refundedCount
        );
        uint256 index = 0;

        // Populate the array with refunded transactions
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (transactions[i].isRefunded) {
                refundedTransactions[index] = transactions[i];
                index++;
            }
        }

        return refundedTransactions;
    }

    // Get all disputed transactions (admin only)
    function getAllDisputedTransactions()
        external
        view
        onlyAdmin
        returns (Transaction[] memory)
    {
        uint256 disputedCount = 0;

        // Count how many disputed transactions exist
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (transactions[i].isDisputed) {
                disputedCount++;
            }
        }

        // Create an array to hold the disputed transactions
        Transaction[] memory disputedTransactions = new Transaction[](
            disputedCount
        );
        uint256 index = 0;

        // Populate the array with disputed transactions
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (transactions[i].isDisputed) {
                disputedTransactions[index] = transactions[i];
                index++;
            }
        }

        return disputedTransactions;
    }

    // Get all completed transactions (admin only)
    function getAllCompletedTransactions()
        external
        view
        onlyAdmin
        returns (Transaction[] memory)
    {
        uint256 completedCount = 0;

        // Count how many completed transactions exist
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (transactions[i].isCompleted) {
                completedCount++;
            }
        }

        // Create an array to hold the completed transactions
        Transaction[] memory completedTransactions = new Transaction[](
            completedCount
        );
        uint256 index = 0;

        // Populate the array with completed transactions
        for (uint256 i = 0; i < transactionCounter; i++) {
            if (transactions[i].isCompleted) {
                completedTransactions[index] = transactions[i];
                index++;
            }
        }

        return completedTransactions;
    }

   
}
