package de.rgse.brewlog.process.rest;

import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import de.rgse.brewlog.process.model.UserInfo;
import de.rgse.brewlog.process.services.FirebaseService;

import javax.enterprise.inject.Produces;
import javax.inject.Inject;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.core.HttpHeaders;

public class JwtProducer {

	@HeaderParam(HttpHeaders.AUTHORIZATION)
	private String authorizationHeader;

	@Inject
	private FirebaseService firebaseService;

	public JwtProducer() {}

	JwtProducer(String authorizationHeader, FirebaseService firebaseService) {
		this.authorizationHeader = authorizationHeader;
		this.firebaseService = firebaseService;
	}

	@Produces
	private UserInfo produceClaims() throws FirebaseAuthException {
		FirebaseToken token = firebaseService.validate(authorizationHeader);
		return UserInfo.of(token);
	}
}
