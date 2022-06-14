/**
 * Compare 2 poker hands and determine the winner.
 * Heart -> h
 * Diamond -> d
 * Club -> c
 * Spades -> s
 * Ace - 14
 * King - 13
 * Queen - 12
 * Jack - 11
 * Example hands:
 * [
 * 		14h,
 * 		12s,
 * 		6s,
 * 		5d,
 * 		10c
 * ]
 * [
 * 		12s,
 * 		12h,
 * 		6h,
 * 		9c,
 * 		2d
 * ]
 * The patterns to identify are:
 * - quantity of number values
 * - sequential values
 * - suit
 */

// Returns rank of hand, 10 - 1 where 10 is the highest winning rank and 1 is the lowest.
function determineHand(hand, entries) {
	switch(entries) {
		case 5: {
			// high card
			// straight
			// straight flush
			// royal flush
			// flush
			let result;
			let suitSet = new Set();
			Object.keys(hand).forEach(({occurrence, suits}) => {
				suitSet.add(suits[0]);
			});

			if (suitSet.size === 1) {
				result = 6;
			}

			return result;
		}
		case 4: {
			// 1 pair
			return 2;
		}
		case 3: {
			// two pair
			// three of kind
			let result = 3;
			Object.keys(hand).forEach(({occurrence, suits}) => {
				if (occurrence === 3) {
					result = 4;
				}
			});
			return result;
		}
		case 2: {
			// full house
			// 4 of a kind
			let result = 7;
			Object.keys(hand).forEach(({occurrence, suits}) => {
				if (occurrence === 4) {
					result = 8;
				}
			});
			return result;
		}
		default:
			return;
	}
}

function winningPokerHand(hand1, hand2) {
	const h1Map = {};
	const h2Map = {};

	hand1.forEach(card => {
		const [value, suit] = card.match(/(\d)(\w)/gm);

		// Check if this value has been visited before
		if (!h1Map[value]) {
			h1Map[value] = {
				occurrence: 1,
				suits: [suit],
			};
		} else {
			const {
				occurrence,
				suits
			} = h1Map[value];

			h1Map[value] = {
				occurrence: occurrence + 1,
				suits: [...suits, suit]
			};
		}
	});

	hand2.forEach(card => {
		const [value, suit] = card.match(/(\d)(\w)/gm);

		// Check if this value has been visited before
		if (!h2Map[value]) {
			h2Map[value] = 1;
		} else {
			h2Map[value] = h1Map[value] + 1;
		}
	});

	const numberOfH1Keys = Object.keys(h1Map).length;
	const hand1Result = determineHand(h1Map, numberOfH1Keys);

	const numberOfH2Keys = Object.keys(h2Map).length;
	const hand2Result = determineHand(h2Map, numberOfH2Keys);

	if (hand1Result === hand2Result) {
		return 'tie';
	} else if (hand1Result > hand2Result) {
		hand1;
	} else {
		return hand2;
	}
}
