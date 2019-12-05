package de.rgse.brewlog.process.model;

import lombok.Data;
import org.apache.commons.lang.StringUtils;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@MappedSuperclass
public abstract class Identifiable {

	@Id
	private String id;

	@PrePersist
	private void prePersist() {
		if(StringUtils.isBlank(id)) {
			id = UUID.randomUUID().toString();
		}
	}
}
