package de.rgse.brewlog.rest.endpoints;

import com.google.gson.Gson;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.task.Task;

import javax.inject.Inject;
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

	@Path("{businessKey}")
	public Response getBrauschrittForProcess(@PathParam("businessKey") String businessKey) {
		Response.ResponseBuilder response;

		List<Task> tasks = taskService
				.createTaskQuery()
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
