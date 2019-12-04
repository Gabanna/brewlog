package de.rgse.brewlog.process.rest.endpoints;

import com.google.gson.Gson;
import de.rgse.brewlog.process.ProcessVariables;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.task.Task;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("brauschritt")
public class BrauschrittEndpoint {

	@Inject
	private TaskService taskService;

	public BrauschrittEndpoint(){}

	public BrauschrittEndpoint(TaskService taskService) {
		this.taskService = taskService;
	}

	@GET
	public Response getBrauschritte(@HeaderParam("Client-Id") String clientId) {
		Response.ResponseBuilder response;

		List<Task> tasks = taskService
				.createTaskQuery()
				.processVariableValueEquals(ProcessVariables.CLIENT_ID.getVariableName(), clientId)
				.list();

		if(tasks.isEmpty()) {
			response = Response.noContent();

		} else {
			String json = new Gson().toJson(tasks);
			response = Response.ok(json, MediaType.APPLICATION_JSON_TYPE);
		}

		return response.build();
	}

	@Path("{businessKey}")
	@GET
	public Response getBrauschrittForProcess(@HeaderParam("Client-Id") String clientId, @PathParam("businessKey") String businessKey) {
		Response.ResponseBuilder response;

		List<Task> tasks = taskService
				.createTaskQuery()
				.processVariableValueEquals(ProcessVariables.CLIENT_ID.getVariableName(), clientId)
				.processInstanceBusinessKey(businessKey)
				.list();

		if(tasks.isEmpty()) {
			response = Response.noContent();

		} else {
			String json = new Gson().toJson(tasks);
			response = Response.ok(json, MediaType.APPLICATION_JSON_TYPE);
		}

		return response.build();
	}
}
