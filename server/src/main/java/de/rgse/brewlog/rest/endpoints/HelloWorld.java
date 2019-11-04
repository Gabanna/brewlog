package de.rgse.brewlog.rest.endpoints;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/")
public class HelloWorld {

	@GET
	@Produces("text/plain")
	public String helloWorld() {
		return "world";
	}
}
