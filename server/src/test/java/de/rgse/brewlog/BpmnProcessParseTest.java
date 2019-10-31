package de.rgse.brewlog;

import org.camunda.bpm.engine.test.Deployment;
import org.junit.Test;

public class BpmnProcessParseTest extends ProcessTest {

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
