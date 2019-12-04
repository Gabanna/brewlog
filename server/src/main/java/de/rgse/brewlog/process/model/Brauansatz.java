package de.rgse.brewlog.process.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Brauansatz extends BaseEntity {

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Brauverfahren brauverfahren;

    private LocalDateTime brautag;

    @ManyToOne(optional = false)
    private Biertyp biertyp;

    private String brauer;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Hefeart hefeart;

    @Column(nullable = false)
    private float biermengeInL;

}
