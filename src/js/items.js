class item {
    constructor(name, damage, heal, buff) {
        this.name = name;
        this.damage = damage
        this.heal = heal
        this.buff = buff
    };
};

class sword extends item {
    constructor() {
        super('sword', 13, 10, null)
    };
};


class staff extends item {
    constructor() {
        super('staff', 10, 12, null)
    };
};

class bow extends item {
    constructor() {
        super('bow', 10, 10, '30% damage twice')
    };
};

class boots extends item {
    constructor() {
        super('boots', 10, 10, '30% dodge')
    };
};

              

// buttonSword = new sword;
// buttonStaff = new staff;
// buttonBow = new bow;
// buttonBoots = new boots;

switch (itemPlayer1) {
    case 'sword':
        itemPlayer1 = new sword ();
        break;
        
    case 'bow':
        itemPlayer1 = new bow ();
        break;
        
    case 'staff':
        itemPlayer1 = new staff ();
        break;
        
    case 'boots':
        itemPlayer1 = new boots ();
        break;

    default:
        break;
};

switch (itemPlayer2) {
    case 'sword':
        itemPlayer2 = new sword ();
        break;
        
    case 'bow':
        itemPlayer2 = new bow ();
        break;
        
    case 'staff':
        itemPlayer2 = new staff ();
        break;
        
    case 'boots':
        itemPlayer2 = new boots ();
        break;

    default:
        break;
};