package de.rgse.brewlog;

import org.apache.ibatis.logging.LogFactory;
import org.camunda.bpm.engine.runtime.Job;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.test.Deployment;
import org.camunda.bpm.engine.test.ProcessEngineRule;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

import java.util.List;

import static org.camunda.bpm.engine.test.assertions.ProcessEngineTests.init;
import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.*;

public class BpmnProcessParseTest {

	@Rule
	public ProcessEngineRule rule = new ProcessEngineRule();

	static {
		LogFactory.useSlf4jLogging(); // MyBatis
	}

	@Before
	public void initTest() {
		init(rule.getProcessEngine());
	}

	protected void executeJobs() {
		List<Job> jobs = managementService().createJobQuery().list();
		Assert.assertFalse("There was no process engine job to be executed", jobs.isEmpty());

		for (Job job : jobs) {
			managementService().executeJob(job.getId());
		}
	}

	@Test
	@Deployment(resources = {
			"processes/brew-process.bpmn",
			"processes/vorbereitung.bpmn",
			"processes/maischen.bpmn",
			"processes/laeutern.bpmn",
			"processes/hopfen_kochen.bpmn",
			"processes/kuehlen.bpmn",
			"processes/gaerung.bpmn",
			"processes/abfuellung.bpmn",
	})
	public void test_parseProcesses() {}
}
