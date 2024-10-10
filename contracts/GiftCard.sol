// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GiftCard is Ownable {

    struct GiftCard {
        uint id;
        bool isClaimed;
        uint amount;
        uint createdAt;
        uint updatedAt;
        address from;
        string to;
    }

    IERC20 cUSD = IERC20(0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1);
    
    event OwnerUpdated(address indexed oldOwner, address indexed newOwner);
    event UpdateDiscountRate(uint indexed amount);
    event UpdateCollector(address indexed collector);
    event CardCreated(uint id, uint amount, address indexed from, string indexed to, uint timestamp);
    event CardUpdated(uint indexed id, uint timestamp);


     constructor() Ownable(msg.sender) {}


    mapping(uint => GiftCard) public giftCards;
    uint public nextCardId;

    function createCard(string memory createdFor, uint amount) public {
        require(amount > 0, "amount must be greater than zero");

        GiftCard storage newCard = giftCards[nextCardId];
        newCard.id = nextCardId;
        newCard.isClaimed = false;
        newCard.amount = amount;
        newCard.from = msg.sender;
        newCard.to = createdFor;
        newCard.createdAt = block.timestamp;
        newCard.updatedAt = block.timestamp;

        emit CardCreated(nextCardId,amount, msg.sender, createdFor, block.timestamp);

        nextCardId++;
    }

    function updateCard(uint id) public {
        require(giftCards[id].createdAt != 0, "Card does not exist");
        giftCards[id].updatedAt = block.timestamp;
        giftCards[id].isClaimed = true;

        emit CardUpdated(id, block.timestamp);
    }

    function getAllCards() public view returns (GiftCard[] memory) {
        GiftCard[] memory cards = new GiftCard[](nextCardId);
        for (uint i = 0; i < nextCardId; i++) {
            cards[i] = giftCards[i];
        }
        return cards;
    }

    function getCardsCreatedBy(address user) public view returns (GiftCard[] memory) {
        uint count = 0;
        for (uint i = 0; i < nextCardId; i++) {
            if (giftCards[i].from == user) {
                count++;
            }
        }
        GiftCard[] memory cards = new GiftCard[](count);
        uint index = 0;
        for (uint i = 0; i < nextCardId; i++) {
            if (giftCards[i].from == user) {
                cards[index] = giftCards[i];
                index++;
            }
        }
        return cards;
    }
  
    function getCardsCreatedFor(string calldata user) public view returns (GiftCard[] memory) {
        uint count = 0;
        for (uint i = 0; i < nextCardId; i++) {
            if (compareStrings(giftCards[i].to, user) ) {
                count++;
            }
        }
        GiftCard[] memory cards = new GiftCard[](count);
        uint index = 0;
        for (uint i = 0; i < nextCardId; i++) {
            if (compareStrings(giftCards[i].to, user) ) {
                cards[index] = giftCards[i];
                index++;
            }
        }
        return cards;
    }

 function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function updateOwner(address newOwner) onlyOwner public {
        address currentOwner = owner();
        emit  OwnerUpdated(currentOwner, newOwner);
         transferOwnership(newOwner);
    }
   
}