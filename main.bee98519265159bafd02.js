/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "pbSz":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1638375350326
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "dkrY":
/*!********************************!*\
  !*** ./src/Dom/dom-helpers.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementCreator": () => (/* binding */ elementCreator),
/* harmony export */   "populateBoard": () => (/* binding */ populateBoard),
/* harmony export */   "enableBoard": () => (/* binding */ enableBoard),
/* harmony export */   "disableBoard": () => (/* binding */ disableBoard),
/* harmony export */   "initializeGameDOM": () => (/* binding */ initializeGameDOM),
/* harmony export */   "sunkShip": () => (/* binding */ sunkShip),
/* harmony export */   "colorCell": () => (/* binding */ colorCell),
/* harmony export */   "handleStatus": () => (/* binding */ handleStatus),
/* harmony export */   "generateDomShip": () => (/* binding */ generateDomShip),
/* harmony export */   "unmarkPlacedShips": () => (/* binding */ unmarkPlacedShips),
/* harmony export */   "markedPlacedShip": () => (/* binding */ markedPlacedShip),
/* harmony export */   "rotateDomShips": () => (/* binding */ rotateDomShips)
/* harmony export */ });
function elementCreator(el, elClass) {
  var elID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var attr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'data-coord';
  var element = document.createElement("".concat(el));
  element.classList.add(elClass);
  element.setAttribute("".concat(attr), elID);
  return element;
}

function populateBoard() {
  for (var _len = arguments.length, boards = new Array(_len), _key = 0; _key < _len; _key++) {
    boards[_key] = arguments[_key];
  }

  boards.forEach(function (board) {
    for (var i = 0; i < 100; i += 1) {
      board.appendChild(elementCreator('div', 'box', i));
    }
  });
}

function enableBoard(boardName) {
  var board = document.querySelector("board-".concat(boardName));
  board.classList.remove('board-active');
}

function disableBoard(boardName) {
  var board = document.querySelector("board-".concat(boardName));
  board.classList.add('board-active');
}

function colorCell(cell, hitOrNot) {
  if (cell === null) return;

  if (hitOrNot) {
    cell.classList.add('hit');
  } else {
    cell.classList.add('miss');
  }
}

function sunkShip(receivingPlayer, target) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var element = document.querySelector(".".concat(receivingPlayer, "-").concat(target));

  if (status === true) {
    element.classList.add('ship-sunk');
  } else {
    element.classList.remove('ship-sunk');
  }
}

function initializeGameDOM() {
  var heroDiv = document.querySelector('.hero-intro');
  var header = document.querySelector('header');
  var main = document.querySelector('main');
  heroDiv.classList.add('hero-intro-inactive');
  header.classList.add('header-active');
  main.classList.add('main-active');
}

function handleStatus(targetParent, target1, status1) {
  var target2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : target1;
  var status2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : status1;
  var state = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var parentElement = document.querySelector(".".concat(targetParent));
  document.querySelector(".".concat(target1)).textContent = "".concat(status1);
  document.querySelector(".".concat(target2)).textContent = "".concat(status2);
  if (!parentElement.classList.contains('err-active')) parentElement.classList.add('err-active');

  if (state === 1) {
    setTimeout(function () {
      parentElement.classList.remove('err-active');
    }, 1000);
  }
}

function generateDomShip(name, orientation, len, selectedCoordinate) {
  var action = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'generate';

  if (orientation === 'horizontal') {
    for (var i = selectedCoordinate; i < selectedCoordinate + len; i += 1) {
      var nextPoint = document.querySelector(".board-you [data-coord='".concat(i, "']"));

      if (action !== 'generate') {
        nextPoint.classList.add('indicate-placement');
      } else {
        nextPoint.classList.add('ship');
        nextPoint.classList.add("ship-".concat(name));
      }
    }
  }

  if (orientation === 'vertical') {
    for (var _i = selectedCoordinate; _i < selectedCoordinate + len * 10; _i += 10) {
      var _nextPoint = document.querySelector(".board-you [data-coord='".concat(_i, "']"));

      _nextPoint.classList.add('ship');

      _nextPoint.classList.add("ship-".concat(name));
    }
  }
}

function markedPlacedShip(target) {
  target.classList.remove('placing-now');
  target.classList.add('ship-placed');
}

function unmarkPlacedShips(ships) {
  ships.forEach(function (ship) {
    return ship.classList.remove('ship-placed');
  });
}

function rotateDomShips() {
  var description = document.querySelector('.current-orientation');
  var allDomShips = document.querySelectorAll('.player .ship-cont');
  allDomShips.forEach(function (ship) {
    var currentOrientation = ship.dataset.orientation;

    if (currentOrientation === 'vertical') {
      ship.dataset.orientation = 'horizontal';
    } else {
      ship.dataset.orientation = 'vertical';
    }

    description.textContent = ship.dataset.orientation;
  });
}



/***/ }),

/***/ "l6qY":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "pbSz");
/* harmony import */ var _modules_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/eventListeners.js */ "/8/S");
/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/js/all.js */ "cFE2");



(0,_modules_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__.enableEventListeners)();

/***/ }),

/***/ "o2k2":
/*!***********************************!*\
  !*** ./src/modules/Controller.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "4/LG");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "k6Di");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "79Ja");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "zThL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player.js */ "n8Re");
/* harmony import */ var _Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dom/dom-helpers.js */ "dkrY");
/* harmony import */ var _ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ai-helpers.js */ "fXRL");





/* eslint-disable class-methods-use-this */





var Controller = /*#__PURE__*/function () {
  function Controller() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Controller);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "findInactivePlayer", function () {
      return _this.players.find(function (player) {
        return player !== _this.findActivePlayer();
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getCurrentPlayerTurn", function () {
      return _this.turn;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "action", function (e, player) {
      return new Promise(function (resolve) {
        var hitSuccess = player.board.handleAttack(parseInt(e.target.dataset.coord));

        if (hitSuccess.length === 0) {
          (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.colorCell)(e.target, false);
        } else {
          (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.colorCell)(e.target, true);

          _this.handlePossibleSunk(hitSuccess[0], player);
        }

        resolve();
      });
    });

    this.turn = 0;
    this.player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_5__["default"]('You');
    this.player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_5__["default"]('Ai');
    this.players = [this.player1, this.player2];
    this.currentPlayer = this.players[this.turn];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Controller, [{
    key: "findActivePlayer",
    value: function findActivePlayer() {
      this.currentPlayer = this.players[this.turn];
    }
  }, {
    key: "handleTurn",
    value: function handleTurn() {
      if (this.turn === 0) {
        this.turn += 1;
      } else {
        this.turn = 0;
      }
    }
  }, {
    key: "turnDefault",
    value: function turnDefault() {
      this.turn = 0;
    }
  }, {
    key: "handleBoards",
    value: function handleBoards() {
      if (this.getCurrentPlayerTurn() === 0) {
        this.player1.disableDomBoard();
        this.player1.getDomBoard().classList.add('board-turn');
        this.player2.enableDomBoard();
        this.player2.getDomBoard().classList.remove('board-turn');
      } else {
        this.player1.enableDomBoard();
        this.player1.getDomBoard().classList.remove('board-turn');
        this.player2.disableDomBoard();
        this.player2.getDomBoard().classList.add('board-turn');
      }
    }
  }, {
    key: "turnComplete",
    value: function turnComplete() {
      this.handleTurn();
      this.findActivePlayer();
      this.handleBoards();
    }
  }, {
    key: "isGameOver",
    value: function isGameOver(player) {
      return player.board.remainingShips() === 0;
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.turnDefault();
      this.player1.disableDomBoard();
      this.player2.disableDomBoard();
      (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.handleStatus)('error-wrapper', 'error-title-header', 'Game Over', 'error-message-p', "".concat(this.currentPlayer.name, " won!"));
    }
  }, {
    key: "handlePossibleSunk",
    value: function handlePossibleSunk(ship, player) {
      var receivingPlayer = player === this.player1 ? 'you' : 'ai';
      var shipStatus = ship.hasShipSunk();
      if (shipStatus) (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.sunkShip)(receivingPlayer, ship.shipName, true);
    }
  }, {
    key: "selectRandomCell",
    value: // AI-specific
    function selectRandomCell() {
      var availableCells = this.player1.board.remainingUnoccupiedCells();

      var randomChoice = lodash__WEBPACK_IMPORTED_MODULE_4__.random(0, availableCells.length);

      return availableCells[randomChoice];
    }
  }, {
    key: "cpuHandleCell",
    value: function cpuHandleCell(prev) {
      var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var availableCells;
      var previousCell = parseInt(prev);

      if (orientation === 'vertical') {
        availableCells = (0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.findValidXY)(previousCell) !== 'nope' ? (0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.findValidXY)(previousCell, 'vertical') : undefined;
      } else if (orientation === 'horizontal') {
        availableCells = (0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.findValidXY)(previousCell, 'horizontal') !== 'nope' ? (0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.findValidXY)(previousCell, 'horizontal') : undefined;
      } else {
        availableCells = (0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.findValidXY)(previousCell, 'unavailable');
      }

      var coordsToBeAttacked = this.player1.board.attackedCoordinates();
      var availCellOptions = (0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.filterAttackedCells)(availableCells, coordsToBeAttacked);
      if (availCellOptions === undefined) return undefined;
      return availCellOptions[lodash__WEBPACK_IMPORTED_MODULE_4__.random(0, availCellOptions.length)];
    } // Game flow
    // checks for possible gameOver and if not, completes the turn

  }, {
    key: "handlePossibleGameOver",
    value: function handlePossibleGameOver(player) {
      if (this.isGameOver(player)) {
        this.gameOver();
      } else {
        this.turnComplete();
      }
    }
  }, {
    key: "gameOn",
    value: function gameOn() {
      var _this2 = this;

      var prev = this.selectRandomCell();
      var prevShotResult = [];
      var hitsOnTarget = [];
      var liveTarget = null;
      document.querySelector('.board-ai').addEventListener('click', function (e) {
        if (!e.target.parentElement.classList.contains('board-inactive')) {
          var play = _this2.action(e, _this2.player2);

          play.then(function () {
            _this2.handlePossibleGameOver(_this2.player2);
          }).then(function () {
            var curr;

            if (prevShotResult.length !== 0) {
              if (hitsOnTarget.length > 1) {
                if ((0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.findEnemyDirection)(hitsOnTarget) === 'horizontal') {
                  curr = _this2.cpuHandleCell(prev, 'horizontal') !== undefined ? _this2.cpuHandleCell(prev, 'horizontal') : _this2.cpuHandleCell(hitsOnTarget[0], 'horizontal');
                } else {
                  curr = _this2.cpuHandleCell(prev, 'vertical') !== undefined ? _this2.cpuHandleCell(prev, 'vertical') : _this2.cpuHandleCell(hitsOnTarget[0], 'vertical');
                }
              } else {
                curr = _this2.cpuHandleCell(prev);
              }
            } else if (prevShotResult.length === 0 && hitsOnTarget.length !== 0) {
              if (hitsOnTarget.length > 1) {
                if ((0,_ai_helpers_js__WEBPACK_IMPORTED_MODULE_7__.findEnemyDirection)(hitsOnTarget) === 'horizontal') {
                  curr = _this2.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'horizontal') !== undefined ? _this2.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'horizontal') : _this2.cpuHandleCell(hitsOnTarget[0], 'horizontal');
                } else {
                  curr = _this2.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'vertical') !== undefined ? _this2.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1], 'vertical') : _this2.cpuHandleCell(hitsOnTarget[0], 'vertical');
                }
              } else {
                curr = _this2.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1]) !== undefined ? _this2.cpuHandleCell(hitsOnTarget[hitsOnTarget.length - 1]) : _this2.cpuHandleCell(hitsOnTarget[0]);
              }
            } else {
              curr = _this2.selectRandomCell();
            }

            if (curr === undefined) curr = _this2.selectRandomCell();
            prev = curr;
            prevShotResult = _this2.player1.board.handleAttack(parseInt(curr));

            if (liveTarget !== null && prevShotResult[0] !== liveTarget && prevShotResult.length !== 0) {
              var _prevShotResult = prevShotResult;

              var _prevShotResult2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_prevShotResult, 1);

              liveTarget = _prevShotResult2[0];
              hitsOnTarget.length = 0;
            }

            if (prevShotResult.length !== 0) {
              var _prevShotResult3 = prevShotResult;

              var _prevShotResult4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_prevShotResult3, 1);

              liveTarget = _prevShotResult4[0];
            }

            if (prevShotResult.length === 0) {
              (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.colorCell)(document.querySelector(".board-you [data-coord=\"".concat(curr, "\"]")), false);
            } else {
              (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.colorCell)(document.querySelector(".board-you [data-coord='".concat(curr, "']")), true);

              if (prevShotResult[0].hasShipSunk()) {
                var shipName = prevShotResult[0].shipName;
                (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.sunkShip)(_this2.player1.name, "".concat(shipName), true);
                prevShotResult.length = 0;
                hitsOnTarget.length = 0;
                liveTarget = null;
              } else {
                hitsOnTarget.push(curr);
              }
            }

            document.querySelector('.board-ai').classList.remove('hit');
            document.querySelector('.board-ai').classList.remove('miss');

            _this2.handlePossibleGameOver(_this2.player1);
          })["catch"](function (err) {
            return (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_6__.handleStatus)('error-wrapper', 'error-title-header', 'Oops', 'error-message-p', "".concat(err, "!"));
          });
        }
      });
    }
  }, {
    key: "gameInit",
    value: function gameInit() {
      this.player2.positionAiShips();
      this.turnDefault();
      this.findActivePlayer();
      this.handleBoards();
      this.gameOn();
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "zznA":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "k6Di");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "79Ja");
/* harmony import */ var _Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dom/dom-helpers.js */ "dkrY");
/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller.js */ "o2k2");



