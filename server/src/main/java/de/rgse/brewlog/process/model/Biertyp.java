package de.rgse.brewlog.process.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(indexes = @Index(columnList = "name"))
public class Biertyp extends Identifiable {

	@Column(unique = true, nullable = false)
	private String name;

	@ManyToOne
	private Biersorte biersorte;

}
