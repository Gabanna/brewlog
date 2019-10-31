package de.rgse.brewlog.process.delegates;

import de.rgse.brewlog.process.ProcessVariables;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

public class PendingPauseDelegate implements JavaDelegate {

	public PendingPauseDelegate(){}

	@Override
	public void execute(DelegateExecution delegateExecution) {
		delegateExecution.getProcessInstance().setVariable(ProcessVariables.PENDING_PAUSES.getVariableName(), false);
	}
}
