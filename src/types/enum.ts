// @Creating Enums in TypeScript
enum CardinalDirection {
    north,
    Ease,
    south,
    west,
}

enum CardinalDirection {
    North = 'N',
    East = 'E',
    South = 'S',
    West = 'W'
}

// @Bi-directional Enum Members

// This becomes the following code when compiled to JavaScript using the TypeScript compiler:
// var CardinalDirection;
// (function (CardinalDirection) {
//     CardinalDirection["North"] = "N";
//     CardinalDirection["East"] = "E";
//     CardinalDirection["South"] = "S";
//     CardinalDirection["West"] = "W";
// })(CardinalDirection || (CardinalDirection = {}));
// @Using Enums in TypeScript
const direction: CardinalDirection = 5;
const test1: typeof CardinalDirection = {
    North: CardinalDirection.North,
    East: CardinalDirection.East,
    South: CardinalDirection.South,
    West: CardinalDirection.West,
    north: CardinalDirection.north,
    Ease: CardinalDirection.Ease,
    south: CardinalDirection.south,
    west: CardinalDirection.west
}
// @Using Bit Flags with TypeScript Enums

enum PlayerSkills {
    SkillA = 1 << 0,
    SkillB = 1 << 1,
    SkillC = 1 << 2,
    SkillD = 1 << 3,
};
console.log(direction)
export {}