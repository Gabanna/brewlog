package de.rgse.brewlog.process.rest;

import com.google.firebase.auth.FirebaseAuthException;
import de.rgse.brewlog.process.services.FirebaseService;
import org.apache.commons.lang.StringUtils;

import javax.inject.Inject;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
public class JwtFilter implements ContainerRequestFilter {

	@Inject
	private FirebaseService service;

	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		String authHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

		if(StringUtils.isBlank(authHeader)) {
			Response response = Response.status(Response.Status.BAD_REQUEST).entity("authorization information not supplied").type(MediaType.TEXT_PLAIN).build();
			requestContext.abortWith(response);

		} else {
			try{
				service.validate(authHeader);
			} catch(FirebaseAuthException e) {
				Response response = Response.status(Response.Status.UNAUTHORIZED).entity("unauthorized").type(MediaType.TEXT_PLAIN).build();
				requestContext.abortWith(response);
			}
		}
	}
}
