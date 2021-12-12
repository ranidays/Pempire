//This is an enum btw
const MoveType = Object.freeze({
    ATTACK: Symbol("attack"),
    SPECIAL: Symbol("special"),
    POTION: Symbol("potion"),
    SCROLL: Symbol("scroll")
});

//This refers to attacks, specials, potions and scrolls
class Move {
    constructor(identifier = null, name = null, enumeration = null, moveType = null) {
        this.identifier = identifier;
        this.name = name;
        this.enumeration = enumeration;
        this.moveType = moveType;
    }
}

const moves = [
    new Move("Att1", "Violent Charge", 1, MoveType.ATTACK),
    new Move("Att2", "Corrosive Punch", 2, MoveType.ATTACK),
    new Move("Att3", "Fireball", 3, MoveType.ATTACK),
    new Move("Att4", "Full-Power Blast", 4, MoveType.ATTACK),
    new Move("SM1", "Corrosive Dart", 1, MoveType.SPECIAL),
    new Move("SM2", "Bright Flash", 2, MoveType.SPECIAL),
];

const findMoveByIdentifier = (identifier) => moves.find(move => move.identifier == identifier);

const findMoveByEnumeration = (enumeration) => moves.find(move => move.enumeration == enumeration);

export { MoveType, moves, findMoveByIdentifier, findMoveByEnumeration };