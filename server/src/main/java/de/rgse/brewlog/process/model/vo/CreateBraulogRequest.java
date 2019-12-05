package de.rgse.brewlog.process.model.vo;

import de.rgse.brewlog.process.model.Brauverfahren;
import de.rgse.brewlog.process.model.Hefeart;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreateBraulogRequest {

	private Brauverfahren brauverfahren;

	private LocalDateTime brautag;

	private String biertypId;

	private String brauer;

	private Hefeart hefeart;

	private long biermengeInMl;
}
