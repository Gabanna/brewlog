package de.rgse.brewlog.process.services;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import de.rgse.brewlog.process.util.FirebaseVariables;
import de.rgse.brewlog.process.util.VariableReader;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Initialized;
import javax.enterprise.event.Observes;
import java.io.IOException;
import java.util.Optional;

@ApplicationScoped
public class FirebaseService {

	public void init(@Observes @Initialized(ApplicationScoped.class) Object init) {
		try {
			Optional<String> dataBaseUrl = VariableReader.getVariable(FirebaseVariables.FIREBASE_DATABASE_URL.name());

			if(dataBaseUrl.isPresent()) {
				FirebaseOptions options = new FirebaseOptions.Builder()
						.setCredentials(GoogleCredentials.getApplicationDefault())
						.setDatabaseUrl(dataBaseUrl.get())
						.build();

				FirebaseApp.initializeApp(options);
			} else {
				throw new RuntimeException("variable FIREBASE_DATABASE_URLnot set");
			}

		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	public UserRecord getUser(String userId) throws FirebaseAuthException {
		UserRecord userRecord = FirebaseAuth.getInstance().getUser(userId);
		return userRecord;
	}
}
