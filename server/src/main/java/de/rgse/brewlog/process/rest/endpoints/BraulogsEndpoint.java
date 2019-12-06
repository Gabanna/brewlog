package de.rgse.brewlog.process.rest.endpoints;

import de.rgse.brewlog.process.model.Braulog;
import de.rgse.brewlog.process.model.UserInfo;
import de.rgse.brewlog.process.model.vo.CreateBraulogRequest;
import de.rgse.brewlog.process.services.BraulogService;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
import java.util.List;

@Transactional
@Path("braulogs")
public class BraulogsEndpoint extends UserInfoConsumer {

	@Inject
	private BraulogService braulogService;

	public BraulogsEndpoint(){}

	public BraulogsEndpoint(BraulogService braulogService, HttpServletRequest context){
		super(context);
		this.braulogService = braulogService;
	}

	@GET
	public List<Braulog> getLogs() {
		return braulogService.getBraulogs(userInfo().getUserId());
	}

	@POST
	public Braulog createLog(CreateBraulogRequest braulog) {
		return braulogService.create(userInfo().getUserId(), braulog);
	}
}
