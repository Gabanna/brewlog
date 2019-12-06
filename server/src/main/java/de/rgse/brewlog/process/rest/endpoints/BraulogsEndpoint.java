package de.rgse.brewlog.process.rest.endpoints;

import de.rgse.brewlog.process.model.Braulog;
import de.rgse.brewlog.process.model.UserInfo;
import de.rgse.brewlog.process.model.vo.CreateBraulogRequest;
import de.rgse.brewlog.process.services.BraulogService;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.List;

@Transactional
@Path("braulogs")
public class BraulogsEndpoint {

	@Inject
	private UserInfo userInfo;

	@Inject
	private BraulogService braulogService;

	public BraulogsEndpoint(){}

	public BraulogsEndpoint(BraulogService braulogService, UserInfo userInfo){
		this.braulogService = braulogService;
		this.userInfo = userInfo;
	}

	@GET
	public List<Braulog> getLogs() {
		return braulogService.getBraulogs(userInfo.getUserId());
	}

	@POST
	public Braulog createLog(CreateBraulogRequest braulog) {
		return braulogService.create(userInfo.getUserId(), braulog);
	}
}
