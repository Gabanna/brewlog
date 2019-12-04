package de.rgse.brewlog.process;

import org.camunda.bpm.engine.form.FormField;
import org.camunda.bpm.engine.form.TaskFormData;
import org.camunda.bpm.engine.impl.form.type.StringFormType;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.test.Deployment;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.*;

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
	public void test_parseProcesses() {
	}

	@Test
	@Deployment(resources = {
			"processes/vorbereitung.bpmn"
	})
	public void test_parseFormfields() {
		String businessKey = "bk";
		ProcessInstance processVorbereitung = runtimeService().startProcessInstanceByKey("Process_Vorbereitung", businessKey);
		assertThat(processVorbereitung).isActive();
		TaskFormData taskFormData = formService().getTaskFormData(task().getId());
		List<FormField> formFields = taskFormData.getFormFields();

		Assert.assertEquals(1, formFields.size());
		Assert.assertEquals("Biername", formFields.get(0).getLabel());
		Assert.assertEquals(StringFormType.TYPE_NAME, formFields.get(0).getType().getName());
	}
}
