package de.rgse.brewlog.process;

import org.apache.ibatis.logging.LogFactory;
import org.camunda.bpm.engine.runtime.Job;
import org.camunda.bpm.engine.test.ProcessEngineRule;
import org.camunda.bpm.engine.test.mock.Mocks;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;

import java.util.List;

import static org.camunda.bpm.engine.test.assertions.bpmn.AbstractAssertions.init;
import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.managementService;

public class ProcessTest {

	@Rule
	public ProcessEngineRule rule = new ProcessEngineRule();

	static {
		LogFactory.useSlf4jLogging(); // MyBatis
	}

	@Before
	public void initTest() {
		init(rule.getProcessEngine());
	}

	protected <T> T register(T objectToRegister) {
		boolean forceCreation = false;
		String name = objectToRegister.getClass().getCanonicalName();
		return register(name.substring(0, 1).toLowerCase() + name.substring(1), objectToRegister, forceCreation);
	}


	protected <T> T register(String name, T objectToRegister) {
		boolean forceCreation = false;
		return register(name, objectToRegister, forceCreation);
	}

	@SuppressWarnings("unchecked")
	protected <T> T register(String name, T objectToRegister, boolean forceCreation) {
		T registeredObject = (T) Mocks.get(name);
		if (registeredObject == null || forceCreation) {
			Mocks.register(name, objectToRegister);
			registeredObject = objectToRegister;
		}

		return registeredObject;
	}


	protected void executeJobs() {
		List<Job> jobs = managementService().createJobQuery().list();
		Assert.assertFalse("There was no process engine job to be executed", jobs.isEmpty());

		for (Job job : jobs) {
			managementService().executeJob(job.getId());
		}
	}
}
