package de.rgse.brewlog.process.rest.endpoints;

import com.google.firebase.auth.FirebaseAuthException;
import de.rgse.brewlog.process.services.FirebaseService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.apache.http.HttpStatus;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;

@Path("auth")
@NoArgsConstructor
@AllArgsConstructor
public class AuthEndpoint {

	@Inject
	private FirebaseService firebaseService;

	@GET
	@Path("{email}")
	public Response login(@PathParam("email") String email) throws FirebaseAuthException {
		String link = firebaseService.createLink(email);
		return Response.status(HttpStatus.SC_MOVED_TEMPORARILY).header(HttpHeaders.LOCATION, "link").build();

	}
}
