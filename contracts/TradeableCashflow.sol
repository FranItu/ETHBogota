 //SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import {RedirectAll, ISuperToken, IConstantFlowAgreementV1, ISuperfluid} from "./RedirectAll.sol";

import {ERC721} from "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.2.0-solc-0.7/contracts/token/ERC721/ERC721.sol";


contract TradeableCashflow is ERC721, RedirectAll {

  constructor (
    address owner,
    string memory _name,
    string memory _symbol,
    ISuperfluid host,
    IConstantFlowAgreementV1 cfa,
    ISuperToken acceptedToken
  )
    ERC721 ( _name, _symbol )
      function afterAgreementCreated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, //_agreementId
        bytes calldata, //_agreementData
        bytes calldata, //_cbdata
        bytes calldata _ctx
    )
    function afterAgreementUpdated(
        ISuperToken _superToken,
        address _agreementClass,
        bytes32, // _agreementId,
        bytes calldata, // _agreementData,
        bytes calldata, // _cbdata,
        bytes calldata _ctx
    )

    RedirectAll (
      host,
      cfa,
      acceptedToken,
      creator
     )
      {

      _mint(creator, 1);
  }

  //now I will insert a nice little hook in the _transfer, including the RedirectAll function I need
  function _beforeTokenTransfer(
    address /*from*/,
    address to,
    uint256 /*tokenId*/
  ) internal override {
      _changeReceiver(to);
  }
}