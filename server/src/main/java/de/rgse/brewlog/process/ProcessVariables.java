package de.rgse.brewlog.process;

public enum ProcessVariables {

	PENDING_PAUSES("pendingPauses"),
	PENDING_HOPFENS("pendingHopfens"),
	HOPFEN_KOCHZEIT("hopfenKochzeit"),
	GAEHRUNGS_INTERVALL("gaehrungsIntervall"),
	GAERUNG_ABGESCHLOSSEN("gaerungAbgeschlossen"),
	PAUSE_DURATION("pauseDuration"),
	CLIENT_ID("clientId");

	private final String variableName;

	ProcessVariables(String variableName) {
		this.variableName = variableName;
	}

	public String getVariableName() {
		return variableName;
	}
}
