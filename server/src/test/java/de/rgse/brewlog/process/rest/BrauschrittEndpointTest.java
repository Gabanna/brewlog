package de.rgse.brewlog.process.rest;

import com.google.gson.Gson;
import de.rgse.brewlog.process.ProcessTest;
import de.rgse.brewlog.process.ProcessVariables;
import de.rgse.brewlog.process.rest.endpoints.BrauschrittEndpoint;
import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.test.Deployment;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import java.util.List;

import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.*;

@Slf4j
public class BrauschrittEndpointTest extends ProcessTest {

	@Ignore
	@Test
	@Deployment(resources = {
			"processes/vorbereitung.bpmn"
	})
	public void test_getEntity() {
		String businessKey = "bk";
		String clientId = "clientId";
		ProcessInstance processVorbereitung = runtimeService().startProcessInstanceByKey("Process_Vorbereitung", businessKey);
		runtimeService().setVariable(processVorbereitung.getId(), ProcessVariables.CLIENT_ID.getVariableName(), clientId);

		BrauschrittEndpoint bet = new BrauschrittEndpoint(taskService());
		Response response = bet.getBrauschrittForProcess(clientId, businessKey);

		Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
		Assert.assertEquals(MediaType.APPLICATION_JSON_TYPE, response.getMediaType());

		List list = new Gson().fromJson(response.getEntity().toString(), List.class);
		Assert.assertEquals(1, list.size());
		log.info(list.toString());
	}
}
