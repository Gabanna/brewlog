package de.rgse.brewlog.rest.endpoints;

import de.rgse.brewlog.process.model.Braulog;
import de.rgse.brewlog.process.services.BraulogService;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.List;

@Transactional
@Path("braulogs")
public class BraulogsEndpoint {

	@HeaderParam("Client-Id")
	private String clientId;

	@Inject
	private BraulogService braulogService;

	public BraulogsEndpoint(){}

	public BraulogsEndpoint(BraulogService braulogService, String clientId){
		this.braulogService = braulogService;
		this.clientId = clientId;
	}

	@GET
	public List<Braulog> getLogs() {
		return braulogService.getBraulogs(clientId);
	}
}