/* eslint-disable class-methods-use-this */



var Game = /*#__PURE__*/function () {
  function Game() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);

    this.settings = new _Controller_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.playerHuman = this.settings.player1;
    this.playerAI = this.settings.player2;
    this.playerHumanFleet = this.playerHuman.board.existingShips();
    this.playerHumanDOMShips = document.querySelectorAll('.player .ship-cont');
    this.playerHumanDOMPositions = document.querySelectorAll('.board-you .box');
    this.rotateBtn = document.querySelector('.rotate');
    this.playerHumanReady = false;
    this.currentShipLength = null;
    this.currentShipOrientation = null;
    this.currentShipID = null;
    this.currentShipObj = null;
    this.currentShipDOMObj = null;
    this.validate = this.validateDomPlacement.bind(this);
    this.indicate = this.indicateShipPosition.bind(this);
    this.enableShips = this.enableDomShips.bind(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{
    key: "enableRotateButton",
    value: function enableRotateButton() {
      this.rotateBtn.addEventListener('click', _Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_2__.rotateDomShips);
    }
  }, {
    key: "disableRotateButton",
    value: function disableRotateButton() {
      this.rotateBtn.removeEventListener('click', _Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_2__.rotateDomShips);
    }
  }, {
    key: "clearUnusedPlacingIndications",
    value: function clearUnusedPlacingIndications(ship) {
      this.playerHumanDOMShips.forEach(function (shipModel) {
        if (shipModel !== ship) shipModel.classList.remove('placing-now');
      });
    }
  }, {
    key: "enableDomShips",
    value: function enableDomShips(e) {
      this.clearUnusedPlacingIndications(e.target);
      e.target.classList.add('placing-now');
      this.currentShipLength = parseInt(e.target.dataset.length);
      this.currentShipOrientation = e.target.dataset.orientation;
      this.currentShipID = parseInt(e.target.dataset.id);
      this.currentShipObj = this.settings.player1.ships[this.currentShipID];
      this.currentShipDOMObj = e.target;
    }
  }, {
    key: "enableDomShipPlacement",
    value: function enableDomShipPlacement() {
      var _this = this;

      this.playerHumanDOMShips.forEach(function (ship) {
        return ship.addEventListener('click', _this.enableShips);
      });
    }
  }, {
    key: "disableDomShipPlacement",
    value: function disableDomShipPlacement() {
      var _this2 = this;

      this.playerHumanDOMShips.forEach(function (ship) {
        return ship.removeEventListener('click', _this2.enableShips);
      });
    }
  }, {
    key: "resetSelectedValues",
    value: function resetSelectedValues() {
      this.currentShipLength = null;
      this.currentShipOrientation = null;
      this.currentShipID = null;
      this.currentShipObj = null;
      this.currentShipDOMObj = null;
    }
  }, {
    key: "enableShipIndication",
    value: function enableShipIndication() {
      var _this3 = this;

      this.playerHumanDOMPositions.forEach(function (position) {
        position.addEventListener('mouseover', _this3.indicate);
      });
    }
  }, {
    key: "disableShipIndication",
    value: function disableShipIndication() {
      var _this4 = this;

      this.playerHumanDOMPositions.forEach(function (position) {
        position.removeEventListener('mouseover', _this4.indicate);
      });
    }
  }, {
    key: "validateDomPlacement",
    value: function validateDomPlacement(e) {
      if (this.currentShipDOMObj === null) {
        (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_2__.handleStatus)('error-wrapper', 'error-title-header', 'Captain!', 'error-message-p', "Please tap on the ship you want to place!");
        return;
      }

      this.settings.player1.ships[this.currentShipID].orientation = this.currentShipOrientation;
      var clickedCoord = parseInt(e.target.dataset.coord);
      var isRotated = this.currentShipOrientation === 'horizontal';

      if (this.playerHuman.board.isPositionValid(clickedCoord, this.currentShipLength, this.currentShipOrientation, isRotated)) {
        this.playerHuman.board.placeShip(clickedCoord, this.playerHuman.ships[this.currentShipID]);
        (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_2__.generateDomShip)(this.currentShipObj.shipName, this.currentShipOrientation, this.currentShipLength, parseInt(e.target.dataset.coord));
        this.settings.player1.ships[this.currentShipID].setPosition(clickedCoord, this.currentShipOrientation);
        (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_2__.markedPlacedShip)(this.currentShipDOMObj);
        this.resetSelectedValues();
        this.checkGameReady();
      }
    }
  }, {
    key: "allowDomShipPlacement",
    value: function allowDomShipPlacement() {
      var _this5 = this;

      this.playerHumanDOMPositions.forEach(function (position) {
        position.addEventListener('click', _this5.validate);
      });
    }
  }, {
    key: "disallowDomShipPlacement",
    value: function disallowDomShipPlacement() {
      var _this6 = this;

      this.playerHumanDOMPositions.forEach(function (position) {
        position.removeEventListener('click', _this6.validate);
      });
    }
  }, {
    key: "clearUnusedIndications",
    value: function clearUnusedIndications() {
      this.playerHumanDOMPositions.forEach(function (position) {
        return position.classList.remove('indicate-placement');
      });
    }
  }, {
    key: "indicateShipPosition",
    value: function indicateShipPosition(e) {
      this.clearUnusedIndications();

      if (this.currentShipOrientation === 'horizontal') {
        for (var i = parseInt(e.target.dataset.coord); i < parseInt(e.target.dataset.coord) + this.currentShipLength; i += 1) {
          var nextPoint = document.querySelector(".board-you [data-coord='".concat(i, "']"));
          if (nextPoint === null) return;
          nextPoint.classList.add('indicate-placement');
        }
      } else {
        for (var _i = parseInt(e.target.dataset.coord); _i < parseInt(e.target.dataset.coord) + this.currentShipLength * 10; _i += 10) {
          var _nextPoint = document.querySelector(".board-you [data-coord='".concat(_i, "']"));

          if (_nextPoint === null) return;

          _nextPoint.classList.add('indicate-placement');
        }
      }
    }
  }, {
    key: "initializePlacement",
    value: function initializePlacement() {
      this.enableRotateButton();
      this.enableShipIndication();
      this.enableDomShipPlacement();
      this.allowDomShipPlacement();
    }
  }, {
    key: "checkGameReady",
    value: function checkGameReady() {
      if (this.playerHuman.areShipsPlaced() === true) {
        this.disableRotateButton();
        this.disableDomShipPlacement();
        this.disableShipIndication();
        this.disallowDomShipPlacement();
        (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_2__.unmarkPlacedShips)(this.playerHumanDOMShips);
        this.initializeGame();
      }
    }
  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.settings.gameInit();
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "BSLr":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "k6Di");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "79Ja");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "zThL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "0FeE");






var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Gameboard);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "missedAttacks", function () {
      return _this.missedShots;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "existingShips", function () {
      return _this.currentShips;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "attackedCoordinates", function () {
      return _this.attackedCoords;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "setCurrentShips", function (ship) {
      return _this.currentShips.push(ship);
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "remainingShips", function () {
      return _this.existingShips().filter(function (ship) {
        return !ship.hasShipSunk();
      }).length;
    });

    this.width = 10;
    this.area = lodash__WEBPACK_IMPORTED_MODULE_3__.range(0, Math.pow(this.width, 2));
    this.missedShots = [];
    this.currentShips = [];
    this.attackedCoords = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gameboard, [{
    key: "remainingUnoccupiedCells",
    value: function remainingUnoccupiedCells() {
      var _this2 = this;

      return this.area.filter(function (cell) {
        return !_this2.attackedCoords.includes(cell);
      });
    }
  }, {
    key: "isPositionValid",
    value: function isPositionValid(coord, shipLength, shipOrientation) {
      var rotated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var isValid = true;
      var shipPosition = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__["default"])(coord, shipLength, shipOrientation);

      if (shipPosition[shipLength - 1] >= 100 || shipPosition[shipLength - 1] % 10 < coord % 10) {
        return false;
      }

      var currentPositions = [];
      this.existingShips().forEach(function (ship) {
        return currentPositions.push(ship.position);
      }); // compares existing positions with the expected position of the ship

      isValid = rotated === true ? !currentPositions.flat().some(function (position) {
        return shipPosition.slice(1).includes(position);
      }) : !currentPositions.flat().some(function (position) {
        return shipPosition.slice(0).includes(position);
      });
      return isValid;
    }
  }, {
    key: "placeShip",
    value: function placeShip(coord, ship) {
      if (!this.isPositionValid(coord, ship.length, ship.orientation)) {
        throw new Error('Position is invalid');
      }

      if (!this.currentShips.some(function (ships) {
        return ships === ship;
      })) {
        this.currentShips.push(ship);
      }

      ship.setPosition(coord, ship.orientation);
    }
  }, {
    key: "rotateShip",
    value: function rotateShip(ship) {
      if (ship.orientation === 'vertical') {
        if (!this.isPositionValid(ship.position[0], ship.length, 'horizontal', true)) {
          throw new Error('Invalid placement');
        } else {
          ship.setPosition(ship.position[0], 'horizontal');
          ship.orientation = 'horizontal';
        }
      }

      if (!this.isPositionValid(ship.position[0], ship.length, 'vertical', true)) {
        throw new Error('Invalid placement');
      } else {
        ship.setPosition(ship.position[0], 'vertical');
        ship.orientation = 'vertical';
      }
    }
  }, {
    key: "handleAttack",
    value: function handleAttack(coord) {
      var _this3 = this;

      var result = [];
      var ships = this.existingShips();

      if (this.attackedCoords.includes(coord)) {
        throw new Error('Coordinate has already been attacked');
      }

      ships.forEach(function (ship) {
        if (ship.position.includes(coord)) {
          ship.hit(coord);
          result.push(ship);

          _this3.attackedCoords.push(coord);

          return result;
        }
      });
      this.attackedCoords.push(coord);
      this.missedShots.push(coord);
      return result;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.missedShots.length = 0;
      this.currentShips.length = 0;
      this.attackedCoords.length = 0;
    }
  }]);

  return Gameboard;
}();



