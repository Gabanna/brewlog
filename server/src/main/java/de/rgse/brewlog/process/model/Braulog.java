package de.rgse.brewlog.process.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(indexes = @Index(name = "clientId", columnList = "clientId"))
@Entity
public class Braulog extends BaseEntity {

    private String clientId;

    @OneToOne
    private Brauansatz brauansatz;
}

