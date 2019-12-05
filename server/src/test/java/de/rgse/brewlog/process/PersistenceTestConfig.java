package de.rgse.brewlog.process;

import com.google.gson.Gson;
import lombok.Data;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

@Data
public class PersistenceTestConfig {

	private String username;
	private String password;
	private String jdbcUrl;
	private String driver;

	public Map<String, Object> asJdbcProps() {
		Map<String, Object> props = new HashMap<>();

		props.put("javax.persistence.jdbc.driver", driver);
		props.put("javax.persistence.jdbc.url", jdbcUrl);
		props.put("javax.persistence.jdbc.user", username);
		props.put("javax.persistence.jdbc.password", password);

		return props;
	}

	public static PersistenceTestConfig readConfig() throws IOException {
		try (InputStream inputStream = PersistenceTestConfig.class.getResourceAsStream("/persistence-config.json")) {
			return new Gson().fromJson(new InputStreamReader(inputStream), PersistenceTestConfig.class);
		}
	}
}
