package de.rgse.brewlog.process.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Brauansatz extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private Brauverfahren brauverfahren;

    private LocalDateTime brautag;

    @ManyToOne
    private Biertyp biertyp;
    private String brauer;

    @Enumerated(EnumType.STRING)
    private Hefeart hefeart;

    private float biermengeInL;

}