/***/ }),

/***/ "n8Re":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "k6Di");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "79Ja");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gameboard.js */ "BSLr");
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ship.js */ "fSJQ");



/* eslint-disable class-methods-use-this */




var Player = /*#__PURE__*/function () {
  function Player(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Player);

    this.name = name.toLowerCase();
    this.board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.ships = this.generateShips();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "getDomBoard",
    value: function getDomBoard() {
      return document.querySelector(".board-".concat(this.name));
    }
  }, {
    key: "disableDomBoard",
    value: function disableDomBoard() {
      this.getDomBoard().classList.add('board-inactive');
    }
  }, {
    key: "enableDomBoard",
    value: function enableDomBoard() {
      this.getDomBoard().classList.remove('board-inactive');
    }
  }, {
    key: "generateShips",
    value: function generateShips() {
      var carrier = new _Ship_js__WEBPACK_IMPORTED_MODULE_4__["default"]('carrier', 5);
      var battleship = new _Ship_js__WEBPACK_IMPORTED_MODULE_4__["default"]('battleship', 4);
      var cruiser1 = new _Ship_js__WEBPACK_IMPORTED_MODULE_4__["default"]('cruiser1', 3);
      var cruiser2 = new _Ship_js__WEBPACK_IMPORTED_MODULE_4__["default"]('cruiser2', 3);
      var patrol = new _Ship_js__WEBPACK_IMPORTED_MODULE_4__["default"]('patrol', 2);
      return [patrol, cruiser1, cruiser2, battleship, carrier];
    }
  }, {
    key: "positionAiShips",
    value: function positionAiShips() {
      var possibleOrientations = ['vertical', 'horizontal'];

      for (var i = 0; i < 5; i += 1) {
        var shipToBePlaced = this.ships[i]; // randomly generating ship orientation

        var randomOrientation = possibleOrientations[lodash__WEBPACK_IMPORTED_MODULE_2__.random(0, 1)];

        shipToBePlaced.orientation = randomOrientation; // randomly generating coords and checking whether the position's valid

        var coord = lodash__WEBPACK_IMPORTED_MODULE_2__.random(0, 100);

        while (!this.board.isPositionValid(coord, shipToBePlaced.length, randomOrientation, false)) {
          coord = lodash__WEBPACK_IMPORTED_MODULE_2__.random(0, 100);
        }

        this.board.placeShip(coord, shipToBePlaced);
      }
    }
  }, {
    key: "resetShips",
    value: function resetShips() {
      this.ships.forEach(function (ship) {
        return ship.reset();
      });
    }
  }, {
    key: "attack",
    value: function attack(enemyBoard, coord) {
      enemyBoard.handleAttack(coord);
    }
  }, {
    key: "areShipsPlaced",
    value: function areShipsPlaced() {
      for (var i = 0; i < this.ships.length; i += 1) {
        if (this.ships[i].position.length === 0) {
          return false;
        }
      }

      return true;
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "fSJQ":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "k6Di");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "79Ja");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "0FeE");




var Ship = /*#__PURE__*/function () {
  function Ship(name, length) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ship);

    this.shipName = name;
    this.length = length;
    this.position = [];
    this.hits = [];
    this.orientation = 'vertical';
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ship, [{
    key: "setPosition",
    value: function setPosition(startingCoordinate, orientation) {
      var _this = this;

      this.position.length = 0;
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startingCoordinate, this.length, orientation).forEach(function (coord) {
        return _this.position.push(coord);
      });
    }
  }, {
    key: "hit",
    value: function hit(coord) {
      this.hits.push(coord);
    }
  }, {
    key: "hasShipSunk",
    value: function hasShipSunk() {
      return this.hits.length === this.length;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.position.length = 0;
      this.hits.length = 0;
      this.orientation = 'vertical';
    }
  }]);

  return Ship;
}();



/***/ }),

/***/ "fXRL":
/*!***********************************!*\
  !*** ./src/modules/ai-helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findValidXY": () => (/* binding */ findValidXY),
/* harmony export */   "findEnemyDirection": () => (/* binding */ findEnemyDirection),
/* harmony export */   "filterAttackedCells": () => (/* binding */ filterAttackedCells)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "gibH");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");

 // maps the inner part of the board, to locate the enemy ship based on a direction hypothesis

function findValidXY(cellID) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'vertical';

  var topConstraints = lodash__WEBPACK_IMPORTED_MODULE_1__.range(1, 9);

  var bottomConstraints = lodash__WEBPACK_IMPORTED_MODULE_1__.range(91, 99);

  var rightConstraints = lodash__WEBPACK_IMPORTED_MODULE_1__.range(19, 99, 10);

  var leftConstraints = lodash__WEBPACK_IMPORTED_MODULE_1__.range(10, 90, 10);

  var validOptions = [];
  var constraints;

  if (direction === 'horizontal') {
    constraints = [0, 9, 90, 99].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(leftConstraints), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rightConstraints));

    switch (true) {
      case constraints.includes(cellID):
        validOptions = 'nope';
        break;

      case topConstraints.includes(cellID):
      case bottomConstraints.includes(cellID):
      default:
        validOptions = [cellID - 1, cellID + 1];
        break;
    }
  } else if (direction === 'vertical') {
    constraints = [0, 9, 90, 99].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(topConstraints), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bottomConstraints));

    switch (true) {
      case constraints.includes(cellID):
        validOptions = 'nope';
        break;

      case leftConstraints.includes(cellID):
      case rightConstraints.includes(cellID):
      default:
        validOptions = [cellID - 10, cellID + 10];
        break;
    }
  } else if (direction === 'unavailable') {
    switch (true) {
      case cellID === 0:
        validOptions = [cellID + 1, cellID + 10];
        break;

      case cellID === 9:
        validOptions = [cellID - 1, cellID + 10];
        break;

      case cellID === 90:
        validOptions = [cellID + 1, cellID - 10];
        break;

      case cellID === 99:
        validOptions = [cellID - 1, cellID - 10];
        break;

      case leftConstraints.includes(cellID):
        validOptions = [cellID + 1, cellID - 10, cellID + 10];
        break;

      case rightConstraints.includes(cellID):
        validOptions = [cellID - 1, cellID - 10, cellID + 10];
        break;

      case topConstraints.includes(cellID):
        validOptions = [cellID - 1, cellID + 1, cellID + 10];
        break;

      case bottomConstraints.includes(cellID):
        validOptions = [cellID - 1, cellID + 1, cellID - 10];
        break;

      default:
        validOptions = [cellID - 1, cellID + 1, cellID - 10, cellID + 10];
        break;
    }
  }

  return validOptions;
}

function filterAttackedCells(valid, attacked) {
  if (valid === undefined) return undefined;
  return valid.filter(function (cell) {
    return !attacked.includes(cell);
  });
}

function findEnemyDirection(successfulHits) {
  return Math.abs(successfulHits[0] - successfulHits[1]) > 1 ? 'vertical' : 'horizontal';
}



/***/ }),

/***/ "/8/S":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableEventListeners),
/* harmony export */   "enableEventListeners": () => (/* binding */ enableEventListeners)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "gibH");
/* harmony import */ var _Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dom/dom-helpers.js */ "dkrY");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.js */ "zznA");




function hideError() {
  document.querySelector('.error-wrapper').classList.remove('err-active');
}

function restart() {
  window.location.reload();
}

function enableEventListeners() {
  var hideIntroBtn = document.querySelector('.play-now');
  var errBtn = document.querySelector('.remove-err');
  var restartBtn = document.querySelector('.play-again');
  errBtn.addEventListener('click', hideError);
  restartBtn.addEventListener('click', restart);
  hideIntroBtn.addEventListener('click', function () {
    var bothBoards = document.querySelectorAll('.board');
    (0,_Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGameDOM)();
    _Dom_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.populateBoard.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bothBoards));
    var game = new _Game_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    game.initializePlacement();
  });
}


/***/ }),

