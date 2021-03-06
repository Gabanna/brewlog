package de.rgse.brewlog.process.rest.auth;

import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import de.rgse.brewlog.process.model.UserInfo;
import de.rgse.brewlog.process.services.FirebaseService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.apache.commons.lang.StringUtils;

import javax.inject.Inject;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

@Provider
@AllArgsConstructor
@NoArgsConstructor
public class JwtFilter implements ContainerRequestFilter {

	@Inject
	private FirebaseService service;

	@Context
	private ResourceInfo resourceInfo;

	@Override
	public void filter(ContainerRequestContext requestContext) {
		Auth annotation = resourceInfo.getResourceClass().getAnnotation(Auth.class);

		if (annotation == null) {
			annotation = resourceInfo.getResourceMethod().getAnnotation(Auth.class);
		}

		if (annotation != null) {


			String authHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

			if (StringUtils.isBlank(authHeader)) {
				Response response = Response.status(Response.Status.BAD_REQUEST).entity("authorization information not supplied").type(MediaType.TEXT_PLAIN).build();
				requestContext.abortWith(response);

			} else {
				try {
					FirebaseToken token = service.validate(authHeader);
					UserInfo userInfo = UserInfo.of(token);
					requestContext.setProperty(UserInfo.NAME, userInfo);

				} catch (FirebaseAuthException e) {
					Response response = Response.status(Response.Status.UNAUTHORIZED).entity("unauthorized").type(MediaType.TEXT_PLAIN).build();
					requestContext.abortWith(response);
				}
			}
		}
	}
}
