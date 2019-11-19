package de.rgse.brewlog.rest;

import com.google.gson.Gson;
import de.rgse.brewlog.ProcessTest;
import de.rgse.brewlog.rest.endpoints.BrauschrittEndpoint;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.test.Deployment;
import org.junit.Assert;
import org.junit.Test;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import java.util.List;

import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.*;

public class BrauschrittEndpointTest extends ProcessTest {

	@Test
	@Deployment(resources = {
			"processes/vorbereitung.bpmn"
	})
	public void test_() {
		String businessKey = "bk";
		ProcessInstance processVorbereitung = runtimeService().startProcessInstanceByKey("Process_Vorbereitung", businessKey);

		BrauschrittEndpoint bet = new BrauschrittEndpoint(taskService());
		Response response = bet.getBrauschrittForProcess(businessKey);

		Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
		Assert.assertEquals(MediaType.APPLICATION_JSON_TYPE, response.getMediaType());

		List list = new Gson().fromJson(response.getEntity().toString(), List.class);
		Assert.assertEquals(1, list.size());
	}
}
