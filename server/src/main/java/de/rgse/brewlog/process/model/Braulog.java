package de.rgse.brewlog.process.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(indexes = @Index(name = "clientId", columnList = "clientId"))
@Entity
public class Braulog extends BaseEntity {

	private String clientId;

	@OneToOne(optional = false, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.REMOVE})
	private Brauansatz brauansatz;
}
