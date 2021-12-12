const ElementType = Object.freeze({
    NORMAL: Symbol("normal"),
    WATER: Symbol("water"),
    FIRE: Symbol("fire"),
    OIL: Symbol("oil"),
    GRASS: Symbol("grass"),
    ROCK: Symbol("rock"),
    ACID: Symbol("acid"),
    METAL: Symbol("metal"),
    ELECTRICITY: Symbol("electricity")
})

class Element {
    constructor(enumeration = null, elementType = null) {
        this.enumeration = enumeration
        this.elementType = elementType
    }
}

const elements = [
    new Element(1, ElementType.NORMAL),
    new Element(2, ElementType.WATER),
    new Element(3, ElementType.FIRE),
    new Element(4, ElementType.OIL),
    new Element(5, ElementType.GRASS),
    new Element(6, ElementType.ROCK),
    new Element(7, ElementType.ACID),
    new Element(8, ElementType.METAL),
    new Element(9, ElementType.ELECTRICITY)
]

export { ElementType, elements };