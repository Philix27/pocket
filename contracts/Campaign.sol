// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Campaign {
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

event CampaignCreated(
    uint256 campaignId,
    address indexed owner,
    string toke,
    uint256 rate,
    uint256 upperLimit,
    uint256 lowerLimit,
    uint256 startDate,
    bool isBuy
);

event CampaignUpdated(
    uint256 campaignId,
    address indexed owner,
    string toke,
    uint256 rate,
    uint256 upperLimit,
    uint256 lowerLimit,
    uint256 startDate,
    bool isBuy
);

event CampaignDeactivated(
    uint256 campaignId,
   
);

contract P2PAdCampaign {
    Campaign[] public campaigns;

    modifier onlyOwner(uint256 campaignId) {
        require(
            campaigns[campaignId].owner == msg.sender,
            "Not the owner of this campaign"
        );
        _;
    }

    function createCampaign(
        string memory _token,
        string memory _paymentMethod,
        uint256 _startDate,
        uint256 _endDate,
        uint256 _lowerLimit,
        uint256 _upperLimit,
        uint256 _rate,
        bool _isBuy
    ) external payable {
        require(_startDate < _endDate, "Invalid start or end date");
        require(_lowerLimit > 0, "Lower limit must be greater zero");
        require(_rate > 0, "Rate must be greater zero");

        campaigns.push(
            Campaign({
                owner: msg.sender,
                upperLimit: _upperLimit,
                lowerLimit: _lowerLimit,
                startDate: _startDate,
                endDate: _endDate,
                isActive: true,
                token: _token,
                rate: _rate,
                isBuy: _isBuy,
                paymentMethod: _paymentMethod
            })
        );

        // Emit an event for the creation of the campaign
        emit CampaignCreated(
            campaigns.length - 1,
            msg.sender,
            _token,
            _rate,
            _upperLimit,
            _lowerLimit,
            _startDate,
            _isBuy
        );
    }

    function updateCampaign(
        string memory _token,
        string memory _paymentMethod,
        uint256 _campaignId,
        uint256 _startDate,
        uint256 _endDate,
        uint256 _lowerLimit,
        uint256 _upperLimit,
        uint256 _rate
    ) external onlyOwner(_campaignId) {
        Campaign storage campaign = campaigns[_campaignId];
        require(campaign.isActive, "Campaign is not active");
         require(_startDate < _endDate, "Invalid start or end date");
        require(_lowerLimit > 0, "Lower limit must be greater zero");
        require(_rate > 0, "Rate must be greater zero");

        campaign.token = _token;
        campaign.paymentMethod = _paymentMethod;
        campaign.lowerLimit = _lowerLimit;
        campaign.upperLimit = _upperLimit;
        campaign.startDate = _startDate;
        campaign.endDate = _endDate;
        campaign.rate = _rate;

         // Emit an event for the creation of the campaign
        emit CampaignCreated(
            campaigns.length - 1,
            msg.sender,
            _token,
            _rate,
            _upperLimit,
            _lowerLimit,
            _startDate,
            _isBuy
        );
    }

    function deactivateCampaign(uint256 _campaignId)
        external
        onlyOwner(_campaignId)
    {
        campaigns[_campaignId].isActive = false;
        
        emit CampaignDeactivated(_campaignId)
    }

    function getTotalCampaigns() external view returns (uint256) {
        return campaigns.length;
    }

    function getCampaign(uint256 _campaignId)
        external
        view
        returns (Campaign memory)
    {
        return campaigns[_campaignId];
    }

    function getAllCampaigns() external view returns (Campaign[] memory) {
        return campaigns;
    }
}
