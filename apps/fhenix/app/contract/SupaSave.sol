// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SupaSave is ReentrancyGuard {
    struct Deposit {
        uint256 amount;
        uint256 lockEndTime;
        string purpose;
    }

    IERC20 public cUSD;

    mapping(address => Deposit[]) public deposits;
    
    event Deposited(address indexed user, uint256 amount, uint256 lockEndTime, string purpose);
    event Withdrawn(address indexed user, uint256 amount);

    constructor(address _cUSDAddress) {
        cUSD = IERC20(_cUSDAddress);
    }

    function deposit(uint256 _lockTime, uint256 _amount, string calldata _purpose) external {
        require(_amount > 0, "Must deposit a positive amount");

        uint256 lockEndTime = block.timestamp + _lockTime;

        // Transfer cUSD tokens from user to this contract
        require(cUSD.transferFrom(msg.sender, address(this), _amount), "cUSD transfer failed");
        
        deposits[msg.sender].push(Deposit({
            amount: _amount,
            lockEndTime: lockEndTime,
            purpose: _purpose
        }));

        emit Deposited(msg.sender, _amount, lockEndTime, _purpose);
    }

    function withdraw(uint256 index) external nonReentrant {
        require(index < deposits[msg.sender].length, "Invalid index");
        Deposit storage userDeposit = deposits[msg.sender][index];
        require(userDeposit.amount > 0, "No funds locked");
        require(block.timestamp >= userDeposit.lockEndTime, "Lock period has not expired");
        
        uint256 amount = userDeposit.amount;
        
        userDeposit.amount = 0; // Reset the deposit

        // Transfer cUSD tokens from the contract to the user
        require(cUSD.transfer(msg.sender, amount), "cUSD transfer failed");

        emit Withdrawn(msg.sender, amount);
    }

    function getRemainingLockTime(address user, uint256 index) external view returns (uint256) {
        require(index < deposits[user].length, "Invalid index");
        Deposit storage userDeposit = deposits[user][index];
        if (block.timestamp >= userDeposit.lockEndTime) {
            return 0;
        } else {
            return userDeposit.lockEndTime - block.timestamp;
        }
    }

    function getDepositDetails(address user, uint256 index) external view returns (uint256 amount, uint256 lockEndTime, string memory purpose) {
        require(index < deposits[user].length, "Invalid index");
        Deposit storage userDeposit = deposits[user][index];
        return (userDeposit.amount, userDeposit.lockEndTime, userDeposit.purpose);
    }

    function userAddress(address user) external view returns (uint256) {
        return deposits[user].length;
    }

    function getAllDeposits(address user) external view returns (Deposit[] memory) {
        return deposits[user];
    }
}
