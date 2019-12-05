package de.rgse.brewlog.process.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Data
@Entity
public class Biersorte extends Identifiable {

	@Column(unique = true, nullable = false)
	private String name;
}
