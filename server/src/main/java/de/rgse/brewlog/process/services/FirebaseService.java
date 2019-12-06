package de.rgse.brewlog.process.services;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import de.rgse.brewlog.process.util.FirebaseVariables;
import de.rgse.brewlog.process.util.VariableReader;
import org.apache.commons.io.FileUtils;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Initialized;
import javax.enterprise.event.Observes;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Optional;

@ApplicationScoped
public class FirebaseService {

	public void init(@Observes @Initialized(ApplicationScoped.class) Object init) {
		try {

			Optional<String> dataBaseUrl = VariableReader.getVariable(FirebaseVariables.GOOGLE_APPLICATION_CREDENTIALS.name());

			if(dataBaseUrl.isPresent()) {
				try(InputStream inputStream = FileUtils.openInputStream(new File(dataBaseUrl.get()))) {
					JsonObject jsonObject = new Gson().fromJson(new InputStreamReader(inputStream), JsonObject.class);
					FirebaseOptions options = new FirebaseOptions.Builder()
							.setCredentials(GoogleCredentials.getApplicationDefault())
							.setDatabaseUrl(String.format("https://%s.firebaseio.com", jsonObject.get("project_id").getAsString()))
							.build();

					FirebaseApp.initializeApp(options);
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
}
