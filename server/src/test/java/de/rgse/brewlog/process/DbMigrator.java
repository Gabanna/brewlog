package de.rgse.brewlog.process;

import org.flywaydb.core.Flyway;
import org.flywaydb.core.api.configuration.FluentConfiguration;

public class DbMigrator {

		private Flyway flyway;

	public DbMigrator(String url, String username, String password) {
		flyway = createFlyway(Flyway.configure().dataSource(url, username, password));
	}

	public void migrate() {
		flyway.migrate();
	}

	private Flyway createFlyway(FluentConfiguration config) {
		return config
				.locations("/db/migration")
				.baselineVersion("0.0.0")
				.baselineOnMigrate(true)
				.load();
	}
}
