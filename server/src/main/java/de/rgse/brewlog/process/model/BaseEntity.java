package de.rgse.brewlog.process.model;

import com.google.gson.Gson;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@MappedSuperclass
public class BaseEntity extends Identifiable {

	private LocalDateTime created;

	private LocalDateTime updated;

	@PrePersist
	private void prePersistBaseEntity() {
		created = LocalDateTime.now();
		updated = created;
	}

	@PreUpdate
	private void preUpdate() {
		updated = LocalDateTime.now();
	}

	@Override
	public String toString() {
		return new Gson().toJson(this);
	}
}
