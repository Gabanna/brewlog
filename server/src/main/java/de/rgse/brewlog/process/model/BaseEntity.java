package de.rgse.brewlog.process.model;

import org.apache.commons.lang.StringUtils;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@MappedSuperclass
public class BaseEntity {

	@Id
	private String id;

	private LocalDateTime created;

	@Version
	private LocalDateTime updated;

	@PrePersist
	private void prePersist() {
		if(StringUtils.isBlank(id)) {
			id = UUID.randomUUID().toString();
		}

		created = LocalDateTime.now();
		updated = LocalDateTime.now();
	}

	@PreUpdate
	private void preUpdate() {
		updated = LocalDateTime.now();
	}
}
