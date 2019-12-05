create table Biersorte (
	id varchar(255) not null primary key,
	name varchar(255) not null UNIQUE
);

create table Biertyp (
	id varchar(255) not null primary key,
	name varchar(255) not null UNIQUE,
	biersorte_id varchar(255),
	FOREIGN KEY (biersorte_id) REFERENCES Biersorte(id)
);

create table Brauansatz (
	id varchar(255) not null primary key,
	created timestamp not null,
    updated timestamp not null,
    brauverfahren varchar(255) not null,
    brautag timestamp,
    brauer varchar(255),
    hefeart varchar(255) not null,
    biermengeInMl bigint not null,
    biertyp_id varchar(255) not null,
    FOREIGN KEY (biertyp_id) REFERENCES Biertyp(id)
);

create table Braulog (
	id varchar(255) not null primary key,
	clientId varchar(255) not null,
	created timestamp not null,
    updated timestamp not null,
    brauansatz_id varchar(255) not null,
    FOREIGN KEY (brauansatz_id) REFERENCES Brauansatz(id)
);
