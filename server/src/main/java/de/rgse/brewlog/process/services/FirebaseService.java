package de.rgse.brewlog.process.services;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.*;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import de.rgse.brewlog.process.util.FirebaseVariables;
import de.rgse.brewlog.process.util.VariableReader;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Initialized;
import javax.enterprise.event.Observes;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Optional;

@Slf4j
@ApplicationScoped
public class FirebaseService {

	public void init(@Observes @Initialized(ApplicationScoped.class) Object init) {
		try {
			log.debug("initialising firebase");
			Optional<String> dataBaseUrl = VariableReader.getVariable(FirebaseVariables.GOOGLE_APPLICATION_CREDENTIALS.name());

			if(dataBaseUrl.isPresent()) {
				try(InputStream inputStream = FileUtils.openInputStream(new File(dataBaseUrl.get()))) {
					JsonObject jsonObject = new Gson().fromJson(new InputStreamReader(inputStream), JsonObject.class);
					String projectId = jsonObject.get("project_id").getAsString();
					FirebaseOptions options = new FirebaseOptions.Builder()
							.setCredentials(GoogleCredentials.getApplicationDefault())
							.setProjectId(projectId)
							.setDatabaseUrl(String.format("https://%s.firebaseio.com", projectId))
							.setStorageBucket(String.format("https://%s.appspot.com", projectId))
							.build();

					FirebaseApp.initializeApp(options);
					log.info("firebase successfully initialised");
				}

			} else {
				throw new RuntimeException("variable FIREBASE_DATABASE_URL not set");
			}

		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	public UserRecord getUser(String userId) throws FirebaseAuthException {
		UserRecord userRecord = FirebaseAuth.getInstance().getUser(userId);
		return userRecord;
	}

	public FirebaseToken validate(String token) throws FirebaseAuthException {
		return FirebaseAuth.getInstance().verifyIdToken(token);
	}

	public String createLink(String email) throws FirebaseAuthException {
		ActionCodeSettings actionCodeSettings = ActionCodeSettings.builder().setUrl("http://localhost:8080/login.html").build();
		return FirebaseAuth.getInstance().generateSignInWithEmailLink(email, actionCodeSettings);
	}
}
