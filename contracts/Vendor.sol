// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Vendor {
    address owner;
    bool isActive;
    string token;
    uint256 rate;
    string paymentMethod;
    uint256 upperLimit;
    uint256 lowerLimit;
    uint256 startDate;
    uint256 endDate;
    bool isBuy;
}


contract VendorManager {
    mapping(address =>Vendor) vendors;
}