/***/ "0FeE":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ determinePosition)
/* harmony export */ });
function determinePosition(originalCoord, length, orientation) {
  var finalPosition = [];
  finalPosition[0] = originalCoord;

  if (orientation === 'vertical') {
    for (var i = 1; i < length; i += 1) {
      finalPosition[i] = finalPosition[i - 1] + 10;
    }
  } else {
    for (var _i = 1; _i < length; _i += 1) {
      finalPosition[_i] = finalPosition[_i - 1] + 1;
    }
  }

  return finalPosition;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7abe69163a3e3521da1b")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "battleship:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatebattleship"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["npm.babel","npm.mini-css-extract-plugin","npm.lodash","npm.fortawesome"], () => (__webpack_require__("l6qY")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0Esc0NBQXNDO1dBQ3RDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFdmhCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9hNWI0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRG9tL2RvbS1oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9haS1oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM4Mzc1MzUwMzI2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2dlb3JnZS9EZXNrdG9wL1Rlc3RpbmdKUy9iYXR0bGVzaGlwL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKGVsLCBlbENsYXNzLCBlbElEID0gbnVsbCwgYXR0ciA9ICdkYXRhLWNvb3JkJykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbH1gKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsQ2xhc3MpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHthdHRyfWAsIGVsSUQpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZCguLi5ib2FyZHMpIHtcbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZWxlbWVudENyZWF0b3IoJ2RpdicsICdib3gnLCBpKSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQm9hcmQoYm9hcmROYW1lKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9hcmQtJHtib2FyZE5hbWV9YCk7XG4gIGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLWFjdGl2ZScpO1xufVxuZnVuY3Rpb24gZGlzYWJsZUJvYXJkKGJvYXJkTmFtZSkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvYXJkLSR7Ym9hcmROYW1lfWApO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1hY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY29sb3JDZWxsKGNlbGwsIGhpdE9yTm90KSB7XG4gIGlmIChjZWxsID09PSBudWxsKSByZXR1cm47XG4gIGlmIChoaXRPck5vdCkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH0gZWxzZSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vua1NoaXAocmVjZWl2aW5nUGxheWVyLCB0YXJnZXQsIHN0YXR1cyA9IGZhbHNlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtyZWNlaXZpbmdQbGF5ZXJ9LSR7dGFyZ2V0fWApO1xuICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwLXN1bmsnKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtc3VuaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVHYW1lRE9NKCkge1xuICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8taW50cm8nKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVyby1pbnRyby1pbmFjdGl2ZScpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWFjdGl2ZScpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0YXR1cyh0YXJnZXRQYXJlbnQsIHRhcmdldDEsIHN0YXR1czEsIHRhcmdldDIgPSB0YXJnZXQxLCBzdGF0dXMyID0gc3RhdHVzMSwgc3RhdGUgPSAwKSB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YXJnZXRQYXJlbnR9YCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldDF9YCkudGV4dENvbnRlbnQgPSBgJHtzdGF0dXMxfWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhcmdldDJ9YCkudGV4dENvbnRlbnQgPSBgJHtzdGF0dXMyfWA7XG4gIGlmICghcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Vyci1hY3RpdmUnKSkgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlcnItYWN0aXZlJyk7XG4gIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlcnItYWN0aXZlJyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEb21TaGlwKG5hbWUsIG9yaWVudGF0aW9uLCBsZW4sIHNlbGVjdGVkQ29vcmRpbmF0ZSwgYWN0aW9uID0gJ2dlbmVyYXRlJykge1xuICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGZvciAobGV0IGkgPSBzZWxlY3RlZENvb3JkaW5hdGU7IGkgPCBzZWxlY3RlZENvb3JkaW5hdGUgKyBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV4dFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLXlvdSBbZGF0YS1jb29yZD0nJHtpfSddYCk7XG4gICAgICBpZiAoYWN0aW9uICE9PSAnZ2VuZXJhdGUnKSB7XG4gICAgICAgIG5leHRQb2ludC5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0ZS1wbGFjZW1lbnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRQb2ludC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIG5leHRQb2ludC5jbGFzc0xpc3QuYWRkKGBzaGlwLSR7bmFtZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IHNlbGVjdGVkQ29vcmRpbmF0ZTsgaSA8IHNlbGVjdGVkQ29vcmRpbmF0ZSArIGxlbiAqIDEwOyBpICs9IDEwKSB7XG4gICAgICBjb25zdCBuZXh0UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQteW91IFtkYXRhLWNvb3JkPScke2l9J11gKTtcbiAgICAgIG5leHRQb2ludC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICBuZXh0UG9pbnQuY2xhc3NMaXN0LmFkZChgc2hpcC0ke25hbWV9YCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtlZFBsYWNlZFNoaXAodGFyZ2V0KSB7XG4gIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLW5vdycpO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbn1cblxuZnVuY3Rpb24gdW5tYXJrUGxhY2VkU2hpcHMoc2hpcHMpIHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXBsYWNlZCcpKTtcbn1cblxuZnVuY3Rpb24gcm90YXRlRG9tU2hpcHMoKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtb3JpZW50YXRpb24nKTtcbiAgY29uc3QgYWxsRG9tU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyIC5zaGlwLWNvbnQnKTtcbiAgYWxsRG9tU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRPcmllbnRhdGlvbiA9IHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbjtcbiAgICBpZiAoY3VycmVudE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgZWxlbWVudENyZWF0b3IsXG4gIHBvcHVsYXRlQm9hcmQsXG4gIGVuYWJsZUJvYXJkLFxuICBkaXNhYmxlQm9hcmQsXG4gIGluaXRpYWxpemVHYW1lRE9NLFxuICBzdW5rU2hpcCxcbiAgY29sb3JDZWxsLFxuICBoYW5kbGVTdGF0dXMsXG4gIGdlbmVyYXRlRG9tU2hpcCxcbiAgdW5tYXJrUGxhY2VkU2hpcHMsXG4gIG1hcmtlZFBsYWNlZFNoaXAsXG4gIHJvdGF0ZURvbVNoaXBzLFxufTtcbiIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBlbmFibGVFdmVudExpc3RlbmVycyB9IGZyb20gJy4vbW9kdWxlcy9ldmVudExpc3RlbmVycy5qcyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xuXG5lbmFibGVFdmVudExpc3RlbmVycygpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IHsgY29sb3JDZWxsLCBzdW5rU2hpcCwgaGFuZGxlU3RhdHVzIH0gZnJvbSAnLi4vRG9tL2RvbS1oZWxwZXJzLmpzJztcbmltcG9ydCB7IGZpbmRWYWxpZFhZLCBmaWx0ZXJBdHRhY2tlZENlbGxzLCBmaW5kRW5lbXlEaXJlY3Rpb24gfSBmcm9tICcuL2FpLWhlbHBlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50dXJuID0gMDtcbiAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdZb3UnKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdBaScpO1xuICAgIHRoaXMucGxheWVycyA9IFt0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMl07XG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMudHVybl07XG4gIH1cblxuICBmaW5kQWN0aXZlUGxheWVyKCkge1xuICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnR1cm5dO1xuICB9XG5cbiAgZmluZEluYWN0aXZlUGxheWVyID0gKCkgPT4gdGhpcy5wbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gcGxheWVyICE9PSB0aGlzLmZpbmRBY3RpdmVQbGF5ZXIoKSk7XG5cbiAgZ2V0Q3VycmVudFBsYXllclR1cm4gPSAoKSA9PiB0aGlzLnR1cm47XG5cbiAgaGFuZGxlVHVybigpIHtcbiAgICBpZiAodGhpcy50dXJuID09PSAwKSB7XG4gICAgICB0aGlzLnR1cm4gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50dXJuID0gMDtcbiAgICB9XG4gIH1cblxuICB0dXJuRGVmYXVsdCgpIHtcbiAgICB0aGlzLnR1cm4gPSAwO1xuICB9XG5cbiAgaGFuZGxlQm9hcmRzKCkge1xuICAgIGlmICh0aGlzLmdldEN1cnJlbnRQbGF5ZXJUdXJuKCkgPT09IDApIHtcbiAgICAgIHRoaXMucGxheWVyMS5kaXNhYmxlRG9tQm9hcmQoKTtcbiAgICAgIHRoaXMucGxheWVyMS5nZXREb21Cb2FyZCgpLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXR1cm4nKTtcbiAgICAgIHRoaXMucGxheWVyMi5lbmFibGVEb21Cb2FyZCgpO1xuICAgICAgdGhpcy5wbGF5ZXIyLmdldERvbUJvYXJkKCkuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmQtdHVybicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXllcjEuZW5hYmxlRG9tQm9hcmQoKTtcbiAgICAgIHRoaXMucGxheWVyMS5nZXREb21Cb2FyZCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkLXR1cm4nKTtcbiAgICAgIHRoaXMucGxheWVyMi5kaXNhYmxlRG9tQm9hcmQoKTtcbiAgICAgIHRoaXMucGxheWVyMi5nZXREb21Cb2FyZCgpLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXR1cm4nKTtcbiAgICB9XG4gIH1cblxuICB0dXJuQ29tcGxldGUoKSB7XG4gICAgdGhpcy5oYW5kbGVUdXJuKCk7XG4gICAgdGhpcy5maW5kQWN0aXZlUGxheWVyKCk7XG4gICAgdGhpcy5oYW5kbGVCb2FyZHMoKTtcbiAgfVxuXG4gIGlzR2FtZU92ZXIocGxheWVyKSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZW1haW5pbmdTaGlwcygpID09PSAwO1xuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgdGhpcy50dXJuRGVmYXVsdCgpO1xuICAgIHRoaXMucGxheWVyMS5kaXNhYmxlRG9tQm9hcmQoKTtcbiAgICB0aGlzLnBsYXllcjIuZGlzYWJsZURvbUJvYXJkKCk7XG4gICAgaGFuZGxlU3RhdHVzKFxuICAgICAgJ2Vycm9yLXdyYXBwZXInLFxuICAgICAgJ2Vycm9yLXRpdGxlLWhlYWRlcicsXG4gICAgICAnR2FtZSBPdmVyJyxcbiAgICAgICdlcnJvci1tZXNzYWdlLXAnLFxuICAgICAgYCR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9IHdvbiFgXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVBvc3NpYmxlU3VuayhzaGlwLCBwbGF5ZXIpIHtcbiAgICBjb25zdCByZWNlaXZpbmdQbGF5ZXIgPSBwbGF5ZXIgPT09IHRoaXMucGxheWVyMSA/ICd5b3UnIDogJ2FpJztcbiAgICBjb25zdCBzaGlwU3RhdHVzID0gc2hpcC5oYXNTaGlwU3VuaygpO1xuICAgIGlmIChzaGlwU3RhdHVzKSBzdW5rU2hpcChyZWNlaXZpbmdQbGF5ZXIsIHNoaXAuc2hpcE5hbWUsIHRydWUpO1xuICB9XG5cbiAgYWN0aW9uID0gKGUsIHBsYXllcikgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgaGl0U3VjY2VzcyA9IHBsYXllci5ib2FyZC5oYW5kbGVBdHRhY2socGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb29yZCkpO1xuICAgICAgaWYgKGhpdFN1Y2Nlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbG9yQ2VsbChlLnRhcmdldCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sb3JDZWxsKGUudGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3NzaWJsZVN1bmsoaGl0U3VjY2Vzc1swXSwgcGxheWVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAvLyBBSS1zcGVjaWZpY1xuXG4gIHNlbGVjdFJhbmRvbUNlbGwoKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlQ2VsbHMgPSB0aGlzLnBsYXllcjEuYm9hcmQucmVtYWluaW5nVW5vY2N1cGllZENlbGxzKCk7XG4gICAgY29uc3QgcmFuZG9tQ2hvaWNlID0gXy5yYW5kb20oMCwgYXZhaWxhYmxlQ2VsbHMubGVuZ3RoKTtcbiAgICByZXR1cm4gYXZhaWxhYmxlQ2VsbHNbcmFuZG9tQ2hvaWNlXTtcbiAgfVxuXG4gIGNwdUhhbmRsZUNlbGwocHJldiwgb3JpZW50YXRpb24gPSBudWxsKSB7XG4gICAgbGV0IGF2YWlsYWJsZUNlbGxzO1xuICAgIGNvbnN0IHByZXZpb3VzQ2VsbCA9IHBhcnNlSW50KHByZXYpO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgYXZhaWxhYmxlQ2VsbHMgPSBmaW5kVmFsaWRYWShwcmV2aW91c0NlbGwpICE9PSAnbm9wZScgPyBmaW5kVmFsaWRYWShwcmV2aW91c0NlbGwsICd2ZXJ0aWNhbCcpIDogdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgYXZhaWxhYmxlQ2VsbHMgPVxuICAgICAgICBmaW5kVmFsaWRYWShwcmV2aW91c0NlbGwsICdob3Jpem9udGFsJykgIT09ICdub3BlJyA/IGZpbmRWYWxpZFhZKHByZXZpb3VzQ2VsbCwgJ2hvcml6b250YWwnKSA6IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXZhaWxhYmxlQ2VsbHMgPSBmaW5kVmFsaWRYWShwcmV2aW91c0NlbGwsICd1bmF2YWlsYWJsZScpO1xuICAgIH1cbiAgICBjb25zdCBjb29yZHNUb0JlQXR0YWNrZWQgPSB0aGlzLnBsYXllcjEuYm9hcmQuYXR0YWNrZWRDb29yZGluYXRlcygpO1xuICAgIGNvbnN0IGF2YWlsQ2VsbE9wdGlvbnMgPSBmaWx0ZXJBdHRhY2tlZENlbGxzKGF2YWlsYWJsZUNlbGxzLCBjb29yZHNUb0JlQXR0YWNrZWQpO1xuICAgIGlmIChhdmFpbENlbGxPcHRpb25zID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGF2YWlsQ2VsbE9wdGlvbnNbXy5yYW5kb20oMCwgYXZhaWxDZWxsT3B0aW9ucy5sZW5ndGgpXTtcbiAgfVxuXG4gIC8vIEdhbWUgZmxvd1xuXG4gIC8vIGNoZWNrcyBmb3IgcG9zc2libGUgZ2FtZU92ZXIgYW5kIGlmIG5vdCwgY29tcGxldGVzIHRoZSB0dXJuXG4gIGhhbmRsZVBvc3NpYmxlR2FtZU92ZXIocGxheWVyKSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3ZlcihwbGF5ZXIpKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHVybkNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2FtZU9uKCkge1xuICAgIGxldCBwcmV2ID0gdGhpcy5zZWxlY3RSYW5kb21DZWxsKCk7XG4gICAgbGV0IHByZXZTaG90UmVzdWx0ID0gW107XG4gICAgY29uc3QgaGl0c09uVGFyZ2V0ID0gW107XG4gICAgbGV0IGxpdmVUYXJnZXQgPSBudWxsO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1haScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2JvYXJkLWluYWN0aXZlJykpIHtcbiAgICAgICAgY29uc3QgcGxheSA9IHRoaXMuYWN0aW9uKGUsIHRoaXMucGxheWVyMik7XG4gICAgICAgIHBsYXlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvc3NpYmxlR2FtZU92ZXIodGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyO1xuICAgICAgICAgICAgaWYgKHByZXZTaG90UmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBpZiAoaGl0c09uVGFyZ2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmluZEVuZW15RGlyZWN0aW9uKGhpdHNPblRhcmdldCkgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgICAgY3VyciA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3B1SGFuZGxlQ2VsbChwcmV2LCAnaG9yaXpvbnRhbCcpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuY3B1SGFuZGxlQ2VsbChwcmV2LCAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmNwdUhhbmRsZUNlbGwoaGl0c09uVGFyZ2V0WzBdLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjdXJyID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcHVIYW5kbGVDZWxsKHByZXYsICd2ZXJ0aWNhbCcpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuY3B1SGFuZGxlQ2VsbChwcmV2LCAndmVydGljYWwnKVxuICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5jcHVIYW5kbGVDZWxsKGhpdHNPblRhcmdldFswXSwgJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnIgPSB0aGlzLmNwdUhhbmRsZUNlbGwocHJldik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldlNob3RSZXN1bHQubGVuZ3RoID09PSAwICYmIGhpdHNPblRhcmdldC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgaWYgKGhpdHNPblRhcmdldC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbmRFbmVteURpcmVjdGlvbihoaXRzT25UYXJnZXQpID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgIGN1cnIgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNwdUhhbmRsZUNlbGwoaGl0c09uVGFyZ2V0W2hpdHNPblRhcmdldC5sZW5ndGggLSAxXSwgJ2hvcml6b250YWwnKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNwdUhhbmRsZUNlbGwoaGl0c09uVGFyZ2V0W2hpdHNPblRhcmdldC5sZW5ndGggLSAxXSwgJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5jcHVIYW5kbGVDZWxsKGhpdHNPblRhcmdldFswXSwgJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY3VyciA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3B1SGFuZGxlQ2VsbChoaXRzT25UYXJnZXRbaGl0c09uVGFyZ2V0Lmxlbmd0aCAtIDFdLCAndmVydGljYWwnKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNwdUhhbmRsZUNlbGwoaGl0c09uVGFyZ2V0W2hpdHNPblRhcmdldC5sZW5ndGggLSAxXSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuY3B1SGFuZGxlQ2VsbChoaXRzT25UYXJnZXRbMF0sICd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyID1cbiAgICAgICAgICAgICAgICAgIHRoaXMuY3B1SGFuZGxlQ2VsbChoaXRzT25UYXJnZXRbaGl0c09uVGFyZ2V0Lmxlbmd0aCAtIDFdKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5jcHVIYW5kbGVDZWxsKGhpdHNPblRhcmdldFtoaXRzT25UYXJnZXQubGVuZ3RoIC0gMV0pXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5jcHVIYW5kbGVDZWxsKGhpdHNPblRhcmdldFswXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGN1cnIgPSB0aGlzLnNlbGVjdFJhbmRvbUNlbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyID09PSB1bmRlZmluZWQpIGN1cnIgPSB0aGlzLnNlbGVjdFJhbmRvbUNlbGwoKTtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgICAgICAgcHJldlNob3RSZXN1bHQgPSB0aGlzLnBsYXllcjEuYm9hcmQuaGFuZGxlQXR0YWNrKHBhcnNlSW50KGN1cnIpKTtcbiAgICAgICAgICAgIGlmIChsaXZlVGFyZ2V0ICE9PSBudWxsICYmIHByZXZTaG90UmVzdWx0WzBdICE9PSBsaXZlVGFyZ2V0ICYmIHByZXZTaG90UmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBbbGl2ZVRhcmdldF0gPSBwcmV2U2hvdFJlc3VsdDtcbiAgICAgICAgICAgICAgaGl0c09uVGFyZ2V0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldlNob3RSZXN1bHQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgIFtsaXZlVGFyZ2V0XSA9IHByZXZTaG90UmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldlNob3RSZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGNvbG9yQ2VsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQteW91IFtkYXRhLWNvb3JkPVwiJHtjdXJyfVwiXWApLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xvckNlbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLXlvdSBbZGF0YS1jb29yZD0nJHtjdXJyfSddYCksIHRydWUpO1xuICAgICAgICAgICAgICBpZiAocHJldlNob3RSZXN1bHRbMF0uaGFzU2hpcFN1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hpcE5hbWUgfSA9IHByZXZTaG90UmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgIHN1bmtTaGlwKHRoaXMucGxheWVyMS5uYW1lLCBgJHtzaGlwTmFtZX1gLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBwcmV2U2hvdFJlc3VsdC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGhpdHNPblRhcmdldC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGxpdmVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhpdHNPblRhcmdldC5wdXNoKGN1cnIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtYWknKS5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1haScpLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9zc2libGVHYW1lT3Zlcih0aGlzLnBsYXllcjEpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZVN0YXR1cygnZXJyb3Itd3JhcHBlcicsICdlcnJvci10aXRsZS1oZWFkZXInLCAnT29wcycsICdlcnJvci1tZXNzYWdlLXAnLCBgJHtlcnJ9IWApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdhbWVJbml0KCkge1xuICAgIHRoaXMucGxheWVyMi5wb3NpdGlvbkFpU2hpcHMoKTtcbiAgICB0aGlzLnR1cm5EZWZhdWx0KCk7XG4gICAgdGhpcy5maW5kQWN0aXZlUGxheWVyKCk7XG4gICAgdGhpcy5oYW5kbGVCb2FyZHMoKTtcbiAgICB0aGlzLmdhbWVPbigpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQge1xuICByb3RhdGVEb21TaGlwcyxcbiAgZ2VuZXJhdGVEb21TaGlwLFxuICB1bm1hcmtQbGFjZWRTaGlwcyxcbiAgbWFya2VkUGxhY2VkU2hpcCxcbiAgaGFuZGxlU3RhdHVzLFxufSBmcm9tICcuLi9Eb20vZG9tLWhlbHBlcnMuanMnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgQ29udHJvbGxlcigpO1xuICAgIHRoaXMucGxheWVySHVtYW4gPSB0aGlzLnNldHRpbmdzLnBsYXllcjE7XG4gICAgdGhpcy5wbGF5ZXJBSSA9IHRoaXMuc2V0dGluZ3MucGxheWVyMjtcbiAgICB0aGlzLnBsYXllckh1bWFuRmxlZXQgPSB0aGlzLnBsYXllckh1bWFuLmJvYXJkLmV4aXN0aW5nU2hpcHMoKTtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyIC5zaGlwLWNvbnQnKTtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NUG9zaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLXlvdSAuYm94Jyk7XG4gICAgdGhpcy5yb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlJyk7XG4gICAgdGhpcy5wbGF5ZXJIdW1hblJlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50U2hpcExlbmd0aCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50U2hpcE9yaWVudGF0aW9uID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRTaGlwSUQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFNoaXBPYmogPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFNoaXBET01PYmogPSBudWxsO1xuICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlRG9tUGxhY2VtZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbmRpY2F0ZSA9IHRoaXMuaW5kaWNhdGVTaGlwUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmVuYWJsZVNoaXBzID0gdGhpcy5lbmFibGVEb21TaGlwcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZW5hYmxlUm90YXRlQnV0dG9uKCkge1xuICAgIHRoaXMucm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlRG9tU2hpcHMpO1xuICB9XG5cbiAgZGlzYWJsZVJvdGF0ZUJ1dHRvbigpIHtcbiAgICB0aGlzLnJvdGF0ZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZURvbVNoaXBzKTtcbiAgfVxuXG4gIGNsZWFyVW51c2VkUGxhY2luZ0luZGljYXRpb25zKHNoaXApIHtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NU2hpcHMuZm9yRWFjaCgoc2hpcE1vZGVsKSA9PiB7XG4gICAgICBpZiAoc2hpcE1vZGVsICE9PSBzaGlwKSBzaGlwTW9kZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1ub3cnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZURvbVNoaXBzKGUpIHtcbiAgICB0aGlzLmNsZWFyVW51c2VkUGxhY2luZ0luZGljYXRpb25zKGUudGFyZ2V0KTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLW5vdycpO1xuICAgIHRoaXMuY3VycmVudFNoaXBMZW5ndGggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0Lmxlbmd0aCk7XG4gICAgdGhpcy5jdXJyZW50U2hpcE9yaWVudGF0aW9uID0gZS50YXJnZXQuZGF0YXNldC5vcmllbnRhdGlvbjtcbiAgICB0aGlzLmN1cnJlbnRTaGlwSUQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICB0aGlzLmN1cnJlbnRTaGlwT2JqID0gdGhpcy5zZXR0aW5ncy5wbGF5ZXIxLnNoaXBzW3RoaXMuY3VycmVudFNoaXBJRF07XG4gICAgdGhpcy5jdXJyZW50U2hpcERPTU9iaiA9IGUudGFyZ2V0O1xuICB9XG5cbiAgZW5hYmxlRG9tU2hpcFBsYWNlbWVudCgpIHtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZW5hYmxlU2hpcHMpKTtcbiAgfVxuXG4gIGRpc2FibGVEb21TaGlwUGxhY2VtZW50KCkge1xuICAgIHRoaXMucGxheWVySHVtYW5ET01TaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lbmFibGVTaGlwcykpO1xuICB9XG5cbiAgcmVzZXRTZWxlY3RlZFZhbHVlcygpIHtcbiAgICB0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRTaGlwT3JpZW50YXRpb24gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFNoaXBJRCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50U2hpcE9iaiA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50U2hpcERPTU9iaiA9IG51bGw7XG4gIH1cblxuICBlbmFibGVTaGlwSW5kaWNhdGlvbigpIHtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICBwb3NpdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLmluZGljYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGVTaGlwSW5kaWNhdGlvbigpIHtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICBwb3NpdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLmluZGljYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlRG9tUGxhY2VtZW50KGUpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U2hpcERPTU9iaiA9PT0gbnVsbCkge1xuICAgICAgaGFuZGxlU3RhdHVzKFxuICAgICAgICAnZXJyb3Itd3JhcHBlcicsXG4gICAgICAgICdlcnJvci10aXRsZS1oZWFkZXInLFxuICAgICAgICAnQ2FwdGFpbiEnLFxuICAgICAgICAnZXJyb3ItbWVzc2FnZS1wJyxcbiAgICAgICAgYFBsZWFzZSB0YXAgb24gdGhlIHNoaXAgeW91IHdhbnQgdG8gcGxhY2UhYFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncy5wbGF5ZXIxLnNoaXBzW3RoaXMuY3VycmVudFNoaXBJRF0ub3JpZW50YXRpb24gPSB0aGlzLmN1cnJlbnRTaGlwT3JpZW50YXRpb247XG4gICAgY29uc3QgY2xpY2tlZENvb3JkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb29yZCk7XG4gICAgY29uc3QgaXNSb3RhdGVkID0gdGhpcy5jdXJyZW50U2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wbGF5ZXJIdW1hbi5ib2FyZC5pc1Bvc2l0aW9uVmFsaWQoXG4gICAgICAgIGNsaWNrZWRDb29yZCxcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcExlbmd0aCxcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcE9yaWVudGF0aW9uLFxuICAgICAgICBpc1JvdGF0ZWRcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMucGxheWVySHVtYW4uYm9hcmQucGxhY2VTaGlwKGNsaWNrZWRDb29yZCwgdGhpcy5wbGF5ZXJIdW1hbi5zaGlwc1t0aGlzLmN1cnJlbnRTaGlwSURdKTtcbiAgICAgIGdlbmVyYXRlRG9tU2hpcChcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcE9iai5zaGlwTmFtZSxcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcE9yaWVudGF0aW9uLFxuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoLFxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvb3JkKVxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGxheWVyMS5zaGlwc1t0aGlzLmN1cnJlbnRTaGlwSURdLnNldFBvc2l0aW9uKGNsaWNrZWRDb29yZCwgdGhpcy5jdXJyZW50U2hpcE9yaWVudGF0aW9uKTtcbiAgICAgIG1hcmtlZFBsYWNlZFNoaXAodGhpcy5jdXJyZW50U2hpcERPTU9iaik7XG4gICAgICB0aGlzLnJlc2V0U2VsZWN0ZWRWYWx1ZXMoKTtcbiAgICAgIHRoaXMuY2hlY2tHYW1lUmVhZHkoKTtcbiAgICB9XG4gIH1cblxuICBhbGxvd0RvbVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgdGhpcy5wbGF5ZXJIdW1hbkRPTVBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgICAgcG9zaXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnZhbGlkYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FsbG93RG9tU2hpcFBsYWNlbWVudCgpIHtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICBwb3NpdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudmFsaWRhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJVbnVzZWRJbmRpY2F0aW9ucygpIHtcbiAgICB0aGlzLnBsYXllckh1bWFuRE9NUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiBwb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0ZS1wbGFjZW1lbnQnKSk7XG4gIH1cblxuICBpbmRpY2F0ZVNoaXBQb3NpdGlvbihlKSB7XG4gICAgdGhpcy5jbGVhclVudXNlZEluZGljYXRpb25zKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudFNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29vcmQpO1xuICAgICAgICBpIDwgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb29yZCkgKyB0aGlzLmN1cnJlbnRTaGlwTGVuZ3RoO1xuICAgICAgICBpICs9IDFcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXh0UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQteW91IFtkYXRhLWNvb3JkPScke2l9J11gKTtcbiAgICAgICAgaWYgKG5leHRQb2ludCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBuZXh0UG9pbnQuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdGUtcGxhY2VtZW50Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb29yZCk7XG4gICAgICAgIGkgPCBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvb3JkKSArIHRoaXMuY3VycmVudFNoaXBMZW5ndGggKiAxMDtcbiAgICAgICAgaSArPSAxMFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG5leHRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC15b3UgW2RhdGEtY29vcmQ9JyR7aX0nXWApO1xuICAgICAgICBpZiAobmV4dFBvaW50ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIG5leHRQb2ludC5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0ZS1wbGFjZW1lbnQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplUGxhY2VtZW50KCkge1xuICAgIHRoaXMuZW5hYmxlUm90YXRlQnV0dG9uKCk7XG4gICAgdGhpcy5lbmFibGVTaGlwSW5kaWNhdGlvbigpO1xuICAgIHRoaXMuZW5hYmxlRG9tU2hpcFBsYWNlbWVudCgpO1xuICAgIHRoaXMuYWxsb3dEb21TaGlwUGxhY2VtZW50KCk7XG4gIH1cblxuICBjaGVja0dhbWVSZWFkeSgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXJIdW1hbi5hcmVTaGlwc1BsYWNlZCgpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRpc2FibGVSb3RhdGVCdXR0b24oKTtcbiAgICAgIHRoaXMuZGlzYWJsZURvbVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgIHRoaXMuZGlzYWJsZVNoaXBJbmRpY2F0aW9uKCk7XG4gICAgICB0aGlzLmRpc2FsbG93RG9tU2hpcFBsYWNlbWVudCgpO1xuICAgICAgdW5tYXJrUGxhY2VkU2hpcHModGhpcy5wbGF5ZXJIdW1hbkRPTVNoaXBzKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplR2FtZSgpIHtcbiAgICB0aGlzLnNldHRpbmdzLmdhbWVJbml0KCk7XG4gIH1cbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGV0ZXJtaW5lUG9zaXRpb24gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aWR0aCA9IDEwO1xuICAgIHRoaXMuYXJlYSA9IF8ucmFuZ2UoMCwgdGhpcy53aWR0aCAqKiAyKTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgdGhpcy5jdXJyZW50U2hpcHMgPSBbXTtcbiAgICB0aGlzLmF0dGFja2VkQ29vcmRzID0gW107XG4gIH1cblxuICByZW1haW5pbmdVbm9jY3VwaWVkQ2VsbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJlYS5maWx0ZXIoKGNlbGwpID0+ICF0aGlzLmF0dGFja2VkQ29vcmRzLmluY2x1ZGVzKGNlbGwpKTtcbiAgfVxuXG4gIG1pc3NlZEF0dGFja3MgPSAoKSA9PiB0aGlzLm1pc3NlZFNob3RzO1xuXG4gIGV4aXN0aW5nU2hpcHMgPSAoKSA9PiB0aGlzLmN1cnJlbnRTaGlwcztcblxuICBhdHRhY2tlZENvb3JkaW5hdGVzID0gKCkgPT4gdGhpcy5hdHRhY2tlZENvb3JkcztcblxuICBzZXRDdXJyZW50U2hpcHMgPSAoc2hpcCkgPT4gdGhpcy5jdXJyZW50U2hpcHMucHVzaChzaGlwKTtcblxuICBpc1Bvc2l0aW9uVmFsaWQoY29vcmQsIHNoaXBMZW5ndGgsIHNoaXBPcmllbnRhdGlvbiwgcm90YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbiA9IGRldGVybWluZVBvc2l0aW9uKGNvb3JkLCBzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24pO1xuICAgIGlmIChzaGlwUG9zaXRpb25bc2hpcExlbmd0aCAtIDFdID49IDEwMCB8fCBzaGlwUG9zaXRpb25bc2hpcExlbmd0aCAtIDFdICUgMTAgPCBjb29yZCAlIDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbnMgPSBbXTtcbiAgICB0aGlzLmV4aXN0aW5nU2hpcHMoKS5mb3JFYWNoKChzaGlwKSA9PiBjdXJyZW50UG9zaXRpb25zLnB1c2goc2hpcC5wb3NpdGlvbikpO1xuICAgIC8vIGNvbXBhcmVzIGV4aXN0aW5nIHBvc2l0aW9ucyB3aXRoIHRoZSBleHBlY3RlZCBwb3NpdGlvbiBvZiB0aGUgc2hpcFxuICAgIGlzVmFsaWQgPVxuICAgICAgcm90YXRlZCA9PT0gdHJ1ZVxuICAgICAgICA/ICFjdXJyZW50UG9zaXRpb25zLmZsYXQoKS5zb21lKChwb3NpdGlvbikgPT4gc2hpcFBvc2l0aW9uLnNsaWNlKDEpLmluY2x1ZGVzKHBvc2l0aW9uKSlcbiAgICAgICAgOiAhY3VycmVudFBvc2l0aW9ucy5mbGF0KCkuc29tZSgocG9zaXRpb24pID0+IHNoaXBQb3NpdGlvbi5zbGljZSgwKS5pbmNsdWRlcyhwb3NpdGlvbikpO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvb3JkLCBzaGlwKSB7XG4gICAgaWYgKCF0aGlzLmlzUG9zaXRpb25WYWxpZChjb29yZCwgc2hpcC5sZW5ndGgsIHNoaXAub3JpZW50YXRpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRTaGlwcy5zb21lKChzaGlwcykgPT4gc2hpcHMgPT09IHNoaXApKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cbiAgICBzaGlwLnNldFBvc2l0aW9uKGNvb3JkLCBzaGlwLm9yaWVudGF0aW9uKTtcbiAgfVxuXG4gIHJvdGF0ZVNoaXAoc2hpcCkge1xuICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoIXRoaXMuaXNQb3NpdGlvblZhbGlkKHNoaXAucG9zaXRpb25bMF0sIHNoaXAubGVuZ3RoLCAnaG9yaXpvbnRhbCcsIHRydWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwbGFjZW1lbnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuc2V0UG9zaXRpb24oc2hpcC5wb3NpdGlvblswXSwgJ2hvcml6b250YWwnKTtcbiAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzUG9zaXRpb25WYWxpZChzaGlwLnBvc2l0aW9uWzBdLCBzaGlwLmxlbmd0aCwgJ3ZlcnRpY2FsJywgdHJ1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwbGFjZW1lbnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcC5zZXRQb3NpdGlvbihzaGlwLnBvc2l0aW9uWzBdLCAndmVydGljYWwnKTtcbiAgICAgIHNoaXAub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUF0dGFjayhjb29yZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHNoaXBzID0gdGhpcy5leGlzdGluZ1NoaXBzKCk7XG4gICAgaWYgKHRoaXMuYXR0YWNrZWRDb29yZHMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCcpO1xuICAgIH1cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5wb3NpdGlvbi5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgc2hpcC5oaXQoY29vcmQpO1xuICAgICAgICByZXN1bHQucHVzaChzaGlwKTtcbiAgICAgICAgdGhpcy5hdHRhY2tlZENvb3Jkcy5wdXNoKGNvb3JkKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmF0dGFja2VkQ29vcmRzLnB1c2goY29vcmQpO1xuICAgIHRoaXMubWlzc2VkU2hvdHMucHVzaChjb29yZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlbWFpbmluZ1NoaXBzID0gKCkgPT4gdGhpcy5leGlzdGluZ1NoaXBzKCkuZmlsdGVyKChzaGlwKSA9PiAhc2hpcC5oYXNTaGlwU3VuaygpKS5sZW5ndGg7XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5taXNzZWRTaG90cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuY3VycmVudFNoaXBzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5hdHRhY2tlZENvb3Jkcy5sZW5ndGggPSAwO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5zaGlwcyA9IHRoaXMuZ2VuZXJhdGVTaGlwcygpO1xuICB9XG5cbiAgZ2V0RG9tQm9hcmQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC0ke3RoaXMubmFtZX1gKTtcbiAgfVxuXG4gIGRpc2FibGVEb21Cb2FyZCgpIHtcbiAgICB0aGlzLmdldERvbUJvYXJkKCkuY2xhc3NMaXN0LmFkZCgnYm9hcmQtaW5hY3RpdmUnKTtcbiAgfVxuXG4gIGVuYWJsZURvbUJvYXJkKCkge1xuICAgIHRoaXMuZ2V0RG9tQm9hcmQoKS5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZC1pbmFjdGl2ZScpO1xuICB9XG5cbiAgZ2VuZXJhdGVTaGlwcygpIHtcbiAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoJ2NhcnJpZXInLCA1KTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcbiAgICBjb25zdCBjcnVpc2VyMSA9IG5ldyBTaGlwKCdjcnVpc2VyMScsIDMpO1xuICAgIGNvbnN0IGNydWlzZXIyID0gbmV3IFNoaXAoJ2NydWlzZXIyJywgMyk7XG4gICAgY29uc3QgcGF0cm9sID0gbmV3IFNoaXAoJ3BhdHJvbCcsIDIpO1xuICAgIHJldHVybiBbcGF0cm9sLCBjcnVpc2VyMSwgY3J1aXNlcjIsIGJhdHRsZXNoaXAsIGNhcnJpZXJdO1xuICB9XG5cbiAgcG9zaXRpb25BaVNoaXBzKCkge1xuICAgIGNvbnN0IHBvc3NpYmxlT3JpZW50YXRpb25zID0gWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNoaXBUb0JlUGxhY2VkID0gdGhpcy5zaGlwc1tpXTtcbiAgICAgIC8vIHJhbmRvbWx5IGdlbmVyYXRpbmcgc2hpcCBvcmllbnRhdGlvblxuICAgICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBwb3NzaWJsZU9yaWVudGF0aW9uc1tfLnJhbmRvbSgwLCAxKV07XG4gICAgICBzaGlwVG9CZVBsYWNlZC5vcmllbnRhdGlvbiA9IHJhbmRvbU9yaWVudGF0aW9uO1xuICAgICAgLy8gcmFuZG9tbHkgZ2VuZXJhdGluZyBjb29yZHMgYW5kIGNoZWNraW5nIHdoZXRoZXIgdGhlIHBvc2l0aW9uJ3MgdmFsaWRcbiAgICAgIGxldCBjb29yZCA9IF8ucmFuZG9tKDAsIDEwMCk7XG4gICAgICB3aGlsZSAoIXRoaXMuYm9hcmQuaXNQb3NpdGlvblZhbGlkKGNvb3JkLCBzaGlwVG9CZVBsYWNlZC5sZW5ndGgsIHJhbmRvbU9yaWVudGF0aW9uLCBmYWxzZSkpIHtcbiAgICAgICAgY29vcmQgPSBfLnJhbmRvbSgwLCAxMDApO1xuICAgICAgfVxuICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoY29vcmQsIHNoaXBUb0JlUGxhY2VkKTtcbiAgICB9XG4gIH1cblxuICByZXNldFNoaXBzKCkge1xuICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5yZXNldCgpKTtcbiAgfVxuXG4gIGF0dGFjayhlbmVteUJvYXJkLCBjb29yZCkge1xuICAgIGVuZW15Qm9hcmQuaGFuZGxlQXR0YWNrKGNvb3JkKTtcbiAgfVxuXG4gIGFyZVNoaXBzUGxhY2VkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuc2hpcHNbaV0ucG9zaXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCBkZXRlcm1pbmVQb3NpdGlvbiBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgdGhpcy5zaGlwTmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9XG5cbiAgc2V0UG9zaXRpb24oc3RhcnRpbmdDb29yZGluYXRlLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24ubGVuZ3RoID0gMDtcbiAgICBkZXRlcm1pbmVQb3NpdGlvbihzdGFydGluZ0Nvb3JkaW5hdGUsIHRoaXMubGVuZ3RoLCBvcmllbnRhdGlvbikuZm9yRWFjaCgoY29vcmQpID0+IHRoaXMucG9zaXRpb24ucHVzaChjb29yZCkpO1xuICB9XG5cbiAgaGl0KGNvb3JkKSB7XG4gICAgdGhpcy5oaXRzLnB1c2goY29vcmQpO1xuICB9XG5cbiAgaGFzU2hpcFN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbi5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGl0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBtYXBzIHRoZSBpbm5lciBwYXJ0IG9mIHRoZSBib2FyZCwgdG8gbG9jYXRlIHRoZSBlbmVteSBzaGlwIGJhc2VkIG9uIGEgZGlyZWN0aW9uIGh5cG90aGVzaXNcbmZ1bmN0aW9uIGZpbmRWYWxpZFhZKGNlbGxJRCwgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJykge1xuICBjb25zdCB0b3BDb25zdHJhaW50cyA9IF8ucmFuZ2UoMSwgOSk7XG4gIGNvbnN0IGJvdHRvbUNvbnN0cmFpbnRzID0gXy5yYW5nZSg5MSwgOTkpO1xuICBjb25zdCByaWdodENvbnN0cmFpbnRzID0gXy5yYW5nZSgxOSwgOTksIDEwKTtcbiAgY29uc3QgbGVmdENvbnN0cmFpbnRzID0gXy5yYW5nZSgxMCwgOTAsIDEwKTtcbiAgbGV0IHZhbGlkT3B0aW9ucyA9IFtdO1xuICBsZXQgY29uc3RyYWludHM7XG4gIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGNvbnN0cmFpbnRzID0gWzAsIDksIDkwLCA5OSwgLi4ubGVmdENvbnN0cmFpbnRzLCAuLi5yaWdodENvbnN0cmFpbnRzXTtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgY29uc3RyYWludHMuaW5jbHVkZXMoY2VsbElEKTpcbiAgICAgICAgdmFsaWRPcHRpb25zID0gJ25vcGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9wQ29uc3RyYWludHMuaW5jbHVkZXMoY2VsbElEKTpcbiAgICAgIGNhc2UgYm90dG9tQ29uc3RyYWludHMuaW5jbHVkZXMoY2VsbElEKTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbGlkT3B0aW9ucyA9IFtjZWxsSUQgLSAxLCBjZWxsSUQgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIGNvbnN0cmFpbnRzID0gWzAsIDksIDkwLCA5OSwgLi4udG9wQ29uc3RyYWludHMsIC4uLmJvdHRvbUNvbnN0cmFpbnRzXTtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgY29uc3RyYWludHMuaW5jbHVkZXMoY2VsbElEKTpcbiAgICAgICAgdmFsaWRPcHRpb25zID0gJ25vcGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbGVmdENvbnN0cmFpbnRzLmluY2x1ZGVzKGNlbGxJRCk6XG4gICAgICBjYXNlIHJpZ2h0Q29uc3RyYWludHMuaW5jbHVkZXMoY2VsbElEKTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbGlkT3B0aW9ucyA9IFtjZWxsSUQgLSAxMCwgY2VsbElEICsgMTBdO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGNlbGxJRCA9PT0gMDpcbiAgICAgICAgdmFsaWRPcHRpb25zID0gW2NlbGxJRCArIDEsIGNlbGxJRCArIDEwXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNlbGxJRCA9PT0gOTpcbiAgICAgICAgdmFsaWRPcHRpb25zID0gW2NlbGxJRCAtIDEsIGNlbGxJRCArIDEwXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNlbGxJRCA9PT0gOTA6XG4gICAgICAgIHZhbGlkT3B0aW9ucyA9IFtjZWxsSUQgKyAxLCBjZWxsSUQgLSAxMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjZWxsSUQgPT09IDk5OlxuICAgICAgICB2YWxpZE9wdGlvbnMgPSBbY2VsbElEIC0gMSwgY2VsbElEIC0gMTBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbGVmdENvbnN0cmFpbnRzLmluY2x1ZGVzKGNlbGxJRCk6XG4gICAgICAgIHZhbGlkT3B0aW9ucyA9IFtjZWxsSUQgKyAxLCBjZWxsSUQgLSAxMCwgY2VsbElEICsgMTBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcmlnaHRDb25zdHJhaW50cy5pbmNsdWRlcyhjZWxsSUQpOlxuICAgICAgICB2YWxpZE9wdGlvbnMgPSBbY2VsbElEIC0gMSwgY2VsbElEIC0gMTAsIGNlbGxJRCArIDEwXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvcENvbnN0cmFpbnRzLmluY2x1ZGVzKGNlbGxJRCk6XG4gICAgICAgIHZhbGlkT3B0aW9ucyA9IFtjZWxsSUQgLSAxLCBjZWxsSUQgKyAxLCBjZWxsSUQgKyAxMF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBib3R0b21Db25zdHJhaW50cy5pbmNsdWRlcyhjZWxsSUQpOlxuICAgICAgICB2YWxpZE9wdGlvbnMgPSBbY2VsbElEIC0gMSwgY2VsbElEICsgMSwgY2VsbElEIC0gMTBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbGlkT3B0aW9ucyA9IFtjZWxsSUQgLSAxLCBjZWxsSUQgKyAxLCBjZWxsSUQgLSAxMCwgY2VsbElEICsgMTBdO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gZmlsdGVyQXR0YWNrZWRDZWxscyh2YWxpZCwgYXR0YWNrZWQpIHtcbiAgaWYgKHZhbGlkID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiB2YWxpZC5maWx0ZXIoKGNlbGwpID0+ICFhdHRhY2tlZC5pbmNsdWRlcyhjZWxsKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRFbmVteURpcmVjdGlvbihzdWNjZXNzZnVsSGl0cykge1xuICByZXR1cm4gTWF0aC5hYnMoc3VjY2Vzc2Z1bEhpdHNbMF0gLSBzdWNjZXNzZnVsSGl0c1sxXSkgPiAxID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbn1cblxuZXhwb3J0IHsgZmluZFZhbGlkWFksIGZpbmRFbmVteURpcmVjdGlvbiwgZmlsdGVyQXR0YWNrZWRDZWxscyB9O1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVCb2FyZCwgaW5pdGlhbGl6ZUdhbWVET00gfSBmcm9tICcuLi9Eb20vZG9tLWhlbHBlcnMuanMnO1xuXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xuXG5mdW5jdGlvbiBoaWRlRXJyb3IoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnZXJyLWFjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBoaWRlSW50cm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1ub3cnKTtcbiAgY29uc3QgZXJyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1lcnInKTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFnYWluJyk7XG5cbiAgZXJyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUVycm9yKTtcblxuICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydCk7XG5cbiAgaGlkZUludHJvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGJvdGhCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcbiAgICBpbml0aWFsaXplR2FtZURPTSgpO1xuICAgIHBvcHVsYXRlQm9hcmQoLi4uYm90aEJvYXJkcyk7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgZ2FtZS5pbml0aWFsaXplUGxhY2VtZW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBlbmFibGVFdmVudExpc3RlbmVycyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZXJtaW5lUG9zaXRpb24ob3JpZ2luYWxDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBmaW5hbFBvc2l0aW9uID0gW107XG4gIGZpbmFsUG9zaXRpb25bMF0gPSBvcmlnaW5hbENvb3JkO1xuICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmaW5hbFBvc2l0aW9uW2ldID0gZmluYWxQb3NpdGlvbltpIC0gMV0gKyAxMDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZmluYWxQb3NpdGlvbltpXSA9IGZpbmFsUG9zaXRpb25baSAtIDFdICsgMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbmFsUG9zaXRpb247XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jc3NcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwibWFpbi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdhYmU2OTE2M2EzZTM1MjFkYTFiXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiYmF0dGxlc2hpcDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXM7XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0d2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwidmFyIGNyZWF0ZVN0eWxlc2hlZXQgPSAoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0dmFyIG9uTGlua0NvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzLlxuXHRcdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gbnVsbDtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHR2YXIgcmVhbEhyZWYgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmhyZWYgfHwgZnVsbGhyZWY7XG5cdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlYWxIcmVmICsgXCIpXCIpO1xuXHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuXHRcdFx0ZXJyLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRlcnIucmVxdWVzdCA9IHJlYWxIcmVmO1xuXHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG5cdFx0XHRyZWplY3QoZXJyKTtcblx0XHR9XG5cdH1cblx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBvbkxpbmtDb21wbGV0ZTtcblx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcblx0cmV0dXJuIGxpbmtUYWc7XG59O1xudmFyIGZpbmRTdHlsZXNoZWV0ID0gKGhyZWYsIGZ1bGxocmVmKSA9PiB7XG5cdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiB0YWc7XG5cdH1cblx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG5cdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gdGFnO1xuXHR9XG59O1xudmFyIGxvYWRTdHlsZXNoZWV0ID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHRpZihmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0Y3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbnZhciBvbGRUYWdzID0gW107XG52YXIgbmV3VGFncyA9IFtdO1xudmFyIGFwcGx5SGFuZGxlciA9IChvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7IGRpc3Bvc2U6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb2xkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG9sZFRhZyA9IG9sZFRhZ3NbaV07XG5cdFx0XHRpZihvbGRUYWcucGFyZW50Tm9kZSkgb2xkVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkVGFnKTtcblx0XHR9XG5cdFx0b2xkVGFncy5sZW5ndGggPSAwO1xuXHR9LCBhcHBseTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuZXdUYWdzLmxlbmd0aDsgaSsrKSBuZXdUYWdzW2ldLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRcdG5ld1RhZ3MubGVuZ3RoID0gMDtcblx0fSB9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLm1pbmlDc3MgPSAoY2h1bmtJZHMsIHJlbW92ZWRDaHVua3MsIHJlbW92ZWRNb2R1bGVzLCBwcm9taXNlcywgYXBwbHlIYW5kbGVycywgdXBkYXRlZE1vZHVsZXNMaXN0KSA9PiB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjaHVua0lkcy5mb3JFYWNoKChjaHVua0lkKSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0dmFyIG9sZFRhZyA9IGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKTtcblx0XHRpZighb2xkVGFnKSByZXR1cm47XG5cdFx0cHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR2YXIgdGFnID0gY3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgKCkgPT4ge1xuXHRcdFx0XHR0YWcuYXMgPSBcInN0eWxlXCI7XG5cdFx0XHRcdHRhZy5yZWwgPSBcInByZWxvYWRcIjtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdG9sZFRhZ3MucHVzaChvbGRUYWcpO1xuXHRcdFx0bmV3VGFncy5wdXNoKHRhZyk7XG5cdFx0fSkpO1xuXHR9KTtcbn0iLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZWJhdHRsZXNoaXBcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXR0bGVzaGlwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JhdHRsZXNoaXBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcIm5wbS5iYWJlbFwiLFwibnBtLm1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXCIsXCJucG0ubG9kYXNoXCIsXCJucG0uZm9ydGF3ZXNvbWVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwibDZxWVwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImVsZW1lbnRDcmVhdG9yIiwiZWwiLCJlbENsYXNzIiwiZWxJRCIsImF0dHIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwicG9wdWxhdGVCb2FyZCIsImJvYXJkcyIsImZvckVhY2giLCJib2FyZCIsImkiLCJhcHBlbmRDaGlsZCIsImVuYWJsZUJvYXJkIiwiYm9hcmROYW1lIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImRpc2FibGVCb2FyZCIsImNvbG9yQ2VsbCIsImNlbGwiLCJoaXRPck5vdCIsInN1bmtTaGlwIiwicmVjZWl2aW5nUGxheWVyIiwidGFyZ2V0Iiwic3RhdHVzIiwiaW5pdGlhbGl6ZUdhbWVET00iLCJoZXJvRGl2IiwiaGVhZGVyIiwibWFpbiIsImhhbmRsZVN0YXR1cyIsInRhcmdldFBhcmVudCIsInRhcmdldDEiLCJzdGF0dXMxIiwidGFyZ2V0MiIsInN0YXR1czIiLCJzdGF0ZSIsInBhcmVudEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsImdlbmVyYXRlRG9tU2hpcCIsIm5hbWUiLCJvcmllbnRhdGlvbiIsImxlbiIsInNlbGVjdGVkQ29vcmRpbmF0ZSIsImFjdGlvbiIsIm5leHRQb2ludCIsIm1hcmtlZFBsYWNlZFNoaXAiLCJ1bm1hcmtQbGFjZWRTaGlwcyIsInNoaXBzIiwic2hpcCIsInJvdGF0ZURvbVNoaXBzIiwiZGVzY3JpcHRpb24iLCJhbGxEb21TaGlwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50T3JpZW50YXRpb24iLCJkYXRhc2V0IiwiZW5hYmxlRXZlbnRMaXN0ZW5lcnMiLCJfIiwiUGxheWVyIiwiZmluZFZhbGlkWFkiLCJmaWx0ZXJBdHRhY2tlZENlbGxzIiwiZmluZEVuZW15RGlyZWN0aW9uIiwiQ29udHJvbGxlciIsInBsYXllcnMiLCJmaW5kIiwicGxheWVyIiwiZmluZEFjdGl2ZVBsYXllciIsInR1cm4iLCJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaXRTdWNjZXNzIiwiaGFuZGxlQXR0YWNrIiwicGFyc2VJbnQiLCJjb29yZCIsImxlbmd0aCIsImhhbmRsZVBvc3NpYmxlU3VuayIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY3VycmVudFBsYXllciIsImdldEN1cnJlbnRQbGF5ZXJUdXJuIiwiZGlzYWJsZURvbUJvYXJkIiwiZ2V0RG9tQm9hcmQiLCJlbmFibGVEb21Cb2FyZCIsImhhbmRsZVR1cm4iLCJoYW5kbGVCb2FyZHMiLCJyZW1haW5pbmdTaGlwcyIsInR1cm5EZWZhdWx0Iiwic2hpcFN0YXR1cyIsImhhc1NoaXBTdW5rIiwic2hpcE5hbWUiLCJhdmFpbGFibGVDZWxscyIsInJlbWFpbmluZ1Vub2NjdXBpZWRDZWxscyIsInJhbmRvbUNob2ljZSIsInJhbmRvbSIsInByZXYiLCJwcmV2aW91c0NlbGwiLCJ1bmRlZmluZWQiLCJjb29yZHNUb0JlQXR0YWNrZWQiLCJhdHRhY2tlZENvb3JkaW5hdGVzIiwiYXZhaWxDZWxsT3B0aW9ucyIsImlzR2FtZU92ZXIiLCJnYW1lT3ZlciIsInR1cm5Db21wbGV0ZSIsInNlbGVjdFJhbmRvbUNlbGwiLCJwcmV2U2hvdFJlc3VsdCIsImhpdHNPblRhcmdldCIsImxpdmVUYXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsInRoZW4iLCJoYW5kbGVQb3NzaWJsZUdhbWVPdmVyIiwiY3VyciIsImNwdUhhbmRsZUNlbGwiLCJwdXNoIiwiZXJyIiwicG9zaXRpb25BaVNoaXBzIiwiZ2FtZU9uIiwiR2FtZSIsInNldHRpbmdzIiwicGxheWVySHVtYW4iLCJwbGF5ZXJBSSIsInBsYXllckh1bWFuRmxlZXQiLCJleGlzdGluZ1NoaXBzIiwicGxheWVySHVtYW5ET01TaGlwcyIsInBsYXllckh1bWFuRE9NUG9zaXRpb25zIiwicm90YXRlQnRuIiwicGxheWVySHVtYW5SZWFkeSIsImN1cnJlbnRTaGlwTGVuZ3RoIiwiY3VycmVudFNoaXBPcmllbnRhdGlvbiIsImN1cnJlbnRTaGlwSUQiLCJjdXJyZW50U2hpcE9iaiIsImN1cnJlbnRTaGlwRE9NT2JqIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZURvbVBsYWNlbWVudCIsImJpbmQiLCJpbmRpY2F0ZSIsImluZGljYXRlU2hpcFBvc2l0aW9uIiwiZW5hYmxlU2hpcHMiLCJlbmFibGVEb21TaGlwcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaGlwTW9kZWwiLCJjbGVhclVudXNlZFBsYWNpbmdJbmRpY2F0aW9ucyIsImlkIiwicG9zaXRpb24iLCJjbGlja2VkQ29vcmQiLCJpc1JvdGF0ZWQiLCJpc1Bvc2l0aW9uVmFsaWQiLCJwbGFjZVNoaXAiLCJzZXRQb3NpdGlvbiIsInJlc2V0U2VsZWN0ZWRWYWx1ZXMiLCJjaGVja0dhbWVSZWFkeSIsImNsZWFyVW51c2VkSW5kaWNhdGlvbnMiLCJlbmFibGVSb3RhdGVCdXR0b24iLCJlbmFibGVTaGlwSW5kaWNhdGlvbiIsImVuYWJsZURvbVNoaXBQbGFjZW1lbnQiLCJhbGxvd0RvbVNoaXBQbGFjZW1lbnQiLCJhcmVTaGlwc1BsYWNlZCIsImRpc2FibGVSb3RhdGVCdXR0b24iLCJkaXNhYmxlRG9tU2hpcFBsYWNlbWVudCIsImRpc2FibGVTaGlwSW5kaWNhdGlvbiIsImRpc2FsbG93RG9tU2hpcFBsYWNlbWVudCIsImluaXRpYWxpemVHYW1lIiwiZ2FtZUluaXQiLCJkZXRlcm1pbmVQb3NpdGlvbiIsIkdhbWVib2FyZCIsIm1pc3NlZFNob3RzIiwiY3VycmVudFNoaXBzIiwiYXR0YWNrZWRDb29yZHMiLCJmaWx0ZXIiLCJ3aWR0aCIsImFyZWEiLCJyYW5nZSIsImluY2x1ZGVzIiwic2hpcExlbmd0aCIsInNoaXBPcmllbnRhdGlvbiIsInJvdGF0ZWQiLCJpc1ZhbGlkIiwic2hpcFBvc2l0aW9uIiwiY3VycmVudFBvc2l0aW9ucyIsImZsYXQiLCJzb21lIiwic2xpY2UiLCJFcnJvciIsInJlc3VsdCIsImhpdCIsIlNoaXAiLCJ0b0xvd2VyQ2FzZSIsImdlbmVyYXRlU2hpcHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIxIiwiY3J1aXNlcjIiLCJwYXRyb2wiLCJwb3NzaWJsZU9yaWVudGF0aW9ucyIsInNoaXBUb0JlUGxhY2VkIiwicmFuZG9tT3JpZW50YXRpb24iLCJyZXNldCIsImVuZW15Qm9hcmQiLCJoaXRzIiwic3RhcnRpbmdDb29yZGluYXRlIiwiY2VsbElEIiwiZGlyZWN0aW9uIiwidG9wQ29uc3RyYWludHMiLCJib3R0b21Db25zdHJhaW50cyIsInJpZ2h0Q29uc3RyYWludHMiLCJsZWZ0Q29uc3RyYWludHMiLCJ2YWxpZE9wdGlvbnMiLCJjb25zdHJhaW50cyIsInZhbGlkIiwiYXR0YWNrZWQiLCJzdWNjZXNzZnVsSGl0cyIsIk1hdGgiLCJhYnMiLCJoaWRlRXJyb3IiLCJyZXN0YXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoaWRlSW50cm9CdG4iLCJlcnJCdG4iLCJyZXN0YXJ0QnRuIiwiYm90aEJvYXJkcyIsImdhbWUiLCJpbml0aWFsaXplUGxhY2VtZW50Iiwib3JpZ2luYWxDb29yZCIsImZpbmFsUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9