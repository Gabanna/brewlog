package de.rgse.brewlog.process.util;

import lombok.extern.slf4j.Slf4j;

import java.util.Optional;

@Slf4j
public class VariableReader {

	/**
	 * this method reads the variable value by name. ISt reads the following sources in order:
	 * <ol>
	 *     <li>jvm parameter</li>
	 *     <li>environment variable</li>
	 * </ol>
	 * @param variablename
	 * @return the value of the variable wrapped in an Optional
	 */
	public static Optional<String> getVariable(String variablename) {
		String value = null;

		value = System.getProperty(variablename);
		if(value == null) {
			value = System.getenv(variablename);
			if(value != null) {
				log.debug("property {} found as environment variable: {}", variablename, value);
			}
		} else {
			log.debug("property {} found as jvm parameter: {}", variablename, value);
		}

		if(value == null) {
			log.debug("property {} not found", variablename);
		}

		return Optional.ofNullable(value);
	}
}
