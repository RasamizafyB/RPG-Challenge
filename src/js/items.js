class item {
    constructor(name, damage, heal, buff) {
        this.name = name;
        this.damage = damage;
        this.heal = heal;
        this.buff = buff;
    };
};

class sword extends item {
    constructor() {
        super('sword', 13, 10, null);
    };
};

class staff extends item {
    constructor() {
        super('staff', 10, 12, null);
    };
};

class bow extends item {
    constructor() {
        super('bow', 10, 10, '30% damage twice');
    };
};

class boots extends item {
    constructor() {
        super('boots', 10, 10, '30% dodge');
    };
};