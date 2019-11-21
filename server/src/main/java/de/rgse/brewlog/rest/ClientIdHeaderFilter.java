package de.rgse.brewlog.rest;

import org.apache.commons.lang.StringUtils;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
public class ClientIdHeaderFilter implements ContainerRequestFilter {

	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		String clientId = requestContext.getHeaderString("Client-Id");

		if(StringUtils.isBlank(clientId)) {
			Response response = Response.status(Response.Status.BAD_REQUEST).entity("mandatory client id not supplied").type(MediaType.TEXT_PLAIN).build();
			requestContext.abortWith(response);

		}
	}
}
