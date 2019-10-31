package de.rgse.brewlog.process;

public enum ProcessVariables {

	PENDING_PAUSES("pendingPauses"),
	PAUSE_DURATION("pauseDuration");

	private final String variableName;

	ProcessVariables(String variableName) {
		this.variableName = variableName;
	}

	public String getVariableName() {
		return variableName;
	}
}
