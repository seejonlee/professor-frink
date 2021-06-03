const {
	isUnique,
	isUniqueWithoutDataStructure
} = require('./arrays_strings');

// 1.1 Is Unique
console.log(isUnique('and'), 'should be true');
console.log(isUnique('andd'), 'should be false');
console.log(isUnique('unique'), 'should be false');
console.log(isUniqueWithoutDataStructure('and'), 'should be true');
console.log(isUniqueWithoutDataStructure('andd'), 'should be false');
console.log(isUniqueWithoutDataStructure('unique'), 'should be false');
