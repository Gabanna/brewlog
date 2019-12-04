package de.rgse.brewlog.process;

import de.rgse.brewlog.process.delegates.PendingPauseDelegate;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.test.Deployment;
import org.camunda.bpm.engine.test.mock.Mocks;
import org.junit.After;
import org.junit.Test;
import org.mockito.Matchers;
import org.mockito.Mockito;

import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.*;

public class BpmProcessMaischenTest extends ProcessTest {

	@After
	public void after() {
		Mocks.reset();
	}

	@Test
	@Deployment(resources = {
			"processes/maischen.bpmn",
	})
	public void test_happyPath() {
		PendingPauseDelegate pendingPauseDelegate = Mockito.mock(PendingPauseDelegate.class);

		Mockito.doAnswer(invocation -> {
			invocation.getArgumentAt(0, DelegateExecution.class).getProcessInstance().setVariable(ProcessVariables.PENDING_PAUSES.getVariableName(), false);
			return null;
		}).when(pendingPauseDelegate).execute(Matchers.any(DelegateExecution.class));

		register("pendingPauseDelegate", pendingPauseDelegate);

		ProcessInstance process_maischen = runtimeService().startProcessInstanceByKey("Process_Maischen");
		assertThat(process_maischen).isWaitingAt("UserTask_Einmaischen");
		complete(task());

		assertThat(process_maischen).isWaitingAt("UserTask_EiweissrastenPlanen");
		complete(task());

		assertThat(process_maischen).isWaitingAt("UserTask_JodprobeDurchfuehren");
		complete(task());

		assertThat(process_maischen).isEnded();
	}

	@Test
	@Deployment(resources = {
			"processes/maischen.bpmn",
	})
	public void test_pathWithCircle() {
		PendingPauseDelegate pendingPauseDelegate = Mockito.mock(PendingPauseDelegate.class);

		Mockito.doAnswer(invocation -> {
			invocation.getArgumentAt(0, DelegateExecution.class).getProcessInstance().setVariable(ProcessVariables.PENDING_PAUSES.getVariableName(), true);
			return null;
		}).when(pendingPauseDelegate).execute(Matchers.any(DelegateExecution.class));

		register("pendingPauseDelegate", pendingPauseDelegate);

		ProcessInstance process_maischen = runtimeService().startProcessInstanceByKey("Process_Maischen");
		assertThat(process_maischen).isWaitingAt("UserTask_Einmaischen");
		complete(task());

		assertThat(process_maischen).isWaitingAt("UserTask_EiweissrastenPlanen");
		complete(task());

		assertThat(process_maischen).isWaitingAt("UserTask_EiweissrastBeginnen");
		runtimeService().setVariable(process_maischen.getId(), ProcessVariables.PAUSE_DURATION.getVariableName(), "PT1S");
		complete(task());

		assertThat(process_maischen).isWaitingAt("IntermediateThrowEvent_EiweissrastAbwarten");
		Mockito.doAnswer(invocation -> {
			invocation.getArgumentAt(0, DelegateExecution.class).getProcessInstance().setVariable(ProcessVariables.PENDING_PAUSES.getVariableName(), false);
			return null;
		}).when(pendingPauseDelegate).execute(Matchers.any(DelegateExecution.class));
		executeJobs();

		assertThat(process_maischen).isWaitingAt("UserTask_JodprobeDurchfuehren");
		complete(task());

		assertThat(process_maischen).isEnded();
	}
}
