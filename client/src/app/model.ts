class Identifiable {
    id: string;
}

class BaseEntity extends Identifiable {
    created: Date;
	updated: Date;
}

class BrewLog extends BaseEntity {
    clientId: string;
    brauansatz: Brauansatz;
}

class Brauansatz extends BaseEntity {
    brauverfahren: Brauverfahren;
    brautag: Date;
    biertyp: Biertyp;
    brauer: string;
    hefeart: Hefeart;
    biermengeInMlnumber;
}

class Biertyp extends Identifiable {
    name: string;
    biersorte: Biersorte;
}

class Biersorte extends Identifiable {
    name: string;
}

enum Brauverfahren{
    INFUSION, DEKOKTION, ANDERE
}

enum Hefeart {
    OBERGAERIG, UNTERGAERIG
}

export {
    BrewLog,
    Brauansatz,
    Hefeart
};
